import logo from "@/assets/isotipo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <a 
                href="#inicio" 
                onClick={(e) => { e.preventDefault(); scrollToSection("#inicio"); }}
                className="inline-block mb-2"
              >
                <img 
                  src={logo} 
                  alt="Media Buster" 
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-sm text-muted-foreground">
                Estrategia que se ve. Crecimiento que se mide.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Nosotros", href: "#nosotros" },
                { name: "Servicios", href: "#servicios" },
                { name: "Contacto", href: "#contacto" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} Media Buster
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
