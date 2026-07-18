import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerContainer";
import { MotionButton } from "@/components/motion/MotionButton";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <StaggerContainer className="order-2 text-center lg:order-1 lg:text-start">
          <StaggerItem>
            <Badge variant="secondary" className="mb-4 gap-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {dict.hero.available}
            </Badge>
          </StaggerItem>

          <StaggerItem>
            <p className="mb-2 font-mono text-sm text-primary sm:text-base">
              {dict.hero.greeting}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1
              id="hero-heading"
              className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {dict.hero.name}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mb-5 bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
              {dict.hero.title}
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mb-8 max-w-xl text-balance text-muted-foreground sm:text-lg lg:mx-0">
              {dict.hero.tagline}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <MotionButton>
                <Button size="lg" asChild>
                  <Link href={`/${lang}#projects`}>
                    {dict.hero.cta}
                    <ArrowDown className="size-4" />
                  </Link>
                </Button>
              </MotionButton>
              <MotionButton>
                <Button size="lg" variant="outline" asChild>
                  <Link href={`/${lang}#contact`}>{dict.hero.ctaSecondary}</Link>
                </Button>
              </MotionButton>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/soheilrostami"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <SiGithub className="size-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/soheilrostami"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Photo */}
        <StaggerContainer className="order-1 flex justify-center lg:order-2">
          <StaggerItem>
            <div className="relative">
              <div
                aria-hidden
                className="hero-glow absolute -inset-12 -z-10"
              />
              <div className="relative size-56 overflow-hidden rounded-full border-4 border-border shadow-2xl sm:size-72 lg:size-80">
                <Image
                  src="/images/soheil.jfif"
                  alt={dict.hero.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 14rem, (max-width: 1024px) 18rem, 20rem"
                  className="object-cover"
                />
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
