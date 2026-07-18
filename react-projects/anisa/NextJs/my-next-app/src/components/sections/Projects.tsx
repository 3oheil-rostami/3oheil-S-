import { ExternalLink, Folder } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/lib/data/projects";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-16 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="projects-heading"
            className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {dict.projects.heading}
          </h2>
          <p className="mb-10 text-muted-foreground sm:text-lg">
            {dict.projects.subheading}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const item = dict.projects.items[project.key];
            return (
              <Reveal key={project.key} delay={i * 0.1} className="h-full">
                <Card className="group flex h-full flex-col transition-all hover:-translate-y-1.5 hover:shadow-xl">
                  <CardHeader className="flex-row items-center justify-between">
                    <Folder className="size-9 text-primary" aria-hidden />
                    <div className="flex gap-1">
                      {project.repoUrl && (
                        <Button variant="ghost" size="icon-sm" asChild>
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${item.title} — ${dict.projects.viewCode}`}
                          >
                            <SiGithub className="size-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="icon-sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${item.title} — ${dict.projects.viewLive}`}
                          >
                            <ExternalLink className="size-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
