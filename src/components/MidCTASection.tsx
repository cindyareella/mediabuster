import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/P2BQDIMVFCDCG1";

const MidCTASection = () => {
  return (
    <section className="bg-[#1E1B4B] border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <p className="font-display text-xl md:text-2xl font-semibold text-white max-w-3xl leading-snug">
            ¿No sabes por dónde empezar? Escríbenos y auditamos tu ecosistema sin costo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold px-7 py-4 rounded-xl shadow-card transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5" />
            Auditar mi ecosistema
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidCTASection;
