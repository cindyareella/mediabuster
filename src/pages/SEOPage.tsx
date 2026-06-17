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
import ContactSection from "@/components/ContactSection";
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

const CREAM = "#fffdf5";
const CARBON_BG = "#2B2B2B";
const ZEBRA = "#fff5d2";
const CARBON = "#2B2B2B";

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
        <section className="bg-[#fffdf5] pt-24 lg:pt-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                  SEO & Posicionamiento Orgánico
                </p>
                <h1
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.05] tracking-tight"
                  style={{ color: CARBON }}
                >
                  SEO que trae <span className="text-primary">ventas</span>, no visitas.
                </h1>
                <p className="text-base md:text-lg mb-7 leading-relaxed" style={{ color: "#4a4a4a" }}>
                  Dominamos el algoritmo. Construimos activos digitales técnicos que reducen
                  tu dependencia de la pauta y captan demanda orgánica a largo plazo.
                </p>
                <Button asChild variant="hero" size="xl" className="group">
                  <Link to="/contacto">
                    Solicitar diagnóstico técnico
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/SEO-hero.jpg"
                  alt="SEO técnico Media Buster"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. EL PROBLEMA */}
        <section className="py-12 lg:py-16 relative" style={{ backgroundColor: CARBON_BG }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ backgroundColor: "rgba(124,58,237,0.15)" }}
              >
                <AlertTriangle className="w-7 h-7 text-electric" />
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
        <section className="py-12 lg:py-16" style={{ backgroundColor: CREAM }}>
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
                    <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-electric" />
                    </div>
                    <span className="text-xs font-bold text-electric/80">0{i + 1}</span>
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
        <section className="py-12 lg:py-16" style={{ backgroundColor: ZEBRA }}>
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
                    rastreable, relevante y autoritativo, con un posicionamiento
                    impulsado por{" "}
                    <Link to="/contenido" className="text-primary font-semibold underline-offset-4 hover:underline">
                      producción audiovisual de alta autoridad
                    </Link>
                    .
                  </p>
                </div>

                <ul className="space-y-4">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/60"
                    >
                      <CheckCircle2 className="w-5 h-5 text-electric shrink-0 mt-0.5" />
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
        <section className="py-12 lg:py-16" style={{ backgroundColor: CREAM }}>
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
        <section className="py-12 lg:py-16" style={{ backgroundColor: ZEBRA }}>
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
        <section className="py-12 lg:py-16" style={{ backgroundColor: CREAM }}>
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

        {/* 8. FORMULARIO DE CONTACTO (cierre único) */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default SEOPage;
