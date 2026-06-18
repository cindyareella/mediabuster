import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ProblemSection from "@/components/ProblemSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ServicesSection from "@/components/ServicesSection";
import MidCTASection from "@/components/MidCTASection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProcessSection from "@/components/ProcessSection";
import AcademyBanner from "@/components/AcademyBanner";
import ContactSection from "@/components/ContactSection";
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
        <ClientsSection />
        <ProblemSection />
        <DifferentiatorSection />
        <ServicesSection />
        <MidCTASection />
        <ProcessSection />
        <AcademyBanner />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
