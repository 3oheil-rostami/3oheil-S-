import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/soheilrostami",
    Icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/soheilrostami",
    Icon: FaLinkedinIn,
  },
  {
    name: "Telegram",
    href: "https://t.me/soheilrostami",
    Icon: SiTelegram,
  },
];

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <a
            href="mailto:soheilrostami023@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="size-4" aria-hidden />
            <span dir="ltr">soheilrostami023@gmail.com</span>
          </a>
          <a
            href="tel:+989944154802"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone className="size-4" aria-hidden />
            <span dir="ltr">+98 994 415 4802</span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {dict.hero.name} — {dict.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <p className="hidden text-xs text-muted-foreground sm:block">
              {dict.footer.builtWith}
            </p>
            <ul className="flex items-center gap-2">
              {socials.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
