import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  LineChart,
  Crosshair,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { seoData, SITE_URL } from "@/lib/seoData";

const CREAM = "#FDFBF7";
const CARBON = "#2B2B2B";
const NIGHT = "#0F172A";

const methodology = [
  {
    icon: Calculator,
    title: "Auditoría Financiera",
    description:
      "Revisamos tu inversión actual, márgenes y CAC objetivo para construir una pauta basada en rentabilidad real, no en supuestos.",
  },
  {
    icon: LineChart,
    title: "Arquitectura de Medición",
    description:
      "Implementamos tracking server-side, eventos clave y atribución correcta para tomar decisiones con datos confiables.",
  },
  {
    icon: Crosshair,
    title: "Compra de Medios Quirúrgica",
    description:
      "Estructuras de campaña limpias, audiencias precisas y creativos pensados para conversión, no para likes.",
  },
  {
    icon: TrendingUp,
    title: "Optimización por ROI",
    description:
      "Iteramos cada semana sobre lo que genera ingresos. Cortamos lo que no convierte y escalamos lo que sí.",
  },
];

const includes = [
  "Configuración y gestión de Google Ads y Meta Ads",
  "Tracking avanzado con GA4, GTM y eventos server-side",
  "Dashboards de rendimiento en tiempo real",
  "Gestión directa por los fundadores, sin ejecutivos junior",
  "Optimización creativa basada en data de performance",
  "Reportes semanales con foco en CPA, ROAS y leads cualificados",
];

const benefits = [
  {
    title: "Reducción real del CPL",
    description:
      "Bajamos el costo por lead atacando fricción en el funnel y eliminando inversión en audiencias frías que no convierten.",
  },
  {
    title: "Tráfico calificado, no curioso",
    description:
      "Atraemos personas con intención de compra. Menos volumen vanidoso, más conversaciones que terminan en venta.",
  },
  {
    title: "Crecimiento predecible",
    description:
      "Modelos de inversión escalables: sabes cuánto entra por cada peso invertido y a qué ritmo puedes crecer.",
  },
];

const faqs = [
  {
    q: "¿Quién manejará mis campañas?",
    a: "Tus campañas las operan directamente los fundadores y especialistas senior de Media Buster. No delegamos tu cuenta a ejecutivos junior ni la dejamos en piloto automático.",
  },
  {
    q: "¿No tengo infraestructura de medición, me ayudan?",
    a: "Sí. Diseñamos e implementamos toda la arquitectura: GA4, Google Tag Manager, eventos de conversión, server-side tracking y dashboards. Empezamos por ahí porque sin medición correcta, optimizar es adivinar.",
  },
  {
    q: "¿Cuánto tardaré en ver resultados?",
    a: "Las primeras señales de optimización aparecen entre la segunda y cuarta semana. Resultados sostenidos y escalables suelen consolidarse entre el segundo y tercer mes, dependiendo de tu ciclo de venta e inversión.",
  },
];

const PaidMedia = () => {
  const breadcrumbs = [
    { name: "Inicio", url: SITE_URL },
    { name: "Paid Media", url: `${SITE_URL}/paid-media` },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: CARBON }}>
      <SEO {...seoData.paidMedia} path="/paid-media" />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />

      <main>
        {/* 1. HERO */}
        <section
          className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden"
          style={{ backgroundColor: CREAM }}
        >
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 bg-primary/30" />
          <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-secondary/30" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-5">
                Paid Media & Performance
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight"
                style={{ color: CARBON }}
              >
                Escalamos tus ventas,{" "}
                <span className="text-primary">no tus métricas de vanidad.</span>
              </h1>
              <p
                className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                style={{ color: "#4a4a4a" }}
              >
                Gestión de Paid Media de alto rendimiento. Operamos tu inversión publicitaria
                con precisión matemática para maximizar tu retorno, sin intermediarios ni
                cuentas delegadas a ejecutivos junior.
              </p>
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Auditar mis campañas
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. EL PROBLEMA */}
        <section className="py-20 lg:py-28 relative" style={{ backgroundColor: NIGHT }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ backgroundColor: "rgba(210,93,56,0.15)" }}
              >
                <AlertTriangle className="w-7 h-7 text-primary" />
              </div>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: CREAM }}
              >
                ¿Por qué tu pauta actual quema presupuesto sin generar clientes?
              </h2>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(253,251,247,0.75)" }}
              >
                La mayoría de las agencias optimiza para clics baratos, alcance e impresiones,
                métricas que se ven bien en un reporte pero no pagan tu nómina. El verdadero
                problema no es el costo por clic, es la falta de un sistema enfocado en{" "}
                <strong style={{ color: CREAM }}>rentabilidad, CPA controlado y ROAS</strong>.
                Sin eso, cada peso invertido en pauta es una apuesta, no una inversión.
              </p>
            </div>
          </div>
        </section>

        {/* 3. METODOLOGÍA */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Nuestra metodología
              </p>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: CARBON }}
              >
                Un sistema de cuatro fases para invertir con precisión
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {methodology.map((step, i) => (
                <div
                  key={step.title}
                  className="p-7 rounded-2xl bg-white border border-border/60 shadow-[0_8px_28px_-12px_rgba(43,43,43,0.12)] hover:shadow-[0_16px_40px_-16px_rgba(210,93,56,0.25)] transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary/70">0{i + 1}</span>
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                    style={{ color: CARBON }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. QUÉ INCLUYE */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#FDF5EE" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                    Qué incluye
                  </p>
                  <h2
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                    style={{ color: CARBON }}
                  >
                    Todo lo que necesitas para operar pauta como un negocio serio
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "#5a5a5a" }}>
                    Una operación end-to-end pensada para marcas que ya venden y quieren
                    escalar con previsibilidad.
                  </p>
                </div>

                <ul className="space-y-4">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/60"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-base" style={{ color: CARBON }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BENEFICIOS */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Beneficios
              </p>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: CARBON }}
              >
                Resultados que sí mueven el negocio
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-8 rounded-2xl bg-white border border-border/60 shadow-[0_8px_28px_-12px_rgba(43,43,43,0.10)]"
                >
                  <h3
                    className="font-display text-xl font-bold mb-3"
                    style={{ color: CARBON }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "#5a5a5a" }}>
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SERVICIOS COMPLEMENTARIOS */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#FDF5EE" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                  Servicios complementarios
                </p>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  style={{ color: CARBON }}
                >
                  Pauta que se potencia con el resto del ecosistema
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5a5a5a" }}>
                  Toda inversión en medios rinde más cuando el sitio convierte y el tráfico
                  orgánico baja el costo de adquisición.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/contacto"
                  className="group p-7 rounded-2xl bg-white border border-border/60 hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{ color: CARBON }}
                  >
                    Desarrollo Web orientado a CRO
                  </h3>
                  <p className="text-base mb-4" style={{ color: "#5a5a5a" }}>
                    Landings y sitios diseñados para convertir el tráfico pagado en clientes,
                    no para verse bonitos.
                  </p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/seo"
                  className="group p-7 rounded-2xl bg-white border border-border/60 hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{ color: CARBON }}
                  >
                    SEO técnico
                  </h3>
                  <p className="text-base mb-4" style={{ color: "#5a5a5a" }}>
                    Tráfico orgánico cualificado que reduce tu dependencia de la pauta y baja
                    tu CAC mes a mes.
                  </p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                  Preguntas frecuentes
                </p>
                <h2
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ color: CARBON }}
                >
                  Lo que más nos preguntan
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white border border-border/60 rounded-xl px-6 !border-b"
                  >
                    <AccordionTrigger
                      className="font-display text-left text-base md:text-lg font-semibold hover:no-underline py-5"
                      style={{ color: CARBON }}
                    >
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent
                      className="text-base leading-relaxed pb-5"
                      style={{ color: "#5a5a5a" }}
                    >
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{ backgroundColor: NIGHT }}
        >
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
                style={{ color: CREAM }}
              >
                ¿Listo para dejar de gastar y empezar a invertir?
              </h2>
              <p
                className="text-lg md:text-xl mb-10 leading-relaxed"
                style={{ color: "rgba(253,251,247,0.75)" }}
              >
                Analizamos tu inversión actual y te mostramos exactamente dónde se está
                fugando presupuesto y cuánto puedes recuperar.
              </p>
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Agendar consultoría
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

export default PaidMedia;
