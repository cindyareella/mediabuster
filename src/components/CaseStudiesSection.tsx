const CaseStudiesSection = () => {
  const cases = [
    {
      tag: "E-commerce Retail",
      metric: "+120% ROAS en 3 meses",
      text: "Reestructuración de arquitectura de Google Ads y escalamiento en Meta.",
    },
    {
      tag: "B2B Software",
      metric: "-40% Costo por Lead",
      text: "Optimización de landing pages y estrategia de pauta hiper-segmentada.",
    },
    {
      tag: "Sector Salud",
      metric: "Top 3 en Google",
      text: "Auditoría SEO técnica y clústeres de contenido para posicionamiento local.",
    },
  ];

  return (
    <section className="bg-[#fffdf5] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#D25D38] font-semibold text-sm uppercase tracking-widest mb-3 block">
            Casos de éxito
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B2B2B]">
            No vendemos promesas.{" "}
            <span className="text-[#D25D38]">Entregamos rentabilidad.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.tag}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#2B2B2B]/60 mb-5">
                {c.tag}
              </span>
              <p className="font-display text-2xl lg:text-3xl font-bold text-[#E3A830] mb-4 leading-tight">
                {c.metric}
              </p>
              <p className="text-base text-[#2B2B2B] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
