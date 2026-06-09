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
    <section id="servicios" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
              Servicios
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Un ecosistema, no servicios sueltos<span className="text-secondary">.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Todos nuestros servicios funcionan como un sistema integrado bajo un mismo proceso. 
              La estrategia guía, la creatividad ejecuta, los datos optimizan.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-${service.accent}/50 transition-all duration-300 hover-lift ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${
                  service.accent === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${
                    service.accent === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        service.accent === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-2xl ${
                  service.accent === 'primary' ? 'shadow-glow' : 'shadow-glow-secondary'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>

          {/* Ecosystem CTA */}
          <div className="relative p-8 md:p-12 rounded-2xl border-gradient">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  ¿Necesitas un diagnóstico de tu marketing?
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  Antes de cualquier propuesta, analizamos dónde estás y hacia dónde quieres ir. 
                  Sin compromiso, con claridad.
                </p>
              </div>
              <Button 
                variant="hero" 
                size="xl" 
                className="group shrink-0"
                onClick={scrollToContact}
              >
                Solicitar diagnóstico
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
