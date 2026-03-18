import { Code2, Layout, Rocket, Cpu, Mic } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Layout, num: "01", title: "Web Apps", desc: "Sistemas personalizados com React, Node e arquiteturas cloud-native para máxima escalabilidade." },
  { icon: Code2, num: "02", title: "Landing Pages", desc: "Foco total em UX e taxas de conversão agressivas. Design que vende." },
  { icon: Cpu, num: "03", title: "Sistemas Personalizados", desc: "Soluções sob medida para automatizar processos e otimizar operações." },
  { icon: Rocket, num: "04", title: "Automação", desc: "Fluxos automatizados que economizam tempo e eliminam trabalho manual." },
  { icon: Mic, num: "05", title: "Palestras & Treinamentos", desc: "Capacitação de times com foco em alta performance e tecnologia." },
  { icon: Rocket, num: "06", title: "Consultoria Digital", desc: "Análise estratégica e orientação técnica para acelerar o crescimento do seu negócio online." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative px-4 py-16 sm:px-6 sm:py-24 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:mb-16 md:text-5xl">
            SOLUÇÕES
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.1}>
              <div className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm text-primary opacity-50">
                    {s.num}
                  </span>
                  <s.icon className="text-muted-foreground transition-colors duration-300 group-hover:text-primary" size={20} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                {/* Hover glow line */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
