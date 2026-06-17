const AboutSection = () => {


  return (
   <section id="nosotros" className="py-10 lg:py-14 relative bg-[#FFF5F0]">
     <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(210,93,56,0.08) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Quiénes somos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-5">
              Una agencia diferente<span className="text-primary">.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Porque las que existían no estaban hechas para nosotros.
            </p>
          </div>

          {/* Main Content */}
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

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
