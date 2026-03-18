import ScrollReveal from "./ScrollReveal";
import wesleyPhoto from "@/assets/wesley-photo.jpg";

const stats = [
  { value: "+100", label: "Projetos" },
  { value: "7", label: "Anos Exp." },
  { value: "100%", label: "Performance" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="relative px-6 py-24 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <ScrollReveal>
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                VISÃO<br />
                <span className="text-primary">ESTRATÉGICA</span>
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Não entrego apenas código. Entrego ativos digitais. Com 25 anos e uma 
                trajetória de 7 anos no mercado, entendo que a tecnologia deve servir 
                ao lucro e à escalabilidade. Cada linha de código é pensada para gerar 
                resultado real para o negócio.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l border-primary pl-4">
                    <span className="text-2xl font-bold text-primary md:text-3xl">
                      {stat.value}
                    </span>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative mx-auto w-fit">
              <div className="relative overflow-hidden border border-border">
                 <img
                   src={wesleyPhoto}
                   alt="Wesley Renato - Desenvolvedor Full-Stack"
                   className="h-[300px] w-[260px] sm:h-[400px] sm:w-[350px] object-cover grayscale transition-all duration-700 hover:grayscale-0 md:h-[500px] md:w-[400px]"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-xs text-primary">
                  WESLEY.RENATO // DEV
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -right-3 -top-3 h-full w-full border border-primary opacity-20" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
