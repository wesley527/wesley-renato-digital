import ScrollReveal from "./ScrollReveal";
import mindLogo from "@/assets/mind-marketing-logo.png";

const MindMarketingSection = () => {
  return (
    <section className="relative px-6 py-24 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <div className="relative overflow-hidden border border-border bg-card p-10 md:p-16">
            {/* Scan line effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5">
              <div className="absolute left-0 top-0 h-[1px] w-full animate-scan-line bg-primary" />
            </div>

            <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
              <div className="flex-1">
                <span className="mb-4 inline-block font-mono text-xs tracking-[0.3em] text-primary opacity-60">
                  // BRAND
                </span>
                <h3 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  MIND M4RKETING{" "}
                  <span className="text-primary">CRIATIVE</span>
                </h3>
                <p className="mb-8 max-w-xl leading-relaxed text-muted-foreground">
                  Minha agência focada em branding e tecnologia. Onde o design encontra 
                  a engenharia. Criamos experiências digitais que convertem visitantes em 
                  clientes e marcas em referências.
                </p>
                <a
                  href="https://www.mindmarketing.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-300"
                >
                  VISITAR AGÊNCIA{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>

              <div className="flex-shrink-0">
                <img
                  src={mindLogo}
                  alt="Mind M4rketing Criative"
                  className="h-40 w-40 rounded-lg object-contain drop-shadow-[0_0_15px_hsl(153,100%,50%,0.3)] md:h-52 md:w-52"
                />
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute right-0 top-0 h-16 w-16 border-r border-t border-primary opacity-20" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-b border-l border-primary opacity-20" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MindMarketingSection;
