import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/hero-home-mediabuster.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="flex items-center relative overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] to-[#FDC19E]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" />


      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/70 backdrop-blur-sm mb-4 animate-slide-up">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">
                Estrategia, pauta, SEO y producción audiovisual
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-4 animate-slide-up">
              <span className="text-foreground">Marketing que </span>
              <span className="text-gradient-primary">multiplica</span>
              <span className="text-foreground"> tu </span>
              <span className="text-gradient-secondary">inversión.</span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 animate-slide-up-delay leading-relaxed">
              Pauta, SEO y producción audiovisual para emprendedores. Operamos tu ecosistema digital
              con rigor técnico para garantizar tu máxima rentabilidad.
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
            <div className="relative rounded-3xl overflow-hidden aspect-video">
              <img
                src={heroImage}
                alt="Equipo Media Buster trabajando en estrategia de marketing digital"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
