import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { seoData } from "@/lib/seoData";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, ArrowRight, Send, MapPin } from "lucide-react";

const SERVICES = [
  "Paid Media & Growth",
  "Contenido Multimedia",
  "Content & Social Media",
  "SEO",
];

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          apellidos: formData.lastName,
          email: formData.email,
          empresa: formData.company,
          telefono: formData.phone,
          servicio: formData.service,
          mensaje: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Error al enviar");

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({ name: "", lastName: "", email: "", company: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Inténtalo nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola, me interesa conocer más sobre Media Buster y sus servicios."
    );
    window.open(`https://wa.me/525635406982?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO {...seoData.contacto} path="/contacto" />
      <SchemaOrg type="LocalBusiness" />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Contacto
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hablemos de tu estrategia digital
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Cuéntanos sobre tu marca y tus objetivos. Diagnóstico inicial sin compromiso 
                para entender tu negocio antes de cualquier propuesta.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-background" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Cuéntanos sobre tu marca y tus objetivos
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Queremos entenderte antes de proponerte nada. Sin compromiso, con claridad.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Fila 1: Nombre + Apellidos */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Nombre *
                        </label>
                        <Input id="name" name="name" type="text" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required className="bg-card border-border focus:border-primary h-12" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Apellidos *
                        </label>
                        <Input id="lastName" name="lastName" type="text" placeholder="Tus apellidos" value={formData.lastName} onChange={handleChange} required className="bg-card border-border focus:border-primary h-12" />
                      </div>
                    </div>

                    {/* Fila 2: Empresa + Email */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">
                          Empresa
                        </label>
                        <Input id="company" name="company" type="text" placeholder="Nombre de tu empresa" value={formData.company} onChange={handleChange} className="bg-card border-border focus:border-primary h-12" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input id="email" name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleChange} required className="bg-card border-border focus:border-primary h-12" />
                      </div>
                    </div>

                    {/* Fila 3: Teléfono + Servicio */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Teléfono
                        </label>
                        <Input id="phone" name="phone" type="tel" placeholder="Tu número de teléfono" value={formData.phone} onChange={handleChange} className="bg-card border-border focus:border-primary h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Servicio de interés
                        </label>
                        <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                          <SelectTrigger className="bg-card border-border focus:border-primary h-12">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICES.map((service) => (
                              <SelectItem key={service} value={service}>{service}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Fila 4: Mensaje */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Mensaje *
                      </label>
                      <Textarea id="message" name="message" placeholder="Cuéntanos brevemente sobre tu proyecto y qué resultados buscas..." value={formData.message} onChange={handleChange} required rows={5} className="bg-card border-border focus:border-primary resize-none" />
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
                          Enviar mensaje
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8">
                  {/* WhatsApp CTA */}
                  <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                      <MessageCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      ¿Prefieres WhatsApp?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Escríbenos directamente y respondemos en menos de 24 horas.
                    </p>
                    <Button
                      variant="whatsapp"
                      size="lg"
                      className="w-full group"
                      onClick={handleWhatsApp}
                    >
                      Abrir WhatsApp
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Email */}
                  <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      Email directo
                    </h3>
                    <a
                      href="mailto:hola@mediabuster.com"
                      className="text-primary hover:underline"
                    >
                      hola@mediabuster.com
                    </a>
                  </div>

                  {/* Location */}
                  <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      Ubicación
                    </h3>
                    <p className="text-muted-foreground">
                      Ciudad de México, México
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Trabajamos con marcas de todo el país
                    </p>
                  </div>

                  {/* Trust message */}
                  <div className="p-6 rounded-xl border border-border/50 bg-muted/20">
                    <p className="text-sm text-muted-foreground italic">
                      "No te vamos a bombardear con emails ni llamadas. Respetamos 
                      tu tiempo como respetamos el nuestro."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
