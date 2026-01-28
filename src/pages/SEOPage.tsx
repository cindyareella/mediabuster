import { Search, FileSearch, FileText, BarChart2, CheckCircle, ArrowUpRight } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { seoData } from "@/lib/seoData";

const SEOPage = () => {
  return (
    <ServicePageLayout
      seo={seoData.seo}
      path="/seo"
      slug="seo"
      breadcrumbName="SEO"
      hero={{
        icon: Search,
        title: "Agencia SEO para empresas que buscan crecer de forma orgánica",
        subtitle: "Posicionamiento Web",
        description:
          "Servicios de SEO técnico y de contenido con método y estrategia. Posicionamiento web que genera tráfico cualificado y reduce la dependencia de la pauta.",
      }}
    >
      {/* Posicionamiento con método */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Posicionamiento web con método y estrategia
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  El SEO no es magia ni resultados instantáneos. Es un proceso metodológico que 
                  requiere estrategia, paciencia y ejecución consistente. En Media Buster trabajamos 
                  el posicionamiento orgánico como lo que es: una inversión a mediano y largo plazo 
                  que construye activos digitales duraderos.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Como <strong className="text-foreground">agencia SEO</strong>, nos enfocamos en entender 
                  tu negocio primero. ¿Qué buscan tus clientes? ¿Cómo toman decisiones? ¿Dónde están 
                  las oportunidades reales de posicionamiento? Solo después de responder estas preguntas 
                  diseñamos una estrategia de contenidos y optimización técnica.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No prometemos "primera página en 30 días". Prometemos un trabajo serio, transparente 
                  y orientado a resultados sostenibles que reduzcan tu dependencia del paid media.
                </p>
              </div>
              <div className="relative">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <ArrowUpRight className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Resultados que buscamos
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Tráfico orgánico cualificado",
                      "Posicionamiento en keywords relevantes",
                      "Reducción de dependencia del paid",
                      "Autoridad de dominio sostenida",
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

      {/* Servicios SEO */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Servicios de SEO técnico y de contenido
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un SEO efectivo requiere trabajar en múltiples frentes. Combinamos optimización 
                técnica, estrategia de contenidos y análisis continuo para resultados sostenibles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* SEO On Page */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileSearch className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  SEO On Page
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Optimizamos cada elemento de tu sitio para que los buscadores entiendan 
                  de qué trata y lo posicionen correctamente.
                </p>
                <ul className="space-y-3">
                  {[
                    "Estructura de URLs y navegación",
                    "Meta tags optimizados",
                    "Jerarquía de encabezados",
                    "Velocidad de carga",
                    "Mobile-first optimization",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SEO de contenidos */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  SEO de contenidos
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Creamos contenido estratégico que responde a las búsquedas de tu audiencia 
                  y te posiciona como referente en tu industria.
                </p>
                <ul className="space-y-3">
                  {[
                    "Estrategia de contenidos",
                    "Investigación de intención de búsqueda",
                    "Copywriting SEO",
                    "Optimización de contenido existente",
                    "Link building interno",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Auditoría y keywords */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <BarChart2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Auditoría y keywords
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Analizamos tu situación actual, identificamos oportunidades y diseñamos 
                  un plan de acción basado en datos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Auditoría SEO completa",
                    "Análisis de competencia",
                    "Investigación de keywords",
                    "Mapeo de oportunidades",
                    "Plan de acción priorizado",
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

      {/* Por qué SEO */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              SEO para empresas que piensan a largo plazo
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                El <strong className="text-foreground">posicionamiento web</strong> es una de las inversiones 
                más rentables en marketing digital. A diferencia de la pauta, el tráfico orgánico no 
                desaparece cuando dejas de pagar. Es un activo que construyes y que sigue trabajando 
                para ti mes tras mes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En México, muchas empresas desconfían del SEO porque han trabajado con agencias que 
                prometen resultados mágicos y no entregan. Nuestro enfoque es diferente: transparencia 
                total, expectativas realistas y un trabajo constante que produce resultados medibles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Si buscas una <strong className="text-foreground">agencia SEO</strong> que trabaje con método, 
                que entienda tu negocio y que te acompañe en el proceso de construir autoridad digital, 
                conversemos. Te mostraremos exactamente qué podemos lograr y en qué plazos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SEOPage;
