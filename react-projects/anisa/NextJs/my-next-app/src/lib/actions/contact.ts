"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "nameRequired"),
  email: z.string().trim().email("emailInvalid"),
  message: z.string().trim().min(10, "messageTooShort"),
});

export type ContactFields = z.infer<typeof contactSchema>;

/** Error keys map to dict.contact.errors.* for localized messages */
export interface ContactFormState {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<keyof ContactFields | "form", string>>;
  /** Echo submitted values back so the form stays filled on error */
  values?: Partial<ContactFields>;
}

/** Where contact-form messages are delivered */
const CONTACT_EMAIL = "soheilrostami023@gmail.com";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(fields: ContactFields): Promise<void> {
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: fields.email,
    subject: `Portfolio contact from ${fields.name}`,
    text: `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof ContactFields;
      errors[field] ??= issue.message;
    }
    return { status: "error", errors, values: raw };
  }

  try {
    await sendEmail(parsed.data);
    return { status: "success" };
  } catch {
    return { status: "error", errors: { form: "generic" }, values: raw };
  }
}
