import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, MapPin, CalendarCheck, MessageCircle, ArrowRight } from "lucide-react";

const PHONE = "525635406982";
const waLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

const programs = [
  {
    title: "De Dueño a Estratega Digital",
    desc: "Aprende a delegar y dirigir ecosistemas de ventas.",
    msg: "Hola Media Buster, quiero el temario del programa 'De Dueño a Estratega Digital'.",
  },
  {
    title: "Creador Estratégico",
    desc: "Temario intensivo de 4 horas para estructurar pilares de contenido e Inteligencia Artificial.",
    msg: "Hola Media Buster, quiero el temario del programa 'Creador Estratégico'.",
  },
  {
    title: "El CV Implacable",
    desc: "Vence al algoritmo ATS con honestidad estratégica, sin inventar cargos.",
    msg: "Hola Media Buster, quiero el temario del programa 'El CV Implacable'.",
  },
  {
    title: "Liderazgo Adaptativo",
    desc: "Gestión de equipos y diseño de cultura organizacional.",
    msg: "Hola Media Buster, quiero el temario del programa 'Liderazgo Adaptativo'.",
  },
];

const Academia = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF", color: "#1E1B4B" }}>
      <SEO
        title="Media Buster Academy | Formación Presencial de Marketing"
        description="Programas presenciales de marketing, estrategia y liderazgo en grupos reducidos. Convocatorias cerradas en Ciudad de México."
        path="/academia"
      />
      <Header />

      <main className="pt-20 lg:pt-28">
        {/* 1. Hero */}
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                  style={{ backgroundColor: "#1E1B4B", color: "#FFFFFF" }}>
                  Media Buster Academy
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "#1E1B4B" }}>
                  Formación presencial para estrategas, no para espectadores.
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 mb-8">
                  Olvídate de los cursos pregrabados. Abrimos convocatorias cerradas y presenciales para entrenarte con el rigor técnico de una agencia en activo.
                </p>
                <Button asChild variant="whatsapp" size="xl">
                  <a
                    href={waLink("Hola Media Buster, quiero consultar las próximas fechas de Academy.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar próximas fechas
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/MediaBusterAcademy-logo.png"
                  alt="Media Buster Academy"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Diferenciador (dark) */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1E1B4B" }}>
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#FFFFFF" }}>
              El 90% de los cursos online fracasan por falta de ejecución.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#FFFFFF", opacity: 0.85 }}>
              Nuestro modelo es 100% presencial en grupos reducidos. Vienes a arrastrar el lápiz y llevarte un plan listo para implementar bajo supervisión directa.
            </p>
          </div>
        </section>

        {/* 3. Programas */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Programas activos</h2>
              <p className="text-foreground/70">Convocatorias intensivas diseñadas para resultados medibles.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {programs.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col bg-white rounded-2xl p-7 border border-foreground/10 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1E1B4B" }}>{p.title}</h3>
                  <p className="text-foreground/70 mb-6 flex-1">{p.desc}</p>
                  <a
                    href={waLink(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:gap-2"
                    style={{ color: "#6D28D9" }}
                  >
                    Pedir temario <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Modalidad */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#FDF5EE" }}>
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Modalidad</h2>
              <p className="text-foreground/70">Un formato pensado para que ejecutes, no solo para que escuches.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { Icon: Users, title: "Grupos Reducidos", desc: "Cupo limitado para garantizar atención directa." },
                { Icon: MapPin, title: "Sede en Ciudad de México", desc: "Entrenamiento presencial en un espacio diseñado para producir." },
                { Icon: CalendarCheck, title: "Fechas por Convocatoria", desc: "Aperturas cerradas con calendario definido por programa." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                    style={{ backgroundColor: "#6D28D9", color: "#FFFFFF" }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left text-lg font-semibold">¿Cuál es el costo?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/75">
                  Varía por convocatoria, pide informes por WhatsApp para recibir el dossier actualizado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left text-lg font-semibold">¿Entregan diploma?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/75">
                  Sí, entregamos constancia de participación, pero el verdadero valor es el plan de acción con el que sales.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left text-lg font-semibold">¿Puedo tomarlo online?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/75">
                  No, el formato es estrictamente presencial para garantizar la ejecución práctica y el networking de alto nivel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 6. CTA Final (dark) */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1E1B4B" }}>
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#FFFFFF" }}>
              Tu crecimiento profesional no puede esperar a la siguiente pestaña.
            </h2>
            <p className="text-lg md:text-xl mb-10" style={{ color: "#FFFFFF", opacity: 0.85 }}>
              Únete a la próxima generación de líderes. Los lugares se agotan rápido en cada apertura.
            </p>
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={waLink("Hola Media Buster, quiero hablar con un asesor de Academy ahora.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar con un asesor ahora
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Academia;
