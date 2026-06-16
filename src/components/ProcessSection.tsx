import { Search, Target, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico",
      description: "Entendemos tu negocio, tu mercado y tus objetivos. Analizamos lo que funciona y lo que no.",
      details: ["Análisis de competencia", "Auditoría de canales", "Identificación de oportunidades"]
    },
    {
      number: "02",
      icon: Target,
      title: "Objetivos",
      description: "Definimos metas claras, medibles y alineadas con tu realidad de negocio.",
      details: ["KPIs definidos", "Métricas de éxito", "Plazos realistas"]
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Estrategia",
      description: "Diseñamos el camino. Canales, mensajes, tácticas y recursos necesarios.",
      details: ["Plan de acción", "Roadmap de implementación", "Presupuesto optimizado"]
    },
    {
      number: "04",
      icon: Rocket,
      title: "Ejecución",
      description: "Implementamos con precisión. Cada acción tiene un propósito claro.",
      details: ["Implementación ágil", "Comunicación constante", "Ajustes en tiempo real"]
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Optimización",
      description: "Medimos, aprendemos, mejoramos. El crecimiento es un proceso continuo.",
      details: ["Reportes de performance", "Tests A/B", "Escalamiento"]
    }
  ];

  return (
    <section id="proceso" className="py-28 lg:py-40 relative overflow-hidden bg-[#FFF5F0]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(210,93,56,0.5) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-background/90 text-primary font-bold text-xs uppercase tracking-widest mb-5 shadow-card">
              Nuestro proceso
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Método, no improvisación<span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Cada proyecto sigue un proceso estructurado que garantiza claridad,
              eficiencia y resultados medibles en cada etapa.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block p-8 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-glow hover:border-primary/40 transition-all duration-300 hover-lift ${
                      index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                    } max-w-lg`}>
                      <div className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <span className="text-4xl font-display font-bold text-muted-foreground/30">
                          {step.number}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {step.details.map((detail, idx) => (
                          <li key={idx} className={`flex items-center gap-2 text-sm text-muted-foreground ${
                            index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-gradient-primary shadow-glow' : 'bg-gradient-secondary shadow-glow-secondary'
                    }`}>
                      <step.icon className={`w-7 h-7 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-secondary-foreground'}`} />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
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
