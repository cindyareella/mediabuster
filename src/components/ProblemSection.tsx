const ProblemSection = () => {
  return (
    <section className="py-12 lg:py-16 relative bg-[#2B2B2B]">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-electric/15 text-electric font-bold text-xs uppercase tracking-widest mb-5 border border-electric/30">
            El problema
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            ¿Sientes que tu marketing actual es un gasto y no una inversión?
          </h2>
          <p className="text-base md:text-lg text-white/75 leading-relaxed">
            Sabemos lo que cuesta levantar un negocio. Si estás quemando presupuesto en tácticas
            sueltas, diseños bonitos que no venden o agencias que solo te reportan "likes",
            es hora de cambiar de nivel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
