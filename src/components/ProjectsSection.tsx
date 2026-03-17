import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Sistema completo de e-commerce com painel admin, pagamentos e gestão de estoque.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Dashboard Analytics",
    desc: "Painel de métricas em tempo real para tomada de decisão baseada em dados.",
    tags: ["TypeScript", "Next.js", "Chart.js"],
  },
  {
    title: "SaaS Marketing",
    desc: "Plataforma de automação de marketing com funis, e-mail e CRM integrado.",
    tags: ["React", "Firebase", "Stripe"],
  },
  {
    title: "App Delivery",
    desc: "Sistema completo de delivery com tracking em tempo real e gestão de pedidos.",
    tags: ["React Native", "Node.js", "Socket.io"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="relative px-6 py-24 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            PROJETOS
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:border-primary">
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider text-primary opacity-60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary">
                    <ExternalLink size={14} /> Ver projeto
                  </button>
                  <button className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary">
                    <Github size={14} /> Ver código
                  </button>
                </div>
                {/* Corner decoration */}
                <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
                <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
