import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Paid Media", href: "/paid-media" },
    { name: "SEO", href: "/seo" },
    { name: "Branding", href: "/branding" },
    { name: "Contenido", href: "/contenido" },
  ];

  const company = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <footer className="py-16 border-t border-border relative">
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img src={logo} alt="Media Buster" className="h-32 w-auto" />
              </Link>
              <p className="text-muted-foreground max-w-sm">
                Marketing estratégico para marcas en crecimiento.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Servicios
              </h4>
              <nav className="flex flex-col gap-3">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Empresa
              </h4>
              <nav className="flex flex-col gap-3">
                {company.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="mailto:hola@mediabuster.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  hola@mediabuster.com
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Media Buster. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
