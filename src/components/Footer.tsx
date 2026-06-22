import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const logo = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/MediaBuster-logo.png";
const WEBHOOK_URL = "https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18";

const SERVICES = [
  "Paid Media & Growth",
  "Contenido Multimedia",
  "Content & Social Media",
  "SEO",
];

const Footer = () => {
  const location = useLocation();
  const isAcademia = location.pathname === "/academia";
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio_interes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          servicio_interes: formData.servicio_interes,
          origen: "footer_global",
        }),
      });

      if (!response.ok) throw new Error("Error al enviar");

      setIsSuccess(true);
      setFormData({ nombre: "", email: "", servicio_interes: "" });
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto.",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Inténtalo nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-10 lg:py-12 border-t border-border relative bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
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

            {/* Global Lead Form */}
            {!isAcademia && (
              <div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                  Hablemos
                </h4>
                {isSuccess ? (
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-foreground">
                      ¡Gracias por escribirnos!
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Te contactaremos muy pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary h-10"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary h-10"
                    />
                    <Select
                      value={formData.servicio_interes}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, servicio_interes: value }))
                      }
                    >
                      <SelectTrigger className="bg-card border-border focus:border-primary h-10">
                        <SelectValue placeholder="Servicio de interés" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      type="submit"
                      variant="hero"
                      size="sm"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            )}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
