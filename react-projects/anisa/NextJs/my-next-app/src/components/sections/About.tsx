import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  const stats = [
    { value: "2+", label: dict.about.yearsExperience },
    { value: "20+", label: dict.about.projectsCompleted },
    { value: "10+", label: dict.about.technologies },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="about-heading"
            className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {dict.about.heading}
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-4 text-muted-foreground sm:text-lg">
            <Reveal delay={0.1}>
              <p>{dict.about.paragraph1}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>{dict.about.paragraph2}</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.15 + i * 0.1}>
                <Card className="text-center lg:text-start">
                  <CardContent className="py-5">
                    <p className="text-3xl font-extrabold text-primary sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
