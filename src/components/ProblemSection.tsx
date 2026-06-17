const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 relative bg-[#0F172A]">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary font-bold text-xs uppercase tracking-widest mb-5 border border-primary/20">
            El problema
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FDFBF7] mb-6 leading-tight">
            ¿Sientes que tu marketing actual es un gasto y no una inversión?
          </h2>
          <p className="text-base md:text-lg text-[#FDFBF7]/75 leading-relaxed">
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
