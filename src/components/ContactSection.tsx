import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contato" className="relative px-4 py-16 sm:px-6 sm:py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-5xl">
            VAMOS CONSTRUIR{" "}
            <span className="text-primary glow-text">ALGO GRANDE</span>
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-muted-foreground">
            Pronto para transformar sua ideia em um sistema de alta performance?
            Entre em contato e vamos conversar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-primary bg-primary px-6 py-3 sm:px-8 sm:py-4 text-xs font-bold tracking-widest text-primary-foreground transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_hsl(153_100%_50%/0.3)]"
            >
              <MessageCircle size={16} />
              WHATSAPP
            </a>
            <a
              href="https://instagram.com/wesley.code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 sm:px-8 sm:py-4 text-xs font-bold tracking-widest text-foreground transition-all duration-400 hover:border-primary hover:text-primary"
            >
              @WESLEY.CODE
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
