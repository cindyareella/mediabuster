import { Zap, Video, Share2, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Paid Media & Growth",
      description: "Campañas de performance en Meta, Google y TikTok. Estrategias de adquisición y retención basadas en datos.",
      features: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics avanzado"],
      accent: "primary",
      href: "/paid-media"
    },
    {
      icon: Video,
      title: "Contenido Multimedia",
      description: "Producción de contenido visual y audiovisual que conecta con tu audiencia y comunica tu propuesta de valor.",
      features: ["Video marketing", "Fotografía", "Motion graphics", "Reels & TikToks"],
      accent: "secondary",
      href: "/contenido"
    },
    {
      icon: Share2,
      title: "Content & Social Media",
      description: "Estrategia de contenido y gestión de redes sociales con enfoque en engagement y conversión.",
      features: ["Estrategia de contenido", "Community management", "Calendario editorial", "Reportes"],
      accent: "secondary",
      href: "/contenido"
    },
    {
      icon: Search,
      title: "SEO",
      description: "Posicionamiento orgánico que genera tráfico cualificado y reduce dependencia del paid media.",
      features: ["SEO On-page", "SEO Técnico", "Link building", "Content SEO"],
      accent: "primary",
      href: "/seo"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Servicios
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-5">
              Un ecosistema, no servicios sueltos<span className="text-secondary">.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Todos nuestros servicios funcionan como un sistema integrado bajo un mismo proceso. 
              La estrategia guía, la creatividad ejecuta, los datos optimizan.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-${service.accent}/50 transition-all duration-300 hover-lift ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${
                  service.accent === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${
                    service.accent === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        service.accent === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="default" size="sm" className="w-full group/btn">
                  <Link to={service.href}>
                    Cotizar este servicio
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>

                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-2xl ${
                  service.accent === 'primary' ? 'shadow-glow' : 'shadow-glow-secondary'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
