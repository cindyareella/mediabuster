import { Link } from "react-router-dom";
import { ArrowRight, Code2, Target, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/seoData";

const faqs = [
  {
    q: "¿Cuánto tarda el desarrollo de un sitio web?",
    a: "Un sitio corporativo o landing optimizada para conversión toma entre 3 y 6 semanas, dependiendo del alcance, integraciones y volumen de contenido.",
  },
  {
    q: "¿Trabajan sobre WordPress o desarrollan a medida?",
    a: "Desarrollamos a medida con stack moderno (React + Vite) para máxima velocidad, seguridad y escalabilidad. No usamos plantillas.",
  },
  {
    q: "¿El sitio queda optimizado para SEO y campañas de pauta?",
    a: "Sí. Cada proyecto se entrega con Core Web Vitals optimizados, marcado semántico, integración con analítica y pixeles listos para tus campañas.",
  },
  {
    q: "¿Puedo administrar el contenido yo mismo?",
    a: "Sí. Integramos un panel de administración o CMS headless según las necesidades del proyecto para que actualices contenido sin depender del equipo técnico.",
  },
];

const CARBON = "#1E1B4B";
const WHITE = "#FFFFFF";
const LAVENDER = "#F9F8FF";
const ULTRA = "#6D28D9";
const MARIGOLD = "#F59E0B";

const WHATSAPP_URL =
  "https://wa.me/5215635406982?text=Hola%20Media%20Buster%2C%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20web.";

const pillars = [
  {
    icon: Code2,
    title: "Arquitectura React",
    description:
      "Desarrollo ágil con stack moderno (React + Vite) para tiempos de carga ultrarrápidos y máxima fluidez.",
  },
  {
    icon: Target,
    title: "Diseño CRO",
    description:
      "Estructuras diseñadas para guiar al usuario hacia la venta. Jerarquía visual, fricción mínima y CTAs estratégicos.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description:
      "Listos para integrarse con tus campañas de pauta, analítica avanzada y CRM. Tu sitio crece contigo.",
  },
];

const benefits = [
  "Filtros para leads B2B de alta calidad (SQL).",
  "Acortamiento del ciclo de decisión de compra.",
  "Integración nativa con pauta, pixeles y analítica.",
  "Velocidad y Core Web Vitals optimizados desde el código.",
];

const DesarrolloWeb = () => {
  const breadcrumbs = [
    { name: "Inicio", url: SITE_URL },
    { name: "Desarrollo Web", url: `${SITE_URL}/desarrollo-web` },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: WHITE, color: CARBON }}>
      <SEO
        title="Desarrollo Web a Medida | Sitios que Convierten | Media Buster"
        description="Diseñamos y desarrollamos sitios web rápidos, modernos y orientados a la conversión. Arquitectura React, diseño CRO y escalabilidad para negocios en crecimiento."
        path="/desarrollo-web"
        keywords={["desarrollo web", "diseño web CRO", "sitios web que convierten", "agencia desarrollo web"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <Header />

      <main>
        {/* 1. HERO */}
        <section className="pt-24 lg:pt-28" style={{ backgroundColor: WHITE }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: ULTRA }}>
                  Desarrollo Web
                </p>
                <h1
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.05] tracking-tight"
                  style={{ color: CARBON }}
                >
                  Tu sitio web no debería ser un folleto.{" "}
                  <span style={{ color: ULTRA }}>Debería ser tu mejor vendedor.</span>
                </h1>
                <p className="text-base md:text-lg mb-7 leading-relaxed" style={{ color: "#4a4a4a" }}>
                  Construimos ecosistemas digitales rápidos y orientados a la conversión.
                  Diseño limpio, código moderno y arquitectura diseñada para escalar tus
                  ventas.
                </p>
                <Button
                  asChild
                  size="xl"
                  className="group text-white hover:opacity-90"
                  style={{ backgroundColor: ULTRA }}
                >
                  <a href="#contacto">
                    Cotizar mi proyecto web
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              <img
                src="https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/hero-desarrollo-web.jpg"
                alt="Desarrollo Web a medida orientado a conversión"
                className="object-cover rounded-2xl shadow-xl w-full aspect-[4/3]"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* 2. EL PROBLEMA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: CARBON }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ backgroundColor: "rgba(124,58,237,0.18)" }}
              >
                <AlertTriangle className="w-7 h-7" style={{ color: MARIGOLD }} />
              </div>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: WHITE }}
              >
                El 80% de los sitios web pierden clientes por ser lentos y confusos.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                Si estás invirtiendo en pauta y mandando tráfico a una página que tarda en
                cargar o no tiene un embudo claro,{" "}
                <strong style={{ color: WHITE }}>estás quemando tu presupuesto</strong>.
                Nosotros lo solucionamos.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ENFOQUE TÉCNICO */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: LAVENDER }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: ULTRA }}>
                Nuestro enfoque técnico
              </p>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: CARBON }}
              >
                Tres pilares para una web que vende
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="p-7 rounded-2xl bg-white border border-border/60 shadow-[0_8px_28px_-12px_rgba(30,27,75,0.10)] hover:shadow-[0_16px_40px_-16px_rgba(109,40,217,0.25)] transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(245,158,11,0.12)" }}
                    >
                      <p.icon className="w-5 h-5" style={{ color: MARIGOLD }} />
                    </div>
                    <span className="text-xs font-bold" style={{ color: MARIGOLD }}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: CARBON }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Intermedio */}
            <div className="text-center mt-12">
              <Button
                asChild
                size="xl"
                className="group text-white hover:opacity-90"
                style={{ backgroundColor: ULTRA }}
              >
                <a href="#contacto">
                  Quiero una web que sí convierta
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 4. ECOSISTEMAS DE ALTO IMPACTO */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: WHITE }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: ULTRA }}>
                    Ecosistemas de alto impacto
                  </p>
                  <h2
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                    style={{ color: CARBON }}
                  >
                    Sitios pensados para negocios complejos
                  </h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "#5a5a5a" }}>
                    No vendemos plantillas. Diseñamos ecosistemas digitales que se integran
                    con tus campañas de{" "}
                    <Link to="/paid-media" className="font-semibold underline-offset-4 hover:underline" style={{ color: ULTRA }}>
                      Pauta Digital
                    </Link>{" "}
                    y multiplican el retorno de cada peso invertido en tráfico.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="group text-white hover:opacity-90"
                    style={{ backgroundColor: ULTRA }}
                  >
                    <a href="#contacto">
                      Hablemos de mi ecosistema digital
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/60"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: MARIGOLD }} />
                      <span className="text-base" style={{ color: CARBON }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: LAVENDER }}>
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: ULTRA }}>
                Preguntas frecuentes
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: CARBON }}>
                Lo que debes saber antes de empezar
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`q${i + 1}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold" style={{ color: CARBON }}>
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base" style={{ color: "#5a5a5a" }}>
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 6. FORMULARIO DE CIERRE */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default DesarrolloWeb;
