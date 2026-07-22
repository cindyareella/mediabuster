import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const logo = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/MediaBuster-logo.png";

const Footer = () => {
  const location = useLocation();
  const isAcademia = location.pathname === "/academia";
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Paid Media", href: "/paid-media" },
    { name: "SEO", href: "/seo" },
    { name: "Contenido", href: "/contenido" },
    { name: "Diseño Web & CRO", href: "/desarrollo-web" },
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
    <footer className="py-10 lg:py-12 border-t border-border relative bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-3">
                <img src={logo} alt="Media Buster" className="h-16 w-auto" />
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm">
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

          {/* Bottom Bar: socials left, copyright right */}
          <div className="pt-5 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-5">
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
            <p className="text-base text-muted-foreground">
              © {currentYear} Media Buster. Todos los derechos reservados.
            </p>
          </div>
          {/* isAcademia flag reserved for future variants */}
          {isAcademia ? null : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
