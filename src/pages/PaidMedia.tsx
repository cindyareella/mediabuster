import { Zap, Target, BarChart3, TrendingUp, CheckCircle } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { seoData } from "@/lib/seoData";

const PaidMedia = () => {
  return (
    <ServicePageLayout
      seo={seoData.paidMedia}
      path="/paid-media"
      slug="paid-media"
      breadcrumbName="Paid Media"
      hero={{
        icon: Zap,
        title: "Agencia de pauta digital orientada a resultados",
        subtitle: "Paid Media & Performance",
        description:
          "Diseñamos y ejecutamos campañas de Google Ads y Meta Ads con un enfoque claro: maximizar tu retorno de inversión con estrategia antes de cada peso invertido.",
      }}
    >
      {/* Performance con visión estratégica */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Performance con visión estratégica
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  En el mundo del performance marketing, el éxito no se mide en clics o impresiones. 
                  Se mide en resultados de negocio: ventas, leads cualificados, crecimiento real.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Como <strong className="text-foreground">agencia de pauta digital</strong>, entendemos que cada peso 
                  invertido debe trabajar para ti. Por eso, antes de lanzar cualquier campaña, 
                  analizamos tu negocio, tu audiencia y tus objetivos para diseñar una estrategia 
                  que realmente funcione.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No somos una agencia que solo "prende campañas". Somos estrategas de crecimiento 
                  que utilizan la pauta digital como herramienta para alcanzar objetivos medibles.
                </p>
              </div>
              <div className="relative">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Nuestro enfoque de performance
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Estrategia antes de inversión",
                      "Optimización basada en datos reales",
                      "Enfoque en ROI, no en métricas de vanidad",
                      "Reporting transparente y accionable",
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

      {/* Campañas que escalan */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Campañas de Google Ads y Meta Ads que escalan
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Dominamos las plataformas más importantes del ecosistema digital para llevar 
                tu marca a las audiencias correctas en el momento preciso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Estrategia antes de invertir */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Estrategia antes de invertir
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Antes de invertir un solo peso en pauta, realizamos un diagnóstico completo: 
                  analizamos tu mercado, identificamos oportunidades y diseñamos una estrategia 
                  personalizada. Esto nos permite invertir de manera inteligente desde el primer día.
                </p>
                <ul className="space-y-3">
                  {[
                    "Análisis de competencia y mercado",
                    "Definición de audiencias de alto valor",
                    "Mapeo del customer journey",
                    "Proyección de resultados realista",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optimización continua */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Optimización continua basada en datos
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Lanzar una campaña es solo el comienzo. El verdadero valor está en la optimización 
                  constante. Analizamos el rendimiento diario, identificamos patrones y ajustamos 
                  para mejorar resultados de forma continua.
                </p>
                <ul className="space-y-3">
                  {[
                    "Análisis de métricas en tiempo real",
                    "Testing A/B sistemático",
                    "Ajuste de pujas y presupuestos",
                    "Iteración creativa basada en performance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plataformas */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">Plataformas que dominamos</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Google Ads", "Meta Ads", "LinkedIn Ads"].map(
                  (platform) => (
                    <span
                      key={platform}
                      className="px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground"
                    >
                      {platform}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Cómo trabajamos tu pauta digital
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                En Media Buster, el <strong className="text-foreground">performance marketing</strong> no es solo 
                ejecutar campañas de pago. Es un sistema integrado donde la estrategia guía cada decisión, 
                los datos validan cada acción y la optimización nunca se detiene.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos con marcas que ya venden pero quieren escalar. Empresas que entienden que 
                invertir en pauta sin estrategia es quemar dinero, y que buscan un partner que 
                piense como dueño de negocio, no solo como operador de campañas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Si buscas una <strong className="text-foreground">agencia de paid media</strong> que combine 
                visión estratégica con ejecución impecable, conversemos. Analizamos tu situación actual 
                y te mostramos un camino claro hacia tus objetivos de crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default PaidMedia;
