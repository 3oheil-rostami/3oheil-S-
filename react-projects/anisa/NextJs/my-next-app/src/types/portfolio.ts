import type { Locale } from "@/app/[lang]/dictionaries";

/** A project card in the Projects grid. */
export interface Project {
  /** Key into dict.projects.items for localized title/description */
  key: "shop" | "dashboard" | "learning";
  /** Image under /public/images (optional — falls back to a gradient) */
  image?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

/** A technology in the Tech Stack grid. */
export interface Skill {
  name: string;
  /** react-icons key resolved in TechStack.tsx */
  icon:
    | "react"
    | "nextjs"
    | "typescript"
    | "javascript"
    | "tailwind"
    | "redux"
    | "html"
    | "css"
    | "git"
    | "framer";
  /** Brand color used on hover */
  color: string;
}

export type { Locale };
