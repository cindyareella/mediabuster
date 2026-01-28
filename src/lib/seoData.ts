export const SITE_URL = "https://mediabuster.com";
export const SITE_NAME = "Media Buster";

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export const seoData: Record<string, SEOData> = {
  home: {
    title: "Agencia de Marketing Digital Estratégico | Media Buster",
    description: "Agencia de marketing digital en México enfocada en estrategia, performance y crecimiento medible. Marketing basado en datos para empresas que quieren escalar.",
    keywords: ["agencia de marketing digital", "agencia digital estratégica", "agencia de marketing digital en México", "marketing basado en datos"],
  },
  paidMedia: {
    title: "Agencia de Pauta Digital y Performance Marketing | Media Buster",
    description: "Campañas de Google Ads y Meta Ads orientadas a resultados. Agencia de paid media con estrategia antes de inversión y optimización basada en datos.",
    keywords: ["agencia de pauta digital", "agencia de paid media", "campañas de Google Ads", "campañas de Meta Ads", "performance marketing"],
  },
  seo: {
    title: "Agencia SEO para Empresas | Posicionamiento Web | Media Buster",
    description: "Servicios de SEO técnico y de contenido para empresas que buscan crecer de forma orgánica. Posicionamiento web con método y estrategia en México.",
    keywords: ["agencia SEO", "servicios de SEO", "posicionamiento web", "SEO para empresas", "SEO en México"],
  },
  branding: {
    title: "Agencia de Branding y Estrategia de Marca | Media Buster",
    description: "Desarrollo de identidad de marca, naming y estrategia de posicionamiento. Construimos marcas sólidas con dirección clara para empresas en crecimiento.",
    keywords: ["agencia de branding", "estrategia de marca", "identidad de marca", "desarrollo de marca", "naming y branding"],
  },
  contenido: {
    title: "Agencia de Contenido Digital y Social Media | Media Buster",
    description: "Estrategia de contenidos y community management profesional. Contenido para redes sociales que conecta, posiciona y convierte.",
    keywords: ["agencia de contenido digital", "estrategia de contenidos", "contenido para redes sociales", "community management profesional"],
  },
  nosotros: {
    title: "Sobre Media Buster | Agencia de Marketing Estratégico",
    description: "Estrategia, contenido y performance trabajando juntos. Conoce cómo trabajamos con las marcas y nuestra visión de marketing digital estratégico.",
    keywords: ["agencia de marketing estratégico", "estrategia digital para empresas"],
  },
  contacto: {
    title: "Contacto | Hablemos de tu Estrategia Digital | Media Buster",
    description: "Cuéntanos sobre tu marca y tus objetivos. Diagnóstico inicial sin compromiso para entender tu negocio antes de cualquier propuesta.",
    keywords: ["contacto agencia marketing", "estrategia digital"],
  },
};

export const services = [
  {
    slug: "paid-media",
    name: "Paid Media & Growth",
    shortName: "Paid Media",
    description: "Campañas de performance en Meta, Google y TikTok orientadas a resultados.",
  },
  {
    slug: "seo",
    name: "SEO",
    shortName: "SEO",
    description: "Posicionamiento orgánico que genera tráfico cualificado.",
  },
  {
    slug: "branding",
    name: "Branding",
    shortName: "Branding",
    description: "Construcción de marcas memorables con dirección estratégica.",
  },
  {
    slug: "contenido",
    name: "Contenido & Social Media",
    shortName: "Contenido",
    description: "Estrategia de contenido y gestión de redes sociales.",
  },
];
