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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18";
const WHATSAPP_URL = "https://wa.me/message/P2BQDIMVFCDCG1";
const LOGO_URL = "https://cdn.jsdelivr.net/gh/mediabustermarketing/assets@main/logo-media-buster-white.png";

// Palette
const BG = "#0F1219";
const YELLOW = "#E5FF00";
const VIOLET = "#8B5CF6";
const VIOLET_DEEP = "#6D28D9";

const LandingWeb = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
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
          origen: "Landing Web CRO — Dark",
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
    "w-full rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/25 transition";

  return (
    <div
      className="min-h-screen font-sans antialiased text-white relative overflow-x-hidden"
      style={{ backgroundColor: BG, fontFamily: "Inter, Poppins, ui-sans-serif, system-ui, sans-serif" }}
    >
      <Helmet>
        <title>Media Buster · Diagnóstico web premium para escalar tus ventas</title>
        <meta
          name="description"
          content="Auditoría técnica gratuita de 15 minutos. Ecosistemas web ultrarrápidos, optimizados para conversión (CRO) y diseñados para vender."
        />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(139,92,246,0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(229,255,0,0.08), transparent 40%), radial-gradient(circle at 50% 90%, rgba(139,92,246,0.12), transparent 55%)",
        }}
      />

      <div className="relative z-10">
        {/* HEADER */}
        <header className="w-full border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center">
            <img
              src={LOGO_URL}
              alt="Media Buster"
              className="h-8 w-auto"
              onError={(e) => {
                // Fallback wordmark if the image fails
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const sib = (e.currentTarget.nextElementSibling as HTMLElement) || null;
                if (sib) sib.style.display = "inline-block";
              }}
            />
            <span
              className="hidden font-extrabold tracking-tight text-lg"
              style={{ display: "none" }}
            >
              Media <span style={{ color: YELLOW }}>Buster</span>
            </span>
          </div>
        </header>

        {/* HERO */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em]"
                style={{ color: YELLOW }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: YELLOW, boxShadow: `0 0 12px ${YELLOW}` }}
                />
                Infraestructura digital premium
              </span>

              <h1 className="mt-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
                Tu sitio web es un{" "}
                <span style={{ color: YELLOW }}>adorno caro</span>{" "}
                si no está diseñado para{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${VIOLET}, #C084FC)` }}
                >
                  generar ventas.
                </span>
              </h1>

              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
                Construimos ecosistemas web ultrarrápidos, optimizados para conversión (CRO) y
                diseñados para posicionar tu negocio como líder en su industria.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/40">
                <span className="h-px w-10 bg-white/20" />
                15 min · Sin costo · Cupos limitados
              </div>
            </div>

            {/* FORM (glass card) */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-px rounded-3xl opacity-60 blur-xl"
                style={{ background: `linear-gradient(135deg, ${VIOLET}, transparent 60%)` }}
              />
              <div
                className="relative rounded-3xl border p-6 sm:p-8 backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(139,92,246,0.35)",
                  boxShadow: "0 40px 100px -30px rgba(139,92,246,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: YELLOW }}>
                      — Auditoría gratuita
                    </p>
                    <h3 className="mt-2 font-extrabold text-2xl leading-tight">
                      Solicita tu diagnóstico
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: YELLOW, boxShadow: `0 0 12px ${YELLOW}` }} />
                </div>

                {success ? (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                      style={{ backgroundColor: YELLOW, color: "#0F1219" }}
                    >
                      <Send className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-xl">¡Solicitud recibida!</h4>
                    <p className="mt-2 text-sm text-white/60">
                      Un estratega te contactará por WhatsApp en las próximas horas hábiles.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label htmlFor="nombre" className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        WhatsApp
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="+52 55 0000 0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="url" className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        URL actual <span className="text-white/30 normal-case">(opcional)</span>
                      </label>
                      <input
                        id="url"
                        name="url"
                        value={form.url}
                        onChange={handleChange}
                        placeholder="https://tuempresa.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="reto" className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        ¿Cuál es tu principal reto digital hoy?
                      </label>
                      <textarea
                        id="reto"
                        name="reto"
                        required
                        rows={3}
                        value={form.reto}
                        onChange={handleChange}
                        placeholder="Cuéntanos qué necesitas resolver..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 disabled:opacity-70"
                      style={{
                        backgroundColor: YELLOW,
                        color: "#0F1219",
                        boxShadow: `0 20px 50px -15px ${YELLOW}80`,
                      }}
                    >
                      <span className="relative">
                        {isSubmitting ? "Enviando..." : "Solicitar diagnóstico gratuito"}
                      </span>
                      {!isSubmitting && <Send className="relative ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
                    </button>

                    <p className="text-center text-[10px] font-mono uppercase tracking-widest text-white/35">
                      Respuesta en menos de 24 h hábiles
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: VIOLET }}>
                — El diagnóstico
              </span>
              <h2 className="mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
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
                  className="group relative rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border"
                    style={{
                      borderColor: `${VIOLET}55`,
                      background: `linear-gradient(135deg, ${VIOLET}25, transparent)`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: VIOLET }} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 font-bold text-xl">{title}</h3>
                  <p className="mt-3 text-white/60 leading-relaxed">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: YELLOW }}>
                — La solución
              </span>
              <h2 className="mt-4 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
                Arquitectura digital orientada al{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${VIOLET}, #C084FC)` }}
                >
                  retorno de inversión.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                { icon: Gauge, title: "Velocidad Extrema", copy: "Desarrollo con tecnología de punta para carga en milisegundos.", tag: "01 / Performance" },
                { icon: Target, title: "Optimización CRO", copy: "Cada botón diseñado para que el usuario compre.", tag: "02 / CRO" },
                { icon: ShieldCheck, title: "Seguridad y Escalabilidad", copy: "Alojamiento de grado empresarial. Cero caídas.", tag: "03 / Infra" },
              ].map(({ icon: Icon, title, copy, tag }) => (
                <div
                  key={title}
                  className="relative rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{tag}</p>
                  <div
                    className="mt-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl border"
                    style={{
                      borderColor: `${YELLOW}55`,
                      background: `linear-gradient(135deg, ${YELLOW}20, transparent)`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: YELLOW }} strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 font-bold text-xl">{title}</h3>
                  <p className="mt-3 text-white/60 leading-relaxed">{copy}</p>
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: YELLOW,
                  color: "#0F1219",
                  boxShadow: `0 20px 50px -15px ${YELLOW}80`,
                }}
              >
                Solicitar mi diagnóstico
                <Send className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
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
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/30 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Habla con un estratega"
        className="group fixed bottom-6 right-6 z-[60]"
      >
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: "#25D36640" }}
          aria-hidden
        />
        <span
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white transition-transform duration-300 hover:scale-110"
          style={{
            backgroundColor: "#25D366",
            boxShadow: "0 15px 40px -10px rgba(37,211,102,0.6)",
          }}
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.2} />
        </span>
        <span
          className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full text-xs font-semibold px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: YELLOW, color: "#0F1219" }}
        >
          Habla con un estratega
        </span>
      </a>
    </div>
  );
};

export default LandingWeb;
