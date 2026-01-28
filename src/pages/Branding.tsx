import { Palette, Fingerprint, Eye, Lightbulb, CheckCircle, Sparkles } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { seoData } from "@/lib/seoData";

const Branding = () => {
  return (
    <ServicePageLayout
      seo={seoData.branding}
      path="/branding"
      slug="branding"
      breadcrumbName="Branding"
      hero={{
        icon: Palette,
        title: "Agencia de branding y estrategia de marca",
        subtitle: "Branding Estratégico",
        description:
          "Construimos marcas sólidas con dirección clara. Desde el ADN hasta la identidad visual, desarrollamos todo lo que tu marca necesita para destacar y conectar.",
      }}
    >
      {/* Las marcas sólidas no se improvisan */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Las marcas sólidas no se improvisan
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Una marca no es solo un logo. Es la percepción que el mundo tiene de tu negocio. 
                  Es lo que piensan cuando escuchan tu nombre, cómo se sienten al interactuar contigo, 
                  y por qué te eligen sobre la competencia.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Como <strong className="text-foreground">agencia de branding</strong>, trabajamos desde 
                  los cimientos. No empezamos por el diseño, empezamos por entender quién eres, qué 
                  te hace diferente y hacia dónde quieres llegar. Solo después traducimos esa esencia 
                  en una identidad visual y verbal coherente.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  El resultado: marcas que no solo se ven bien, sino que conectan con las personas 
                  correctas y comunican tu propuesta de valor con claridad.
                </p>
              </div>
              <div className="relative">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    ¿Qué incluye nuestro proceso?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Diagnóstico de marca actual",
                      "Definición de posicionamiento",
                      "Arquitectura de marca",
                      "Sistema visual completo",
                      "Guías de aplicación",
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

      {/* Construimos marcas */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Construimos marcas con dirección clara
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nuestro proceso de branding cubre todos los elementos necesarios para que tu marca 
                tenga una identidad sólida, coherente y diferenciada.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* ADN de marca */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Fingerprint className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  ADN de marca
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Definimos los elementos fundamentales que hacen única a tu marca: propósito, 
                  valores, personalidad y posicionamiento estratégico.
                </p>
                <ul className="space-y-3">
                  {[
                    "Propósito y visión",
                    "Valores y personalidad",
                    "Propuesta de valor única",
                    "Territorio de marca",
                    "Arquetipos y tono de voz",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Identidad visual */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Identidad visual
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Diseñamos un sistema visual coherente que traduce la esencia de tu marca 
                  en elementos gráficos memorables y versátiles.
                </p>
                <ul className="space-y-3">
                  {[
                    "Logotipo y variaciones",
                    "Paleta de colores",
                    "Tipografía y jerarquías",
                    "Elementos gráficos",
                    "Aplicaciones y mockups",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Naming */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Naming
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Creamos nombres de marca memorables, diferenciados y con potencial de 
                  registro que conectan con tu audiencia.
                </p>
                <ul className="space-y-3">
                  {[
                    "Exploración creativa",
                    "Validación lingüística",
                    "Verificación de disponibilidad",
                    "Testing conceptual",
                    "Taglines y descriptores",
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

      {/* Desarrollo de marca */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Estrategia de marca para empresas en crecimiento
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                El <strong className="text-foreground">desarrollo de marca</strong> es una de las 
                inversiones más importantes para cualquier negocio. Una marca bien construida 
                diferencia, genera confianza y permite cobrar lo que realmente vales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Muchas empresas cometen el error de empezar por el logo. Contratan un diseñador, 
                reciben opciones, eligen una y la aplican en todo. El problema: sin estrategia, 
                la identidad visual queda desconectada de la realidad del negocio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro enfoque es diferente. Primero entendemos tu negocio, tu mercado y tu 
                audiencia. Después definimos el posicionamiento estratégico. Y solo entonces 
                diseñamos una <strong className="text-foreground">identidad de marca</strong> que 
                refleje todo eso de manera coherente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Si estás lanzando un nuevo proyecto o sientes que tu marca actual no te representa, 
                conversemos. Te ayudamos a construir una marca que trabaje para ti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Branding;
