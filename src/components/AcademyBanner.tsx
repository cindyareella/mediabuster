import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, PlayCircle, BookOpen, TrendingUp } from "lucide-react";

const AcademyBanner = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span className="text-[#6D28D9] font-bold text-xs uppercase tracking-widest mb-4 block">
              Formación
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E1B4B] mb-5 leading-tight">
              Aprende el método detrás de los resultados.
            </h2>
            <p className="text-base md:text-lg text-[#1E1B4B]/75 leading-relaxed mb-8">
              ¿Prefieres operar tu propio marketing o capacitar a tu equipo? En
              Media Buster Academy te enseñamos a diseñar estrategias de pauta,
              SEO y contenido con el mismo rigor técnico que aplicamos con
              nuestros clientes.
            </p>
            <Link
              to="/academia"
              className="inline-flex items-center gap-2 bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold px-8 py-3 rounded-lg shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              Conocer los programas de la Academy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: visual */}
          <div className="bg-[#F9F8FF] rounded-2xl shadow-sm p-8 lg:p-10 border border-[#6D28D9]/5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#6D28D9] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-[#1E1B4B] text-sm">
                    Media Buster Academy
                  </p>
                  <p className="text-xs text-[#1E1B4B]/60">Plataforma de cursos</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full">
                Nuevo
              </span>
            </div>

            <div className="space-y-3">
              {[
                { icon: PlayCircle, title: "Paid Media desde cero", meta: "12 módulos · 4h" },
                { icon: BookOpen, title: "SEO técnico aplicado", meta: "8 módulos · 3h" },
                { icon: TrendingUp, title: "Estrategia de contenido", meta: "10 módulos · 5h" },
              ].map(({ icon: Icon, title, meta }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-[#1E1B4B]/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#1E1B4B] truncate">
                      {title}
                    </p>
                    <p className="text-xs text-[#1E1B4B]/55">{meta}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6D28D9] shrink-0" />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#1E1B4B]/10 flex items-center justify-between">
              <div>
                <p className="text-2xl font-display font-extrabold text-[#1E1B4B]">
                  +1,200
                </p>
                <p className="text-xs text-[#1E1B4B]/60">Estudiantes activos</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-display font-extrabold text-[#F59E0B]">
                  4.9★
                </p>
                <p className="text-xs text-[#1E1B4B]/60">Calificación promedio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyBanner;
