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
    <section id="contacto" className="py-28 lg:py-40 relative overflow-hidden bg-[#1A2433]">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary font-bold text-xs uppercase tracking-widest mb-5 border border-primary/20">
              Contacto
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para crecer<span className="text-primary">?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto. Sin compromiso, con claridad. Queremos entenderte antes de proponerte nada.
            </p>
          </div>


          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Nombre + Apellidos */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Apellidos *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Tus apellidos"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary h-12"
                    />
                  </div>
                </div>

                {/* Row 2: Empresa + Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
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
                      className="bg-card border-border focus:border-primary h-12"
                    />
                  </div>
                </div>

                {/* Row 3: Teléfono + Servicio */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Tu teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Servicio de interés</label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger className="bg-card border-border focus:border-primary h-12">
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
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
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
                    className="bg-card border-border focus:border-primary resize-none"
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

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border/60 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">¿Prefieres WhatsApp?</h3>
                <p className="text-muted-foreground mb-6">
                  Escríbenos directamente y respondemos en menos de 24 horas.
                </p>
                <Button variant="whatsapp" size="lg" className="w-full group" onClick={handleWhatsApp}>
                  Hablar por WhatsApp ahora
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border/60 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Email directo</h3>
                <a href="mailto:hola@mediabuster.com" className="text-primary hover:underline">
                  hola@mediabuster.com
                </a>
              </div>

              <div className="p-6 rounded-xl border border-border/50 bg-background/70 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground italic">
                  "No te vamos a bombardear con emails ni llamadas. Respetamos tu tiempo como respetamos el nuestro."
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
