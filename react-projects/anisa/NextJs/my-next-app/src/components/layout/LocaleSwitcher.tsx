"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function LocaleSwitcher({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (locale: Locale) => {
    if (locale === lang) return;
    // Replace the /en or /fa prefix while preserving the rest of the path
    const rest = pathname.replace(/^\/(en|fa)(?=\/|$)/, "");
    router.push(`/${locale}${rest}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={dict.locale.switch}>
          <Languages className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchTo("en")}
          data-active={lang === "en"}
          className="data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
        >
          {dict.locale.en}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchTo("fa")}
          data-active={lang === "fa"}
          className="data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
        >
          {dict.locale.fa}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
