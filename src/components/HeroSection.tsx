import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/hero-mediabuster-home.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden pt-28 lg:pt-32 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/70 backdrop-blur-sm mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">
                Marketing y crecimiento para emprendedores
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 animate-slide-up">
              <span className="text-gradient-primary">Marketing estratégico</span>
              <br />
              <span className="text-foreground">para marcas en </span>
              <span className="text-gradient-secondary">crecimiento</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 animate-slide-up-delay leading-relaxed">
              Somos la agencia que los emprendedores creamos para emprendedores.
              No vendemos humo, construimos sistemas de crecimiento real.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-slide-up-delay-2">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Agendar consultoría
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => {
                  const element = document.querySelector("#servicios");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Auditar mis campañas
              </Button>
            </div>

          </div>

          {/* Image */}
          <div className="relative animate-fade-in-slow">
            <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden shadow-glow border border-border/60 bg-card">
              <img
                src={heroImage}
                alt="Equipo Media Buster trabajando en estrategia de marketing digital"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-[5/6]"
                loading="eager"
              />
            </div>
            {/* Floating badge */}
            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-gradient-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground leading-tight">Estrategia + Data</p>
                <p className="text-xs text-muted-foreground">Resultados medibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
