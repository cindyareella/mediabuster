import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Zap,
  Target,
  ShieldCheck,
  Gauge,
  MousePointerClick,
  Copy,
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  X,
  Check,
  ChevronDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import bannerDisenoWeb from "@/assets/banner-diseno-web.jpg";

const WEBHOOK_URL = "https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18";
const WHATSAPP_URL = "https://wa.me/message/P2BQDIMVFCDCG1";
const LOGO_URL = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/MediaBuster-logo.png";

const SERVICES = [
  "Diseño Web & CRO",
  "Contenido Multimedia",
  "Content & Social Media",
  "SEO",
];


const LandingWeb = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "Diseño Web & CRO",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: `${form.name} ${form.lastName}`.trim(),
          email: form.email,
          telefono: form.phone,
          empresa: form.company,
          servicio_interes: form.service,
          mensaje: form.message,
          origen: "landing_diseno_web_ventas",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setSuccess(true);
      setForm({ name: "", lastName: "", company: "", email: "", phone: "", service: "Diseño Web & CRO", message: "" });
      toast({ title: "Solicitud enviada", description: "Te contactaremos en breve." });
    } catch {
      toast({ title: "Error al enviar", description: "Inténtalo nuevamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition";

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Helmet>
        <title>Media Buster · Diagnóstico web premium para escalar tus ventas</title>
        <meta
          name="description"
          content="Auditoría técnica gratuita de 15 minutos. Ecosistemas web ultrarrápidos, optimizados para conversión (CRO) y diseñados para vender."
        />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* HEADER */}
      <header className="w-full border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center">
          <img
            src={LOGO_URL}
            alt="Media Buster"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>
      </header>

      {/* HERO — White */}
      <section id="top" className="relative bg-background overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/hero-desarrollo-web.jpg')" }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/85" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-16 lg:pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Infraestructura digital premium
            </span>

            <h1 className="font-display mt-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              Tu sitio web es un{" "}
              <span className="text-gradient-secondary">adorno caro</span>{" "}
              si no está diseñado para{" "}
              <span className="text-gradient-primary">generar ventas.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              En <strong className="font-semibold text-foreground">Media Buster Marketing</strong> construimos <strong className="font-semibold text-foreground">páginas web ultrarrápidas</strong>, diseñados para transformar cada clic en una oportunidad de venta real. Optimizamos tu sitio para que tenga una <strong className="font-semibold text-foreground">ruta clara de compra</strong> y <strong className="font-semibold text-foreground">comiences a vender</strong>.&nbsp;
            </p>

            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold bg-whatsapp text-whatsapp-foreground shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                Cotiza ahora por WhatsApp
              </a>
            </div>
          </div>

          {/* FORM card */}
          <div className="relative">
            <div className="relative rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Auditoría gratuita
                  </p>
                  <h3 className="font-display mt-2 font-extrabold text-2xl leading-tight text-foreground">
                    Solicita tu diagnóstico
                  </h3>
                </div>
                <span className="hidden sm:inline-flex h-2 w-2 rounded-full bg-secondary shadow-glow-secondary" />
              </div>

              {success ? (
                <div className="rounded-2xl border border-border bg-muted p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 bg-primary text-primary-foreground">
                    <Send className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-foreground">¡Solicitud recibida!</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Un estratega te contactará por WhatsApp en las próximas horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Nombre *
                      </label>
                      <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Tu nombre" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Apellidos *
                      </label>
                      <input id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Tus apellidos" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="company" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Empresa
                      </label>
                      <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Email *
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Teléfono
                      </label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+52 55 0000 0000" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Servicio de interés
                      </label>
                      <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass}>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Mensaje *
                    </label>
                    <textarea id="message" name="message" required rows={3} value={form.message} onChange={handleChange} placeholder="Cuéntanos brevemente sobre tu proyecto..." className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Enviando..." : "Solicitar diagnóstico gratuito"}</span>
                    {!isSubmitting && <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  </button>

                  <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Respuesta en menos de 24 h hábiles
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section aria-label="Diseñamos páginas web que generan ventas" className="bg-muted">
        <img
          src={bannerDisenoWeb}
          alt="Diseñamos páginas web nuevas y optimizamos las existentes para que generen ventas reales."
          className="w-full h-auto block"
          width={1920}
          height={640}
          loading="lazy"
        />
      </section>

      {/* PROBLEM — Midnight Indigo */}
      <section className="bg-sage text-sage-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              El diagnóstico
            </span>
            <h2 className="font-display mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              ¿Por qué tu página actual no está vendiendo?
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Es invisible", copy: "No carga en menos de 3 segundos y Google te penaliza (el 53% de los usuarios abandona sitios lentos)." },
              { icon: MousePointerClick, title: "Es confusa", copy: "Está llena de texto sin una ruta clara hacia la compra." },
              { icon: Copy, title: "Es genérica", copy: "Se ve exactamente igual que la de tus competidores." },
            ].map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                onMouseMove={(e) => {
                  const t = e.currentTarget as HTMLDivElement;
                  const r = t.getBoundingClientRect();
                  t.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  t.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#6D28D9] hover:shadow-lg hover:shadow-[#6D28D9]/30 hover:bg-white/[0.06]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(400px circle at var(--mx) var(--my), rgba(109,40,217,0.25), transparent 40%)" }}
                />
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40">
                  <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.2} />
                </div>
                <h3 className="relative font-display mt-6 font-bold text-xl">{title}</h3>
                <p className="relative mt-3 text-white/70 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — Lavender */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              La solución
            </span>
            <h2 className="font-display mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-foreground">
              Arquitectura digital orientada al{" "}
              <span className="text-gradient-primary">retorno de inversión.</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Gauge, title: "Velocidad Extrema", copy: "Desarrollo con tecnología de punta para carga en milisegundos.", tag: "01 / Performance" },
              { icon: Target, title: "Ruta de compra clara (CRO)", copy: "Cada botón diseñado para que el usuario compre.", tag: "02 / CRO" },
              { icon: ShieldCheck, title: "Seguridad y Escalabilidad", copy: "Alojamiento de grado empresarial. Cero caídas.", tag: "03 / Infra" },
            ].map(({ icon: Icon, title, copy, tag }) => (
              <div
                key={title}
                onMouseMove={(e) => {
                  const t = e.currentTarget as HTMLDivElement;
                  const r = t.getBoundingClientRect();
                  t.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  t.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#6D28D9] hover:shadow-lg hover:shadow-[#6D28D9]/20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(400px circle at var(--mx) var(--my), rgba(109,40,217,0.15), transparent 40%)" }}
                />
                <p className="relative text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{tag}</p>
                <div className="relative mt-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="relative font-display mt-6 font-bold text-xl text-foreground">{title}</h3>
                <p className="relative mt-3 text-muted-foreground leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar mi diagnóstico
              <Send className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PRICING — Pale Lavender */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Paquetes
            </span>
            <h2 className="font-display mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              Elige el plan ideal para tu negocio
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Precios orientativos. El valor final se define después del diagnóstico gratuito.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "Landing de Alta Conversión",
                price: "Desde $12,000 + IVA",
                ideal: "Ideal para campañas de Google Ads o Meta Ads",
                featured: false,
                whatsapp:
                  "https://wa.me/525635406982?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20plan%20*Landing%20de%20Alta%20Conversi%C3%B3n*",
                benefits: [
                  "1 página optimizada para conversión",
                  "Diseño responsive premium",
                  "Formulario conectado a tu CRM o email",
                  "Integración con píxeles de seguimiento",
                  "Copy orientado a CRO",
                  "Entrega en 7 a 10 días hábiles",
                ],
              },
              {
                name: "Sitio Web Completo",
                price: "Desde $18,000 – $22,000 + IVA",
                ideal: "Ideal para la mayoría de negocios",
                featured: true,
                whatsapp:
                  "https://wa.me/525635406982?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20plan%20*Sitio%20Web%20Completo*",
                benefits: [
                  "Hasta 6 secciones o páginas",
                  "Diseño a medida orientado a ventas",
                  "Blog y estructura SEO on-page",
                  "Apoyo en estructura de textos",
                  "Formularios y WhatsApp integrados",
                  "Capacitación para autogestión",
                ],
              },
              {
                name: "Sitio Premium / Escalable",
                price: "Desde $28,000 + IVA",
                ideal: "Para negocios que necesitan más secciones o funcionalidades",
                featured: false,
                whatsapp:
                  "https://wa.me/525635406982?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20plan%20*Sitio%20Premium*",
                benefits: [
                  "Secciones y páginas ilimitadas",
                  "Funcionalidades avanzadas a medida",
                  "Integraciones con plataformas externas",
                  "Optimización avanzada de performance",
                  "Estrategia SEO técnica incluida",
                  "Soporte prioritario post-entrega",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border bg-card p-8 shadow-card transition-all duration-300 ${
                  plan.featured ? "border-primary shadow-glow -translate-y-1" : "border-border"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground">
                    Recomendado
                  </span>
                )}
                <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.ideal}</p>
                <p className="mt-6 font-display font-extrabold text-2xl text-foreground">{plan.price}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mt-8 inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-[hsl(258,90%,66%)] transition-all duration-300"
                >
                  Solicitar este plan
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Los precios son orientativos. El valor final se define después del diagnóstico gratuito según el alcance real de tu proyecto.
          </p>
        </div>
      </section>

      {/* FAQ — White */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Dudas frecuentes
            </span>
            <h2 className="font-display mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {[
              { q: "¿Cuánto cuesta una página web?", a: "El precio depende del alcance del proyecto. Una landing de alta conversión parte desde $12,000 + IVA y un sitio web completo desde $18,000 + IVA. Después del diagnóstico gratuito te damos una cotización exacta y sin sorpresas." },
              { q: "¿Cuánto tiempo tarda el proyecto?", a: "Landing page: 7 a 10 días hábiles. Sitio web completo: 15 a 20 días hábiles. El tiempo puede variar según la rapidez con la que nos entregues la información y el contenido." },
              { q: "¿Qué incluye el diagnóstico gratuito?", a: "Analizamos tu situación actual (si ya tienes página o no), tus objetivos de negocio y te damos recomendaciones claras de qué tipo de sitio necesitas y una cotización precisa. Sin costo ni compromiso." },
              { q: "¿Hacen páginas nuevas y también optimizan las existentes?", a: "Sí. Diseñamos páginas web nuevas desde cero y también optimizamos sitios existentes para que generen más ventas (velocidad, estructura, CRO y claridad de la ruta de compra)." },
              { q: "¿La página se verá bien en celular?", a: "Sí. Todas nuestras páginas son 100% responsive y se optimizan especialmente para dispositivos móviles." },
              { q: "¿Me ayudan con los textos y las fotos?", a: "En los paquetes intermedios y premium incluimos apoyo en la estructura de textos. Las fotografías las proporciona el cliente (o te orientamos sobre qué tipo de imágenes necesitas)." },
              { q: "¿Ofrecen mantenimiento después de entregar la página?", a: "Sí. Ofrecemos planes de mantenimiento mensual opcionales que incluyen actualizaciones, respaldos y soporte técnico. También puedes administrar tu página tú mismo después de la capacitación." },
              { q: "¿Puedo ver ejemplos de trabajos anteriores?", a: "Claro. En el diagnóstico te mostramos casos relevantes según tu industria." },
              { q: "¿Cómo es el proceso de trabajo?", a: "1) Diagnóstico gratuito. 2) Cotización y firma de acuerdo. 3) Brief y recolección de información. 4) Diseño y desarrollo. 5) Revisiones. 6) Entrega y capacitación." },
              { q: "¿Hay forma de pago a plazos?", a: "Sí. Trabajamos con el esquema 50% al inicio y 50% al momento de la entrega." },
            ].map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className="rounded-2xl border border-border bg-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-foreground">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={2.5}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER — Midnight Indigo */}
      <footer className="bg-sage text-sage-foreground border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
            © 2026 Media Buster Marketing. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
              { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { Icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] text-white/70 hover:text-white hover:border-white/40 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-[60] flex items-end gap-2">
        {showWaTooltip && (
          <div className="relative animate-fade-in mb-2 rounded-2xl bg-foreground text-background text-sm font-semibold px-4 py-3 pr-9 shadow-card max-w-[200px]">
            Pide cotización rápida
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setShowWaTooltip(false);
              }}
              aria-label="Cerrar mensaje"
              className="absolute top-1.5 right-1.5 inline-flex items-center justify-center w-6 h-6 rounded-full text-background/70 hover:text-background hover:bg-background/10 transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <span
              aria-hidden
              className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 bg-foreground"
            />
          </div>
        )}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pide cotización rápida por WhatsApp"
          className="relative"
        >
          <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" aria-hidden />
          <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2.2} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default LandingWeb;
