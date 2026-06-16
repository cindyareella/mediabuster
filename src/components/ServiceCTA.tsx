import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

const ServiceCTA = ({
  title = "¿Listo para dar el siguiente paso?",
  description = "Cuéntanos sobre tu proyecto. Analizamos tu situación actual y te proponemos un camino claro hacia tus objetivos.",
}: ServiceCTAProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre los servicios de Media Buster.");
    window.open(`https://wa.me/5215635406982?text=${message}`, "_blank");
  };

  return (
    <section className="py-28 lg:py-36 relative bg-[#1A2433]">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />


      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            {description}
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Agendar consultoría
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              className="group"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
