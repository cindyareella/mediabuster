import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
const logo = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/MediaBuster-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Paid Media", href: "/paid-media" },
    { name: "SEO", href: "/seo" },
    { name: "Contenido", href: "/contenido" },
  ];

  const company = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/mediabustermarketing/", Icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/mediabustermarketing", Icon: Facebook },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/media-buster", Icon: Linkedin },
  ];

  return (
    <footer className="py-16 border-t border-border relative bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img src={logo} alt="Media Buster" className="h-48 w-auto" />
              </Link>
              <p className="text-lg text-muted-foreground max-w-sm">
                Marketing estratégico para marcas en crecimiento. Agencia de marketing digital estratégico en México.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                Servicios
              </h4>
              <nav className="flex flex-col gap-3">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                Empresa
              </h4>
              <nav className="flex flex-col gap-3">
                {company.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="mailto:hola@mediabuster.com"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  hola@mediabuster.com
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-base text-muted-foreground">
              © {currentYear} Media Buster. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Social Row */}
          <div className="pt-8 mt-8 border-t border-border flex items-center justify-start gap-5">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
