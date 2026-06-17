import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/hero-home-mediabuster.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-[#FDFBF7] pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
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
          <div className="rounded-2xl overflow-hidden animate-fade-in-slow">
            <img
              src={heroImage}
              alt="Equipo Media Buster trabajando en estrategia de marketing digital"
              className="w-full h-auto object-cover rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
