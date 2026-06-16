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
    <section id="proceso" className="py-28 lg:py-36 relative overflow-hidden bg-[#FFF5F0]">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary font-bold text-xs uppercase tracking-widest mb-5 shadow-sm border border-primary/10">
              Nuestro proceso
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Método, no improvisación<span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cada proyecto sigue un proceso estructurado que garantiza claridad,
              eficiencia y resultados medibles en cada etapa.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_20px_-8px_rgba(43,43,43,0.10)] hover:shadow-[0_12px_30px_-10px_rgba(210,93,56,0.25)] border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <step.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-3xl font-display font-bold text-foreground/15">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                <ul className="space-y-2 pt-5 border-t border-border/50">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
