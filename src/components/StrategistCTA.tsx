import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const STRATEGIST_URL = "https://wa.me/message/P2BQDIMVFCDCG1";

const StrategistCTA = () => {
  return (
    <section className="py-10 lg:py-14 bg-[#1E1B4B]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
            ¿Listo para escalar tus números con esta estrategia?
          </h3>
          <Button asChild variant="hero" size="xl" className="shrink-0">
            <a href={STRATEGIST_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Hablar con un estratega
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StrategistCTA;
