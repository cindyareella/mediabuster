import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import { seoData, SITE_URL } from "@/lib/seoData";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  Zap,
  Share2,
  Search,
  ArrowRight,
} from "lucide-react";

const Nosotros = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Estrategia primero",
      description:
        "No ejecutamos sin entender. Cada acción tiene un propósito claro y medible.",
    },
    {
      icon: Users,
      title: "De emprendedores, para emprendedores",
      description:
        "Entendemos tu realidad porque la vivimos. Sin burocracia, con resultados.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento medible",
      description:
        "No métricas de vanidad. Hablamos de ventas, leads y ROI real.",
    },
    {
      icon: Lightbulb,
      title: "Creatividad con intención",
      description:
        "Cada pieza creativa tiene un objetivo estratégico detrás.",
    },
  ];

  const services = [
    { name: "Paid Media", icon: Zap, slug: "paid-media" },
    { name: "SEO", icon: Search, slug: "seo" },
    { name: "Contenido", icon: Share2, slug: "contenido" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO {...seoData.nosotros} path="/nosotros" />
      <SchemaOrg type="Organization" />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Sobre Media Buster
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Estrategia, contenido y performance trabajando juntos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Somos una agencia de marketing digital estratégico creada por emprendedores 
                para emprendedores. Diseñamos ecosistemas de crecimiento donde cada pieza 
                tiene un propósito.
              </p>
            </div>
          </div>
        </section>

        {/* Qué es Media Buster */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-background" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Qué es Media Buster
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    <strong className="text-foreground">Media Buster</strong> nace de una frustración real: 
                    las agencias tradicionales son caras, rígidas y muchas veces desconectadas de la 
                    realidad de los negocios en crecimiento.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Somos emprendedores que construimos una agencia de marketing estratégico con la 
                    mentalidad, rigor y calidad de una agencia grande, pero con una estructura flexible, 
                    humana y eficiente.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    No hacemos marketing por partes. Diseñamos <strong className="text-foreground">
                    ecosistemas digitales</strong> donde la estrategia, la creatividad y los datos 
                    trabajan juntos para generar crecimiento medible y sostenible.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-3 border-l-4 border-primary pl-4">
                      <p className="text-xl font-display font-semibold text-foreground">
                        "Claridad, datos y marketing que tiene sentido para tu negocio."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-card border border-border p-8 lg:p-12">
                    <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Cómo trabajamos con las marcas
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  No ofrecemos servicios aislados. Construimos sistemas de crecimiento donde 
                  cada área potencia a las demás.
                </p>
              </div>

              {/* Diferenciadores */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Servicios */}
              <div className="text-center">
                <p className="text-muted-foreground mb-8">
                  Nuestro ecosistema de servicios integrados
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}`}
                      className="group flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/50 transition-all"
                    >
                      <service.icon className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{service.name}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                ¿Quieres saber si hacemos match?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Cuéntanos sobre tu proyecto. Analizamos tu situación y te decimos con 
                honestidad si podemos ayudarte.
              </p>

              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Hablemos de tu estrategia
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
