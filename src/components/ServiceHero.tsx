import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const ServiceHero = ({ icon: Icon, title, subtitle, description }: ServiceHeroProps) => {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
            <Icon className="w-8 h-8 text-primary" />
          </div>

          {/* Subtitle */}
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {subtitle}
          </p>

          {/* H1 Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Solicitar diagnóstico
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/#servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
