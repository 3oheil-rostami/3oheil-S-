"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setActiveSection,
  setMobileNavOpen,
  type SectionId,
} from "@/store/slices/uiSlice";
import { cn } from "@/lib/utils";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

const SECTION_IDS: SectionId[] = [
  "home",
  "about",
  "services",
  "skills",
  "projects",
  "contact",
];

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const dispatch = useAppDispatch();
  const activeSection = useAppSelector((state) => state.ui.activeSection);
  const mobileNavOpen = useAppSelector((state) => state.ui.mobileNavOpen);

  // Scrollspy: highlight the nav link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(entry.target.id as SectionId));
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [dispatch]);

  const links: { id: SectionId; label: string }[] = [
    { id: "home", label: dict.nav.home },
    { id: "about", label: dict.nav.about },
    { id: "services", label: dict.nav.services },
    { id: "skills", label: dict.nav.skills },
    { id: "projects", label: dict.nav.projects },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={`/${lang}#home`}
          dir="ltr"
          className="font-mono text-lg font-bold tracking-tight"
          aria-label={dict.hero.name}
        >
          <span className="text-primary">&lt;</span>
          SR
          <span className="text-primary">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label={dict.nav.menuTitle} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id} className="relative">
                <Link
                  href={`/${lang}#${link.id}`}
                  aria-current={activeSection === link.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    activeSection === link.id && "text-foreground"
                  )}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle label={dict.theme.toggle} />
          <LocaleSwitcher lang={lang} dict={dict} />

          {/* Mobile nav */}
          <Sheet
            open={mobileNavOpen}
            onOpenChange={(open) => dispatch(setMobileNavOpen(open))}
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={dict.nav.openMenu}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={lang === "fa" ? "left" : "right"}>
              <SheetHeader>
                <SheetTitle>{dict.nav.menuTitle}</SheetTitle>
                <SheetDescription className="sr-only">
                  {dict.nav.menuDescription}
                </SheetDescription>
              </SheetHeader>
              <nav aria-label={dict.nav.menuTitle} className="px-4">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={`/${lang}#${link.id}`}
                        onClick={() => dispatch(setMobileNavOpen(false))}
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                          activeSection === link.id &&
                            "bg-accent text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
