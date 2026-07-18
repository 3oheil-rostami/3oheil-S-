"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SiCss,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/lib/data/skills";
import type { Skill } from "@/types/portfolio";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const icons: Record<Skill["icon"], IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  framer: SiFramer,
  html: SiHtml5,
  css: SiCss,
  git: SiGit,
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = icons[skill.icon];

  return (
    <motion.div
      initial={
        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
    >
      <Card className="group flex flex-col items-center gap-3 py-6 transition-shadow hover:shadow-lg">
        <Icon
          aria-hidden
          className="size-9 text-muted-foreground transition-colors duration-300 group-hover:text-(--skill-color) sm:size-10"
          style={{ "--skill-color": skill.color } as React.CSSProperties}
        />
        <p className="text-sm font-medium">{skill.name}</p>
      </Card>
    </motion.div>
  );
}

export function TechStack({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="skills-heading"
            className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {dict.skills.heading}
          </h2>
          <p className="mb-10 text-muted-foreground sm:text-lg">
            {dict.skills.subheading}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
