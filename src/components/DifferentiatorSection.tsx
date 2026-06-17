import { MessageSquare, UserCheck, ShieldCheck } from "lucide-react";

const DifferentiatorSection = () => {
  const items = [
    {
      icon: MessageSquare,
      title: "Hablamos tu idioma",
      description: "Cero tecnicismos, solo métricas que impactan tu bolsillo.",
    },
    {
      icon: UserCheck,
      title: "Operación directa",
      description: "Tu cuenta no pasa a un becario; nosotros ejecutamos.",
    },
    {
      icon: ShieldCheck,
      title: "Tu presupuesto es sagrado",
      description: "Cada campaña se mide para asegurar el retorno.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative bg-[#FDFBF7]">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Diferenciador
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-5 leading-tight">
              El modelo Media Buster: entendemos tu negocio,{" "}
              <span className="text-primary">ejecutamos como expertos.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-2xl bg-white border border-border/60 shadow-[0_4px_20px_-8px_rgba(43,43,43,0.10)] hover:shadow-[0_12px_30px_-10px_rgba(210,93,56,0.25)] transition-all duration-300"
              >
                <div className="absolute -top-4 left-7 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-sm shadow-glow">
                  {idx + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
