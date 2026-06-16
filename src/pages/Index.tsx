import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import ServiceCTA from "@/components/ServiceCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SchemaOrg, AllServicesSchema } from "@/components/SchemaOrg";
import { seoData } from "@/lib/seoData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO {...seoData.home} path="/" />
      <SchemaOrg type="Organization" />
      <AllServicesSchema />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ServiceCTA
          title="¿Tu marketing está estancado?"
          description="Detectemos juntos qué está frenando tu crecimiento. Auditoría sin compromiso, con plan de acción claro."
        />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
