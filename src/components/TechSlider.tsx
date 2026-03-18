import { motion } from "framer-motion";

const techs = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "React", icon: "⚛️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "📦" },
  { name: "Claude AI", icon: "🤖" },
];

// Duplicate for seamless infinite scroll
const items = [...techs, ...techs];

const TechSlider = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group flex flex-col items-center gap-2 px-2"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_15px_hsl(var(--primary-glow)),0_0_30px_hsl(var(--primary-glow))]">
              <span className="text-2xl">{tech.icon}</span>
              {/* Particle dots */}
              <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-ping" />
              <div className="absolute -bottom-1 -left-1 h-1 w-1 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-hover:animate-ping" style={{ animationDelay: "0.3s" }} />
            </div>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-primary group-hover:glow-text">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechSlider;
