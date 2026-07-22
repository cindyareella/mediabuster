import { Search, Video, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [

    {
      icon: Search,
      title: "SEO Técnico y Contenido",
      description: "Posicionamiento para que te encuentren cuando ya están listos para comprar.",
      features: ["SEO técnico", "Contenido por intención", "Keyword research", "Autoridad de dominio"],
      accent: "primary",
      href: "/seo",
    },
    {
      icon: Video,
      title: "Producción Audiovisual & CM",
      description: "Creamos contenido de alta calidad y operamos tus redes sociales de forma estratégica para retener la atención y convertir interacciones en clientes.",
      features: ["Set propio 4K y dirección remota", "Estrategia editorial de contenido", "Community Management activo"],
      accent: "secondary",
      href: "/contenido",
    },
    {
      icon: Code2,
      title: "Desarrollo Web & CRO",
      description: "Construimos ecosistemas rápidos, limpios y diseñados exclusivamente para convertir clics en clientes.",
      features: ["Arquitectura en React", "Diseño UX/UI (CRO)", "Optimización de velocidad"],
      accent: "secondary",
      href: "/desarrollo-web",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-10 lg:py-14 relative bg-[#F9F8FF]">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl bg-white border border-border hover:border-electric/50 transition-all duration-300 hover-lift ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-electric" />
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
                      <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="hero" size="sm" className="w-full group/btn">
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
