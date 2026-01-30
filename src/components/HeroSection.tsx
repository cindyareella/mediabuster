import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">
              Marketing y crecimiento para emprendedores
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-gradient-primary">Marketing estratégico</span>
            <br />
            <span className="text-foreground">para marcas en </span>
            <span className="text-gradient-secondary">crecimiento</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up-delay">
            Somos la agencia que los emprendedores creamos para emprendedores. 
            No vendemos humo, construimos sistemas de crecimiento real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-2">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={scrollToContact}
            >
              Trabajemos juntos
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => {
                const element = document.querySelector("#servicios");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver servicios
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">
              Marketing con mentalidad de negocio
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">+50</p>
                <p className="text-sm text-muted-foreground">Proyectos</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Compromiso</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">Data</p>
                <p className="text-sm text-muted-foreground">Driven</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
