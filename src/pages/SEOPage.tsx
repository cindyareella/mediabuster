import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  FileSearch,
  Link2,
  CheckCircle2,
  AlertTriangle,
  Megaphone,
  PenTool,
  MessageCircle,
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

const pillars = [
  {
    icon: Code2,
    title: "SEO Técnico y Arquitectura",
    description:
      "Auditamos y reestructuramos el código de tu sitio. Optimizamos Core Web Vitals, limpiamos el DOM, aseguramos indexación perfecta y creamos una arquitectura de URLs lógica sin cuellos de botella para los rastreadores.",
  },
  {
    icon: FileSearch,
    title: "SEO On-Page y Semántica",
    description:
      "Alineamos cada página con la intención de búsqueda exacta. Optimizamos jerarquías (H1-H6), metaetiquetas para CTR y estructuramos clústeres temáticos sin saturar de palabras clave basura.",
  },
  {
    icon: Link2,
    title: "SEO de Autoridad / Off-Page",
    description:
      "Construimos la confianza de tu dominio mediante link building de alta calidad y E-E-A-T. Conseguimos que sitios relevantes apunten hacia ti, dándote el respaldo que exige el algoritmo.",
  },
];

const includes = [
  "Auditoría profunda de indexación y Core Web Vitals.",
  "Investigación de keywords transaccionales e intención de búsqueda.",
  "Optimización de jerarquías de encabezados y etiquetas.",
  "Estrategia de enlazado interno y externo (Link building).",
  "Dashboards de evolución de tráfico orgánico en tiempo real.",
];

const faqs = [
  {
    q: "¿Cuánto tiempo tarda el SEO en dar resultados?",
    a: "El SEO no es magia de 30 días. Los ajustes técnicos mejoran la indexación en semanas, pero la autoridad de dominio real y el tráfico calificado sostenido se consolidan a partir del mes 3 al 6.",
  },
  {
    q: "¿El SEO aplica para cualquier plataforma web?",
    a: "Auditamos arquitecturas sin importar dónde estén construidas. Si tu sitio actual tiene un código deficiente, te propondremos reestructurarlo para cumplir los estándares de Google.",
  },
  {
    q: "¿Ustedes escriben los textos?",
    a: "Diseñamos la arquitectura del contenido y ejecutamos un copywriting especializado en intención de búsqueda (Search Intent), no solo textos de relleno.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5215635406982?text=Hola%20Media%20Buster%2C%20quiero%20auditar%20el%20SEO%20de%20mi%20sitio.";

const SEOPage = () => {
  const breadcrumbs = [
    { name: "Inicio", url: SITE_URL },
    { name: "SEO", url: `${SITE_URL}/seo` },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: CARBON }}>
      <SEO {...seoData.seo} path="/seo" />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />

      <main>
        {/* 1. HERO */}
        <section
          className="pt-28 pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden"
          style={{ backgroundColor: CREAM }}
        >
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 bg-primary/30" />
          <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-secondary/30" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
              <div className="text-center lg:text-left">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                  SEO & Posicionamiento Orgánico
                </p>
                <h1
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.05] tracking-tight"
                  style={{ color: CARBON }}
                >
                  Dominamos el algoritmo. Construimos{" "}
                  <span className="text-primary">activos digitales que traen ventas</span>, no
                  solo visitas.
                </h1>
                <p
                  className="text-base md:text-lg mb-7 leading-relaxed"
                  style={{ color: "#4a4a4a" }}
                >
                  Posicionamiento SEO técnico y estratégico. Reducimos tu dependencia de la
                  pauta publicitaria captando la demanda orgánica de tu mercado con precisión
                  estructural. Sin trucos, puro rendimiento a largo plazo.
                </p>
                <Button asChild variant="hero" size="xl" className="group">
                  <Link to="/contacto">
                    Solicitar diagnóstico técnico
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/SEO-hero.jpg"
                  alt="SEO técnico Media Buster"
                  className="w-full h-auto object-cover rounded-3xl"
                  loading="eager"
                />
              </div>
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
                ¿Por qué tu sitio web es un adorno que no genera negocio?
              </h2>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(253,251,247,0.75)" }}
              >
                La mayoría de las agencias venden palabras clave sueltas y artículos de
                relleno. Si tienes tráfico que rebota, tu código carga lento o Google
                simplemente te ignora, estás dejando que tu competencia{" "}
                <strong style={{ color: CREAM }}>
                  capture gratis a los clientes que ya están listos para comprar
                </strong>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 3. METODOLOGÍA / PILARES */}
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
                Los 3 pilares de nuestra autoridad digital
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pillars.map((step, i) => (
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
                    La infraestructura que implementamos
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "#5a5a5a" }}>
                    Una operación técnica end-to-end pensada para que tu sitio sea
                    rastreable, relevante y autoritativo.
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
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Resultados y beneficios
              </p>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: CARBON }}
              >
                El activo más rentable a mediano plazo
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4a4a4a" }}>
                El SEO bien ejecutado es una máquina de adquisición perpetua. Logramos que tu
                sitio trabaje para ti 24/7, reduciendo drásticamente tu{" "}
                <strong style={{ color: CARBON }}>Costo de Adquisición de Clientes (CAC)</strong>{" "}
                y blindando tu rentabilidad contra los aumentos de costo en los anuncios
                pagados.
              </p>
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
                  Potencia el SEO con el resto del ecosistema
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5a5a5a" }}>
                  El posicionamiento orgánico se multiplica cuando trabaja junto a la pauta y
                  un contenido con intención clara.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/paid-media"
                  className="group p-7 rounded-2xl bg-white border border-border/60 hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{ color: CARBON }}
                  >
                    Paid Media & Growth
                  </h3>
                  <p className="text-base mb-4" style={{ color: "#5a5a5a" }}>
                    Acelera ventas mientras el SEO madura. Pauta rentable que sostiene el
                    crecimiento a corto plazo.
                  </p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/contenido"
                  className="group p-7 rounded-2xl bg-white border border-border/60 hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <PenTool className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{ color: CARBON }}
                  >
                    Contenido & Social Media
                  </h3>
                  <p className="text-base mb-4" style={{ color: "#5a5a5a" }}>
                    Contenido estratégico que alimenta tu autoridad de dominio y refuerza la
                    intención de búsqueda.
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
                ¿Listo para dejar de ser invisible en los buscadores?
              </h2>
              <p
                className="text-lg md:text-xl mb-10 leading-relaxed"
                style={{ color: "rgba(253,251,247,0.75)" }}
              >
                Hablemos sobre la salud técnica de tu sitio. Auditamos tu estructura actual
                sin compromiso para mostrarte exactamente dónde estás perdiendo
                posicionamiento.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild variant="hero" size="xl" className="group">
                  <Link to="/contacto">
                    Agendar consultoría
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="whatsapp" size="xl">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Hablar por WhatsApp ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SEOPage;
