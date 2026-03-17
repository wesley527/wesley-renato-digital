import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-block border border-primary px-4 py-2 font-mono text-xs tracking-[0.3em] text-primary"
        >
          7 ANOS DE EXPERIÊNCIA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          TRANSFORMANDO IDEIAS EM{" "}
          <span className="text-primary glow-text">
            SISTEMAS ESCALÁVEIS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
        >
          Wesley Renato — Desenvolvedor Full-Stack & Fundador da Mind M4rketing.
          Especialista em arquitetura de alta performance e conversão digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center border border-primary bg-primary px-8 py-4 text-xs font-bold tracking-widest text-primary-foreground transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_hsl(153_100%_50%/0.3)]"
          >
            VER PROJETOS
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-border px-8 py-4 text-xs font-bold tracking-widest text-foreground transition-all duration-400 hover:border-primary hover:text-primary"
          >
            WHATSAPP
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="animate-float text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
