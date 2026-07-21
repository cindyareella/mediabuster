import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Zap, Target, ShieldCheck, Gauge, MousePointerClick, Copy, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18";

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

  return (
    <div className="min-h-screen bg-[#F6F4F0] text-[#22252A] font-sans antialiased">
      <Helmet>
        <title>Media Buster · Diagnóstico web premium para escalar tus ventas</title>
        <meta name="description" content="Auditoría técnica gratuita de 15 minutos. Ecosistemas web ultrarrápidos, optimizados para conversión (CRO) y diseñados para vender." />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* Header minimal */}
      <header className="w-full border-b border-[#22252A]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center">
          <span className="font-display text-lg tracking-tight font-bold">
            Media<span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent"> Buster</span>
          </span>
          <span className="ml-3 hidden sm:inline text-[10px] font-mono uppercase tracking-[0.2em] text-[#22252A]/50">
            /diagnóstico
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft gradient blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#7C3AED]/25 via-[#EC4899]/20 to-transparent blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#D18E28]/20 to-transparent blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D18E28]/30 bg-[#D18E28]/10 text-[#A75535] font-mono text-[10px] uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D18E28] animate-pulse" />
              Infraestructura digital premium
            </span>

            <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              Tu sitio web es un{" "}
              <span className="italic font-serif text-[#A75535]">adorno caro</span>{" "}
              si no está diseñado para{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
                generar ventas.
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#22252A]/75 leading-relaxed max-w-xl">
              Olvídate de las plantillas lentas. Construimos ecosistemas web ultrarrápidos,
              optimizados para conversión (CRO) y diseñados para posicionar tu negocio como
              líder en su industria.
            </p>

            <div className="mt-8">
              <a
                href="#diagnostico"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-[#F6F4F0] bg-[#22252A] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(124,58,237,0.6)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Solicitar diagnóstico de mi web actual</span>
                <Send className="relative ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-xs font-mono uppercase tracking-widest text-[#22252A]/50">
                15 min · Sin costo · Cupos limitados
              </p>
            </div>
          </div>

          {/* Glass panel visual */}
          <div className="relative">
            <div className="relative rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(34,37,42,0.35)] p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A75535]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D18E28]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#22252A]/50">
                  analytics.live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#22252A]/50">Conv. Rate</p>
                  <p className="mt-1 font-display font-black text-3xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
                    8.4%
                  </p>
                  <p className="text-xs text-[#22252A]/60">+312% vs baseline</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#22252A]/50">LCP</p>
                  <p className="mt-1 font-display font-black text-3xl text-[#22252A]">0.9s</p>
                  <p className="text-xs text-[#A75535]">Ultra rápido</p>
                </div>
              </div>

              {/* Chart mock */}
              <div className="mt-5 rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-5">
                <div className="flex items-end gap-2 h-32">
                  {[35, 55, 42, 70, 58, 82, 65, 92, 78, 100, 88, 96].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-[#7C3AED] to-[#EC4899]"
                      style={{ height: `${h}%`, opacity: 0.6 + i * 0.03 }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-widest text-[#22252A]/50">
                  <span>Ene</span><span>Abr</span><span>Jul</span><span>Oct</span><span>Dic</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/70 bg-[#22252A] text-[#F6F4F0] p-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#F6F4F0]/50">ROAS</p>
                  <p className="font-display font-black text-2xl">4.8x</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#F6F4F0]/50">CAC</p>
                  <p className="font-display font-black text-2xl text-[#D18E28]">-42%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM AGITATION */}
      <section className="bg-[#22252A] text-[#F6F4F0] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-[#EC4899]">
              — El diagnóstico
            </span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              ¿Por qué tu página actual no está vendiendo?
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Es invisible",
                copy: "No carga en menos de 3 segundos y Google te penaliza (el 53% de los usuarios abandona sitios lentos).",
                glow: "from-[#7C3AED] to-[#EC4899]",
              },
              {
                icon: MousePointerClick,
                title: "Es confusa",
                copy: "Está llena de texto aburrido sin una ruta clara hacia la compra.",
                glow: "from-[#EC4899] to-[#D18E28]",
              },
              {
                icon: Copy,
                title: "Es genérica",
                copy: "Se ve exactamente igual que la de tus competidores.",
                glow: "from-[#A75535] to-[#7C3AED]",
              },
            ].map(({ icon: Icon, title, copy, glow }) => (
              <div
                key={title}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`} />
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${glow} shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 font-display font-bold text-xl">{title}</h3>
                <p className="mt-3 text-[#F6F4F0]/70 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A75535]">
              — La solución
            </span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Arquitectura digital orientada al{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
                retorno de inversión.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Gauge,
                title: "Velocidad Extrema",
                copy: "Desarrollamos con tecnología de punta para que tu sitio cargue en milisegundos.",
                accent: "#A75535",
                tag: "01 / Performance",
              },
              {
                icon: Target,
                title: "Optimización de Conversión (CRO)",
                copy: "Cada botón y texto están colocados estratégicamente para que el usuario compre.",
                accent: "#D18E28",
                tag: "02 / CRO",
              },
              {
                icon: ShieldCheck,
                title: "Seguridad y Escalabilidad",
                copy: "Alojamiento de grado empresarial. Cero caídas.",
                accent: "#7C3AED",
                tag: "03 / Infra",
              },
            ].map(({ icon: Icon, title, copy, accent, tag }) => (
              <div
                key={title}
                className="relative rounded-3xl border border-[#22252A]/10 bg-white/60 backdrop-blur-md p-8 hover:shadow-[0_25px_60px_-25px_rgba(34,37,42,0.35)] transition-all duration-300"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#22252A]/45">
                  {tag}
                </p>
                <div
                  className="mt-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl border"
                  style={{
                    borderColor: `${accent}33`,
                    background: `linear-gradient(135deg, ${accent}15, ${accent}05)`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: accent }} strokeWidth={2} />
                </div>
                <h3 className="mt-6 font-display font-bold text-xl">{title}</h3>
                <p className="mt-3 text-[#22252A]/70 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM / CLOSE */}
      <section id="diagnostico" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.12),transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <div className="rounded-[2rem] border border-white/60 bg-white/50 backdrop-blur-2xl p-8 sm:p-12 lg:p-14 shadow-[0_40px_100px_-40px_rgba(34,37,42,0.4)]">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7C3AED]">
                — Auditoría gratuita
              </span>
              <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                Deja de perder clientes por culpa de una{" "}
                <span className="italic font-serif text-[#A75535]">mala web.</span>
              </h2>
              <p className="mt-5 text-[#22252A]/75 leading-relaxed">
                Agenda una auditoría técnica gratuita de 15 minutos con nuestros estrategas.
              </p>
            </div>

            {success ? (
              <div className="mt-10 rounded-2xl border border-[#7C3AED]/30 bg-gradient-to-br from-[#7C3AED]/10 to-[#EC4899]/10 p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white mb-4">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">¡Solicitud recibida!</h3>
                <p className="mt-2 text-[#22252A]/70">
                  Uno de nuestros estrategas te contactará por WhatsApp en las próximas horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-mono uppercase tracking-widest text-[#22252A]/60 mb-2">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full rounded-xl border border-[#22252A]/15 bg-white/80 backdrop-blur px-4 py-3.5 text-[#22252A] placeholder:text-[#22252A]/35 focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/20 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-mono uppercase tracking-widest text-[#22252A]/60 mb-2">
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
                      className="w-full rounded-xl border border-[#22252A]/15 bg-white/80 backdrop-blur px-4 py-3.5 text-[#22252A] placeholder:text-[#22252A]/35 focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="url" className="block text-xs font-mono uppercase tracking-widest text-[#22252A]/60 mb-2">
                    URL actual <span className="text-[#22252A]/35 normal-case">(opcional)</span>
                  </label>
                  <input
                    id="url"
                    name="url"
                    value={form.url}
                    onChange={handleChange}
                    placeholder="https://tuempresa.com"
                    className="w-full rounded-xl border border-[#22252A]/15 bg-white/80 backdrop-blur px-4 py-3.5 text-[#22252A] placeholder:text-[#22252A]/35 focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/20 transition"
                  />
                </div>

                <div>
                  <label htmlFor="reto" className="block text-xs font-mono uppercase tracking-widest text-[#22252A]/60 mb-2">
                    ¿Cuál es tu principal reto digital hoy?
                  </label>
                  <textarea
                    id="reto"
                    name="reto"
                    required
                    rows={4}
                    value={form.reto}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas resolver..."
                    className="w-full rounded-xl border border-[#22252A]/15 bg-white/80 backdrop-blur px-4 py-3.5 text-[#22252A] placeholder:text-[#22252A]/35 focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/20 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-[#F6F4F0] bg-[#22252A] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(124,58,237,0.6)] disabled:opacity-70"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">
                    {isSubmitting ? "Enviando..." : "Enviar solicitud y agendar"}
                  </span>
                  {!isSubmitting && <Send className="relative ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
                </button>

                <p className="text-center text-[11px] font-mono uppercase tracking-widest text-[#22252A]/45">
                  Respuesta en menos de 24 h hábiles
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#22252A]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#22252A]/50">
            © {new Date().getFullYear()} Media Buster
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#22252A]/50">
            v1.0 · CRO edition
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LandingWeb;
