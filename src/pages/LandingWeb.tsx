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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18";
const WHATSAPP_URL = "https://wa.me/message/P2BQDIMVFCDCG1";
const LOGO_URL = "https://cdn.jsdelivr.net/gh/cindyareella/mediabuster@main/MediaBuster-logo.png";

const LandingWeb = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(true);
  const [form, setForm] = useState({ nombre: "", whatsapp: "", url: "", reto: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          nombre: form.nombre,
          telefono: form.whatsapp,
          url_actual: form.url,
          mensaje: form.reto,
          servicio_interes: "Auditoría Web",
          origen: "Landing Web CRO",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setSuccess(true);
      setForm({ nombre: "", whatsapp: "", url: "", reto: "" });
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
            src={logoAsset.url}
            alt="Media Buster"
            className="h-20 md:h-24 w-auto object-contain"
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
              En Media Buster Marketing construimos páginas web ultrarrápidas, diseñados para transformar cada clic en una oportunidad de venta real. Optimizamos tu sitio para que tenga una ruta clara de compra y comiences a vender.&nbsp;
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-10 bg-border" />
              {"\n"}
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
                  <div>
                    <label htmlFor="nombre" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Nombre completo
                    </label>
                    <input id="nombre" name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                      WhatsApp
                    </label>
                    <input id="whatsapp" name="whatsapp" type="tel" required value={form.whatsapp} onChange={handleChange} placeholder="+52 55 0000 0000" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="url" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                      URL actual <span className="normal-case text-muted-foreground/60">(opcional)</span>
                    </label>
                    <input id="url" name="url" value={form.url} onChange={handleChange} placeholder="https://tuempresa.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="reto" className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                      ¿QUÉ NECESITAS RESOLVER CON TU PÁGINA WEB?
                    </label>
                    <textarea id="reto" name="reto" required rows={3} value={form.reto} onChange={handleChange} placeholder="Cuéntanos qué necesitas resolver..." className={`${inputClass} resize-none`} />
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
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40">
                  <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-6 font-bold text-xl">{title}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{copy}</p>
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
                className="rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{tag}</p>
                <div className="mt-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-display mt-6 font-bold text-xl text-foreground">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{copy}</p>
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
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Habla con un estratega"
        className="group fixed bottom-6 right-6 z-[60]"
      >
        <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" aria-hidden />
        <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.2} />
        </span>
        <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-semibold px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-card">
          Habla con un estratega
        </span>
      </a>
    </div>
  );
};

export default LandingWeb;
