import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Mic,
  Film,
  PenLine,
  Video,
  TrendingDown,
  Repeat,
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18";
const WHATSAPP_URL = "https://wa.me/message/P2BQDIMVFCDCG1";
const LOGO_URL = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/MediaBuster-logo.png";

const SERVICES = [
  "Contenido Multimedia",
  "Content & Social Media",
  "Paid Media & Growth",
  "SEO",
  "Diseño Web & CRO",
];

const ProduccionPodcastRedes = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(true);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "Contenido Multimedia",
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
          origen: "landing_produccion_podcast_redes",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setSuccess(true);
      setForm({ name: "", lastName: "", company: "", email: "", phone: "", service: "Contenido Multimedia", message: "" });
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
        <title>Media Buster · Producción de contenido para redes y podcast</title>
        <meta
          name="description"
          content="Producción audiovisual premium: podcast, reels y contenido educativo grabado en set 4K o remoto. Diseñado para proyectar autoridad y vender."
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

      {/* HERO — Lavender */}
      <section id="top" className="relative bg-muted overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/hero-content.png')" }}
        />
        <div aria-hidden className="absolute inset-0 bg-muted/75" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-16 lg:pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              Producción audiovisual premium
            </span>

            <h1 className="font-display mt-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              Tu marca no necesita más ruido. Necesita proyectar{" "}
              <span className="text-gradient-primary">autoridad.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Dejamos los bailes y las métricas de vanidad. Producimos contenido para{" "}
              <strong className="font-semibold text-foreground">redes y podcasts</strong>{" "}
              (en <strong className="font-semibold text-foreground">set 4K o remoto</strong>) diseñado para{" "}
              <strong className="font-semibold text-foreground">educar a tu audiencia y vender</strong>.
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
                    Asesoría de contenido
                  </p>
                  <h3 className="font-display mt-2 font-extrabold text-2xl leading-tight text-foreground">
                    Solicita tu asesoría gratuita
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
                    Un productor te contactará por WhatsApp en las próximas horas hábiles.
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
                    <textarea id="message" name="message" required rows={3} value={form.message} onChange={handleChange} placeholder="Cuéntanos qué quieres lograr con tu contenido..." className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Enviando..." : "Solicitar asesoría de contenido"}</span>
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

      {/* PROBLEM — White */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              El diagnóstico
            </span>
            <h2 className="font-display mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              ¿Por qué tu contenido actual no te trae clientes?
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Video, title: "Fatiga de creación", copy: "Pierdes horas intentando grabar videos que no reflejan la calidad real de tus servicios." },
              { icon: TrendingDown, title: "Seguidores sin ventas", copy: "Tienes 'likes', pero nadie envía mensajes preguntando por tus servicios de alto valor." },
              { icon: Repeat, title: "Falta de consistencia", copy: "Publicas al azar sin un embudo estratégico que convierta a los curiosos en compradores." },
            ].map(({ icon: Icon, title, copy }) => (
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
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="relative font-display mt-6 font-bold text-xl text-foreground">{title}</h3>
                <p className="relative mt-3 text-muted-foreground leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — Lavender */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              La solución
            </span>
            <h2 className="font-display mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-foreground">
              Activos que trabajan como tu{" "}
              <span className="text-gradient-primary">mejor vendedor 24/7.</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: PenLine, title: "Estrategia y Guionaje", copy: "Diseñamos temarios y narrativas alineadas directamente a tus objetivos comerciales.", tag: "01 / Estrategia" },
              { icon: Mic, title: "Producción de Podcast y Reels", copy: "Set de grabación físico in-house y dirección remota profesional para formatos largos y cortos.", tag: "02 / Producción" },
              { icon: Film, title: "Edición Cinematográfica", copy: "Cortes dinámicos y diseño sonoro premium que elevan la percepción de tu marca.", tag: "03 / Post" },
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
              Solicitar mi asesoría
              <Send className="ml-2 w-4 h-4" />
            </a>
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
            Hablar con un productor
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
          aria-label="Hablar con un productor por WhatsApp"
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

export default ProduccionPodcastRedes;
