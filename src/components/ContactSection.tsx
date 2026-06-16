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
    <section id="contacto" className="py-16 lg:py-24 relative overflow-hidden bg-[#1A2433]">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary font-bold text-xs uppercase tracking-widest mb-4 border border-primary/20">
              Contacto
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
              ¿Listo para crecer<span className="text-white">?</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Cuéntanos sobre tu proyecto. Sin compromiso, con claridad. Queremos entenderte antes de proponerte nada.
            </p>
          </div>


          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Nombre + Apellidos */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
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
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
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
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-12"
                    />
                  </div>
                </div>

                {/* Row 2: Empresa + Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white/90">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
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
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-12"
                    />
                  </div>
                </div>

                {/* Row 3: Teléfono + Servicio */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
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
                      className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Servicio de interés</label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary h-12">
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
                <div className="space-y-2">
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
                    rows={5}
                    className="bg-white border-white/10 text-foreground placeholder:text-foreground/40 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
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

            {/* Side copy */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary font-bold text-xs uppercase tracking-widest mb-4 border border-primary/20">
                  Cotización a medida
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Cuéntanos tu proyecto y te enviamos una cotización personalizada.
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Déjanos tus datos y uno de nuestros estrategas te contactará para entender tus objetivos y armar una propuesta hecha a la medida de tu marca.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
