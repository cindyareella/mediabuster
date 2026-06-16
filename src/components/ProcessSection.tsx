import { Search, Target, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico",
      description: "Entendemos tu negocio, tu mercado y tus objetivos. Analizamos lo que funciona y lo que no.",
      details: ["Análisis de competencia", "Auditoría de canales", "Identificación de oportunidades"],
    },
    {
      number: "02",
      icon: Target,
      title: "Objetivos",
      description: "Definimos metas claras, medibles y alineadas con tu realidad de negocio.",
      details: ["KPIs definidos", "Métricas de éxito", "Plazos realistas"],
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Estrategia",
      description: "Diseñamos el camino. Canales, mensajes, tácticas y recursos necesarios.",
      details: ["Plan de acción", "Roadmap de implementación", "Presupuesto optimizado"],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Ejecución",
      description: "Implementamos con precisión. Cada acción tiene un propósito claro.",
      details: ["Implementación ágil", "Comunicación constante", "Ajustes en tiempo real"],
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Optimización",
      description: "Medimos, aprendemos, mejoramos. El crecimiento es un proceso continuo.",
      details: ["Reportes de performance", "Tests A/B", "Escalamiento"],
    },
  ];

  return (
    <section id="proceso" className="py-16 lg:py-20 relative overflow-hidden bg-[#FFF5F0]">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Nuestro proceso
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-5">
              Método, no improvisación<span className="text-primary">.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cada proyecto sigue un proceso estructurado que garantiza claridad,
              eficiencia y resultados medibles en cada etapa.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-primary/20 hidden sm:block" />

            <div className="space-y-5">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 lg:gap-10 group">
                  {/* Icon + number */}
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(210,93,56,0.45)] z-10 relative">
                      <step.icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_-8px_rgba(43,43,43,0.10)] border border-border/40 hover:shadow-[0_12px_30px_-10px_rgba(210,93,56,0.25)] transition-all duration-300">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-display text-sm font-bold text-primary tracking-widest">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-2 pt-4 border-t border-border/50">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/65">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
