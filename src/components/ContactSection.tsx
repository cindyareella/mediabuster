import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Mail, ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SERVICES = ["Paid Media & Growth", "Contenido Multimedia", "Content & Social Media", "SEO"];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://hook.us2.make.com/w2zuepbacr7s43nrk9lejoldy2s5zp18", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          nombre: formData.name,
          apellido: formData.lastName,
          empresa: formData.company,
          email: formData.email,
          telefono: formData.phone,
          servicio_de_interes: formData.service,
          mensaje: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Error en el envío");

      toast({ title: "Mensaje enviado", description: "Te responderemos pronto." });
      setFormData({ name: "", lastName: "", company: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast({ title: "Error al enviar", description: "Inténtalo nuevamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre Media Buster y sus servicios.");
    window.open(`https://wa.me/5215635406982?text=${message}`, "_blank");
  };

  return (
    <section id="contacto" className="py-12 lg:py-16 relative overflow-hidden bg-[#2B2B2B]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />


      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            {/* Side copy (left, no box) */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary font-bold text-xs uppercase tracking-widest mb-4 border border-primary/20">
                Contacto
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FDFBF7] mb-4 leading-tight">
                ¿Listo para un marketing que sí funcione<span className="text-primary">?</span>
              </h2>
              <p className="text-base text-[#FDFBF7]/75 leading-relaxed mb-4">
                Déjanos tus datos. Analizaremos tu situación actual y te propondremos un camino claro
                hacia tus objetivos de venta.
              </p>
              <p className="text-sm text-[#FDFBF7]/60 leading-relaxed">
                Sin compromiso, con claridad. Uno de nuestros estrategas te contactará directamente.
              </p>
            </div>

            {/* Contact Form (right) */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Nombre + Apellidos */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-white/90">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-sm font-medium text-white/90">
                      Apellidos *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Tus apellidos"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-10"
                    />
                  </div>
                </div>

                {/* Row 2: Empresa + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-white/90">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-white/90">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-10"
                    />
                  </div>
                </div>

                {/* Row 3: Teléfono + Servicio */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-white/90">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Tu teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/90">Servicio de interés</label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-10">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 4: Mensaje */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-white/90">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos brevemente sobre tu proyecto y qué resultados buscas..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Agendar consultoría
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

