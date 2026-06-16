import { MessageCircle } from "lucide-react";

const PHONE = "525635406982"; // 52 + 56 3540 6982
const MESSAGE = "Hola Media Buster, me gustaría agendar una consultoría.";

const FloatingWhatsApp = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-[60] group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" aria-hidden="true" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.2} />
      </span>
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-semibold px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-card">
        ¿Hablamos? +52 56 3540 6982
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
