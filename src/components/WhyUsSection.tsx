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
    <section id="porque" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
              Por qué Media Buster
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Lo que somos y lo que no<span className="text-secondary">.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Preferimos la claridad a los discursos de venta. 
              Aquí te decimos exactamente qué esperar de trabajar con nosotros.
            </p>
          </div>

          {/* What We Are / What We Are Not */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* What We Are */}
            <div className="p-8 rounded-2xl bg-gradient-card border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Qué sí somos
                </h3>
              </div>
              <ul className="space-y-4">
                {whatWeAre.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Are Not */}
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Qué no somos
                </h3>
              </div>
              <ul className="space-y-4">
                {whatWeAreNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What We Believe */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                En qué creemos
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Nuestros principios de trabajo
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-secondary/30 transition-all duration-300 hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <span className="font-display font-bold text-secondary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {belief.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
