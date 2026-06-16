import { Check, X, Heart } from "lucide-react";

const WhyUsSection = () => {
  const whatWeAre = [
    "Estrategas antes que ejecutores",
    "Directos y transparentes con resultados",
    "Flexibles y adaptados a tu realidad",
    "Obsesionados con el crecimiento real",
    "Partners, no proveedores"
  ];

  const whatWeAreNot = [
    "Una agencia de humo y promesas vacías",
    "Un equipo rígido y burocrático",
    "Vendedores de métricas de vanidad",
    "Expertos en hacer lo mismo para todos",
    "Desconectados de tu negocio"
  ];

  const beliefs = [
    {
      title: "La estrategia antes que todo",
      description: "Sin un plan claro, la ejecución es solo ruido. Primero entendemos, luego actuamos."
    },
    {
      title: "Los datos como brújula",
      description: "Las decisiones se toman con información, no con suposiciones ni tendencias pasajeras."
    },
    {
      title: "Creatividad con propósito",
      description: "El contenido bonito no sirve si no conecta, convierte y construye marca."
    },
    {
      title: "Crecimiento sostenible",
      description: "No buscamos picos de vanidad. Construimos sistemas que escalan a largo plazo."
    },
    {
      title: "Transparencia radical",
      description: "Comunicación clara, reportes honestos y expectativas realistas desde el día uno."
    },
    {
      title: "Tu éxito es nuestro éxito",
      description: "No somos proveedores externos. Somos parte de tu equipo de crecimiento."
    }
  ];

  return (
    <section id="porque" className="py-16 lg:py-20 relative bg-[#FDFBF7]">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Por qué Media Buster
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-5">
              Lo que somos y lo que no<span className="text-secondary">.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Preferimos la claridad a los discursos de venta. 
              Aquí te decimos exactamente qué esperar de trabajar con nosotros.
            </p>
          </div>

          {/* What We Are / What We Are Not */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* What We Are */}
            <div className="p-6 rounded-2xl bg-[#FFF5F0] border border-primary/20 shadow-[0_4px_20px_-8px_rgba(43,43,43,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Qué sí somos
                </h3>
              </div>
              <ul className="space-y-2.5">
                {whatWeAre.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-sm md:text-base text-foreground/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Are Not */}
            <div className="p-6 rounded-2xl bg-white border border-border/60 shadow-[0_4px_20px_-8px_rgba(43,43,43,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Qué no somos
                </h3>
              </div>
              <ul className="space-y-2.5">
                {whatWeAreNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                    <span className="text-sm md:text-base text-foreground/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </div>

      {/* En qué creemos - distinct background */}
      <div className="bg-[#FFF5F0] mt-16 lg:mt-20 -mb-16 lg:-mb-20 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  En qué creemos
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Nuestros principios de trabajo
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {beliefs.map((belief, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-white border border-border/40 hover:border-primary/30 hover:shadow-[0_8px_24px_-10px_rgba(210,93,56,0.20)] transition-all duration-300 hover-lift"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FFF5F0] flex items-center justify-center mb-3 shadow-sm">
                    <span className="font-display font-bold text-primary text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-1.5">
                    {belief.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
