import { Share2, PenTool, Camera, Users, CheckCircle, Calendar } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { seoData } from "@/lib/seoData";

const Contenido = () => {
  return (
    <ServicePageLayout
      seo={seoData.contenido}
      path="/contenido"
      slug="contenido"
      breadcrumbName="Contenido"
      hero={{
        icon: Share2,
        title: "Agencia de contenido digital con enfoque estratégico",
        subtitle: "Contenido & Social Media",
        description:
          "Estrategia de contenidos y community management profesional. Creamos contenido para redes sociales que conecta, posiciona y convierte.",
      }}
    >
      {/* Estrategia antes de publicar */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Estrategia antes de publicar
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Publicar por publicar no es estrategia de contenido. Es ruido. En Media Buster 
                  creemos que cada pieza de contenido debe tener un propósito claro: educar, 
                  inspirar, entretener o convertir. Idealmente, una combinación de estos.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Como <strong className="text-foreground">agencia de contenido digital</strong>, nuestro 
                  trabajo empieza mucho antes de la producción. Analizamos tu audiencia, mapeamos 
                  sus intereses y diseñamos una estrategia que guíe cada publicación.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  El resultado: contenido que no solo genera likes, sino que construye comunidad, 
                  posiciona tu marca como referente y, eventualmente, genera conversiones.
                </p>
              </div>
              <div className="relative">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Nuestro enfoque de contenido
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Estrategia basada en objetivos",
                      "Contenido con propósito definido",
                      "Calendario editorial estructurado",
                      "Medición y optimización continua",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido que conecta */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contenido que conecta, posiciona y convierte
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cubrimos todo el ciclo del contenido: desde la estrategia hasta la gestión de 
                comunidad, pasando por la producción de piezas visuales y audiovisuales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Estrategia de contenidos */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Estrategia de contenidos
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Diseñamos el plan maestro que guía toda la producción. Definimos qué decir, 
                  cómo decirlo y cuándo publicarlo.
                </p>
                <ul className="space-y-3">
                  {[
                    "Análisis de audiencia",
                    "Pilares de contenido",
                    "Calendario editorial",
                    "Mix de formatos",
                    "Métricas de éxito",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Producción de contenido */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Camera className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Producción de contenido
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Creamos las piezas que llevan tu mensaje al mundo. Contenido visual y 
                  audiovisual que captura atención y comunica valor.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fotografía de producto",
                    "Video y reels",
                    "Podcast y webcast",
                    "Carruseles informativos",
                    "Stories y contenido efímero",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community management */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Community management
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Gestionamos la relación con tu comunidad. Respondemos, interactuamos y 
                  construimos una base de seguidores comprometidos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Gestión de comentarios",
                    "Respuesta a mensajes",
                    "Engagement proactivo",
                    "Monitoreo de menciones",
                    "Reportes de comunidad",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué contenido estratégico */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Contenido para redes sociales que trabaja
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                Las redes sociales pueden ser el mejor canal de comunicación con tu audiencia o 
                un agujero negro que consume recursos sin retorno. La diferencia está en la 
                estrategia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Muchas marcas publican porque "hay que estar presentes". Llenan feeds con 
                contenido genérico, frases motivacionales y promociones constantes. El resultado: 
                audiencias desconectadas y esfuerzos desperdiciados.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro enfoque de <strong className="text-foreground">estrategia de contenidos</strong> es 
                diferente. Entendemos que las redes son espacios de conversación, no de broadcast. 
                Por eso diseñamos contenido que genera valor real: educa, entretiene, inspira y, 
                cuando es el momento, convierte.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Combinado con <strong className="text-foreground">community management profesional</strong>, 
                el resultado es una presencia digital que construye comunidad y posiciona tu marca 
                como referente en tu industria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Contenido;
