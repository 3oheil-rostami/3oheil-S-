import {
  Code2,
  Gauge,
  Languages,
  MonitorSmartphone,
  Search,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type ServiceKey = keyof Dictionary["services"]["items"];

const serviceIcons: Record<ServiceKey, LucideIcon> = {
  webDevelopment: Code2,
  responsiveDesign: MonitorSmartphone,
  performance: Gauge,
  accessibility: Search,
  i18n: Languages,
  maintenance: Wrench,
};

const serviceKeys = Object.keys(serviceIcons) as ServiceKey[];

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-16 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="services-heading"
            className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {dict.services.heading}
          </h2>
          <p className="mb-10 text-muted-foreground sm:text-lg">
            {dict.services.subheading}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[key];
            const item = dict.services.items[key];
            return (
              <Reveal key={key} delay={(i % 3) * 0.1} className="h-full">
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
