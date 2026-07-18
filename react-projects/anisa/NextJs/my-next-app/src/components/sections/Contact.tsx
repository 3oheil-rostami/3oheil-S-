"use client";

import { useActionState, useEffect, useRef } from "react";
import { Loader2, Mail, Phone, SendHorizonal } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/motion/Reveal";
import {
  submitContact,
  type ContactFormState,
} from "@/lib/actions/contact";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const initialState: ContactFormState = { status: "idle" };

type ErrorKey = keyof Dictionary["contact"]["errors"];

export function Contact({ dict }: { dict: Dictionary }) {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Localize error keys returned by the server action
  const errorFor = (field: "name" | "email" | "message" | "form") => {
    const key = state.errors?.[field] as ErrorKey | undefined;
    return key ? dict.contact.errors[key] : undefined;
  };

  useEffect(() => {
    if (state.status === "success") {
      toast.success(dict.contact.success);
      formRef.current?.reset();
    } else if (state.status === "error" && state.errors?.form) {
      toast.error(errorFor("form"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <h2
              id="contact-heading"
              className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {dict.contact.heading}
            </h2>
            <p className="text-muted-foreground sm:text-lg">
              {dict.contact.subheading}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a
                href="mailto:soheilrostami023@gmail.com"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
              >
                <Mail className="size-4" />
                soheilrostami023@gmail.com
              </a>
              <a
                href="tel:+989944154802"
                dir="ltr"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
              >
                <Phone className="size-4" />
                0994 415 4802
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Card>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">{dict.contact.nameLabel}</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder={dict.contact.namePlaceholder}
                      defaultValue={state.values?.name}
                      aria-invalid={!!errorFor("name")}
                      aria-describedby={errorFor("name") ? "name-error" : undefined}
                    />
                    {errorFor("name") && (
                      <p id="name-error" role="alert" className="text-sm text-destructive">
                        {errorFor("name")}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">{dict.contact.emailLabel}</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      dir="ltr"
                      placeholder={dict.contact.emailPlaceholder}
                      defaultValue={state.values?.email}
                      aria-invalid={!!errorFor("email")}
                      aria-describedby={errorFor("email") ? "email-error" : undefined}
                    />
                    {errorFor("email") && (
                      <p id="email-error" role="alert" className="text-sm text-destructive">
                        {errorFor("email")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">{dict.contact.messageLabel}</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder={dict.contact.messagePlaceholder}
                    defaultValue={state.values?.message}
                    aria-invalid={!!errorFor("message")}
                    aria-describedby={errorFor("message") ? "message-error" : undefined}
                  />
                  {errorFor("message") && (
                    <p id="message-error" role="alert" className="text-sm text-destructive">
                      {errorFor("message")}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      {dict.contact.submitting}
                    </>
                  ) : (
                    <>
                      <SendHorizonal className="size-4 rtl:-scale-x-100" />
                      {dict.contact.submit}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
