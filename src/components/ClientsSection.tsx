const logos = [
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/Logo-MejoresEmpleos.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/campeones.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/cem-logo.jpg",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/club-golf-logo.jpg",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/logo-clinica-animal.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/logo-concibe.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/logo-conieco.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/logo-dysa",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/logo-flow.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/logo-pozzeidon-png-111.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/logo-DEM.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/sobek-logo-1.png",
  "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/telered-logo.png",
];

const ClientsSection = () => {
  const items = [...logos, ...logos];

  return (
    <section id="clientes" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-3">
            Clientes que nos eligen<span className="text-primary">.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Emprendedores que confían su marketing en Media Buster.
          </p>
        </div>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-12 md:gap-16 group-hover:[animation-play-state:paused]">
            {items.map((src, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-center basis-[calc(100vw/2-3rem)] md:basis-[calc(100vw/3-4rem)] lg:basis-[calc(100vw/5-4rem)]"
              >
                <img
                  src={src}
                  alt="Logo cliente Media Buster"
                  loading="lazy"
                  className="max-h-20 md:max-h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
