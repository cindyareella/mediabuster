import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import ServiceHero from "@/components/ServiceHero";
import RelatedServices from "@/components/RelatedServices";
import ServiceCTA from "@/components/ServiceCTA";
import { SITE_URL, type SEOData } from "@/lib/seoData";
import type { LucideIcon } from "lucide-react";

interface ServicePageLayoutProps {
  seo: SEOData;
  path: string;
  slug: string;
  hero: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
  };
  breadcrumbName: string;
  children: React.ReactNode;
}

const ServicePageLayout = ({
  seo,
  path,
  slug,
  hero,
  breadcrumbName,
  children,
}: ServicePageLayoutProps) => {
  const breadcrumbs = [
    { name: "Inicio", url: SITE_URL },
    { name: breadcrumbName, url: `${SITE_URL}${path}` },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO {...seo} path={path} />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <ServiceHero {...hero} />
        {children}
        <RelatedServices currentSlug={slug} />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
