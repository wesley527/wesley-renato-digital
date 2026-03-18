const Footer = () => {
  return (
    <footer className="border-t border-border px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex gap-6">
          <a
            href="https://instagram.com/wesley.code"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            INSTAGRAM
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            WHATSAPP
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © 2024 WESLEY RENATO. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
