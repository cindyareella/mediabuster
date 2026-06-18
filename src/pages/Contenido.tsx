import { Link } from "react-router-dom";
import {
  ArrowRight,
  PenTool,
  Camera,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Megaphone,
  Search,
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

const CREAM = "#FFFFFF";
const CARBON_BG = "#1E1B4B";
const ZEBRA = "#F9F8FF";
const CARBON = "#1E1B4B";

const pillars = [
  {
    icon: PenTool,
    title: "Estrategia y Guionaje",
    description:
      "No encendemos cámaras sin un plan. Analizamos tu audiencia y diseñamos los pilares y guiones exactos para cada pieza.",
  },
  {
    icon: Camera,
    title: "Producción High-End 4K y Remota",
    description:
      "Contamos con set propio con cámaras 4K para grabar cápsulas y programas. También dirigimos y producimos tus formatos de manera remota con calidad broadcast.",
  },
  {
    icon: Share2,
    title: "Community Management y Distribución",
    description:
      "No solo publicamos tus videos; operamos tus canales de forma activa. Gestionamos tu comunidad y transformamos las interacciones diarias en prospectos calificados, llevando a los usuarios desde un comentario hasta tu embudo de ventas.",
  },
];

const includes = [
  "Estrategia editorial.",
  "Grabación en set 4K o dirección remota.",
  "Edición de programas y formatos cortos (Reels/TikToks).",
  "Copywriting persuasivo.",
  "Community Management estratégico e interacción diaria con tus seguidores.",
];

const faqs = [
  {
    q: "¿Tengo que ir a su set en la ciudad para grabar?",
    a: "No, también hacemos producción remota de alta calidad. Dirigimos tu rodaje a distancia asegurando estándares broadcast sin que tengas que desplazarte.",
  },
  {
    q: "¿Qué tipo de formatos producen?",
    a: "Programas, videopodcasts y contenido vertical corto (Reels, TikToks, Shorts) optimizados para distribución multiplataforma.",
  },
  {
    q: "¿Ustedes responden los comentarios?",
    a: "Sí, ofrecemos community management estratégico. Respondemos, moderamos y convertimos la conversación en oportunidades reales de venta.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5215635406982?text=Hola%20Media%20Buster%2C%20quiero%20una%20propuesta%20de%20contenido%20y%20social%20media.";

const Contenido = () => {
  const breadcrumbs = [
    { name: "Inicio", url: SITE_URL },
    { name: "Contenido", url: `${SITE_URL}/contenido` },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: CARBON }}>
      <SEO {...seoData.contenido} path="/contenido" />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />

      <main>
        {/* 1. HERO */}
        <section className="bg-[#FFFFFF] pt-24 lg:pt-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                  Contenido & Social Media
                </p>
                <h1
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.05] tracking-tight"
                  style={{ color: CARBON }}
                >
                  Producimos tu <span className="text-primary">autoridad audiovisual</span>.
                </h1>
                <p className="text-base md:text-lg mb-7 leading-relaxed" style={{ color: "#4a4a4a" }}>
                  Elevamos tu mensaje con nuestro set de grabación 4K in-house y producción
                  remota para convertirte en el referente de tu industria.
                </p>
                <Button asChild variant="hero" size="xl" className="group">
                  <Link to="/contacto">
                    Solicitar diagnóstico de contenido
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/hero-content.png"
                  alt="Producción de contenido Media Buster"
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
                ¿Por qué tus redes sociales consumen tiempo y no traen clientes?
              </h2>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(253,251,247,0.75)" }}
              >
                La mayoría de las agencias llenan feeds con plantillas genéricas. Si publicas
                solo por cumplir una cuota y no tienes un sistema de producción audiovisual
                que retenga la atención,{" "}
                <strong style={{ color: CREAM }}>tu mensaje es solo ruido</strong>.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-[#6D28D9] text-white font-semibold px-8 py-3 rounded-lg shadow-glow hover:bg-[#5b21b6] transition-all"
                >
                  Quiero dejar de publicar por publicar
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. METODOLOGÍA */}
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
                Cómo producimos tu autoridad digital
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
                    Nuestra infraestructura a tu servicio
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "#5a5a5a" }}>
                    Un sistema integral de producción y distribución pensado para convertir
                    cada pieza en un activo de autoridad para tu marca, con contenido
                    diseñado para convertir en tus{" "}
                    <Link to="/paid-media" className="text-primary font-semibold underline-offset-4 hover:underline">
                      campañas de Pauta Digital
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

              <div className="mt-10 flex justify-center">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-[#6D28D9] text-white font-semibold px-8 py-3 rounded-lg shadow-glow hover:bg-[#5b21b6] transition-all"
                >
                  Delegar mi contenido y redes
                  <ArrowRight className="w-4 h-4" />
                </a>
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
                El impacto de crear tu propia audiencia
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4a4a4a" }}>
                Cuando tu contenido educa, entretiene y demuestra criterio, dejas de empujar
                productos y empiezas a atraer demanda. El contenido de alta calidad{" "}
                <strong style={{ color: CARBON }}>reduce la fricción de ventas</strong> y
                construye un activo digital que te posiciona por encima de la competencia,
                independientemente del presupuesto en pauta.
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
                  Potencia tu contenido con el resto del ecosistema
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5a5a5a" }}>
                  El contenido se multiplica cuando se combina con pauta rentable y un sitio
                  optimizado para captar la demanda orgánica.
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
                    Amplifica tu mejor contenido y conviértelo en pauta de alto rendimiento
                    con tracking real.
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
                    SEO & Posicionamiento
                  </h3>
                  <p className="text-base mb-4" style={{ color: "#5a5a5a" }}>
                    Convierte tu contenido en autoridad de dominio y posicionamiento orgánico
                    sostenido.
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

export default Contenido;
