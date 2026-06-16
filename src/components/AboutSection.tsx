import { Lightbulb } from "lucide-react";

const AboutSection = () => {


  return (
   <section id="nosotros" className="py-16 lg:py-20 relative bg-[#FFF5F0]">
     <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(210,93,56,0.08) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Quiénes somos
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-5">
              Una agencia diferente<span className="text-primary">.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Porque las que existían no estaban hechas para nosotros.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text Content */}
            <div className="space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Media Buster</span> nace de una frustración real: 
                las agencias tradicionales son caras, rígidas y muchas veces desconectadas 
                de la realidad de los negocios en crecimiento.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Somos emprendedores que construimos una agencia con la <span className="text-secondary font-semibold">mentalidad, 
                rigor y calidad</span> de una agencia grande, pero con una estructura flexible, 
                humana y eficiente.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No hacemos marketing por partes. <span className="text-primary font-semibold">Diseñamos ecosistemas digitales</span> donde 
                la estrategia, la creatividad y los datos trabajan juntos para generar 
                crecimiento medible y sostenible.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 border-l-4 border-primary pl-4">
                  <p className="text-xl font-display font-semibold text-foreground">
                    "Claridad, datos y marketing que tiene sentido para tu negocio."
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-card border border-border p-6 lg:p-8">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                    La alternativa inteligente
                  </h3>
                  <p className="text-muted-foreground">
                    Especialmente para emprendedores que ya venden pero no logran escalar.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Flexibilidad
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                      Estrategia
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                      Resultados
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-secondary/20 rounded-2xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
