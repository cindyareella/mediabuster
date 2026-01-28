import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seoData";

interface SchemaOrgProps {
  type: "Organization" | "LocalBusiness" | "Service" | "WebPage" | "BreadcrumbList";
  data?: Record<string, unknown>;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Agencia de marketing digital en México enfocada en estrategia, performance y crecimiento medible.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hola@mediabuster.com",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
};

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Paid Media & Growth",
    description: "Campañas de Google Ads y Meta Ads orientadas a resultados con estrategia antes de inversión.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    areaServed: "MX",
    url: `${SITE_URL}/paid-media`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO",
    description: "Servicios de SEO técnico y de contenido para empresas que buscan crecer de forma orgánica.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    areaServed: "MX",
    url: `${SITE_URL}/seo`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Branding",
    description: "Desarrollo de identidad de marca, naming y estrategia de posicionamiento.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    areaServed: "MX",
    url: `${SITE_URL}/branding`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Contenido & Social Media",
    description: "Estrategia de contenidos y community management profesional.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    areaServed: "MX",
    url: `${SITE_URL}/contenido`,
  },
];

export const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  let schema: Record<string, unknown>;

  switch (type) {
    case "Organization":
      schema = { ...organizationSchema, ...data };
      break;
    case "LocalBusiness":
      schema = { ...localBusinessSchema, ...data };
      break;
    case "Service":
      schema = data || servicesSchema[0];
      break;
    default:
      schema = data || {};
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const AllServicesSchema = () => (
  <Helmet>
    {servicesSchema.map((service, index) => (
      <script key={index} type="application/ld+json">
        {JSON.stringify(service)}
      </script>
    ))}
  </Helmet>
);

export const BreadcrumbSchema = ({ items }: { items: { name: string; url: string }[] }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

export default SchemaOrg;
