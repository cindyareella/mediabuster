import { Link } from "react-router-dom";
import { ArrowRight, Zap, Search, Share2 } from "lucide-react";
import { services } from "@/lib/seoData";

const iconMap: Record<string, React.ElementType> = {
  "paid-media": Zap,
  seo: Search,
  contenido: Share2,
};

interface RelatedServicesProps {
  currentSlug: string;
}

const RelatedServices = ({ currentSlug }: RelatedServicesProps) => {
  const otherServices = services.filter((s) => s.slug !== currentSlug);

  return (
    <section className="py-12 lg:py-16 relative">
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Otros servicios que complementan tu estrategia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todos nuestros servicios trabajan como un ecosistema integrado para maximizar tus resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((service) => {
              const Icon = iconMap[service.slug] || Zap;
              return (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Conocer más
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
