import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, type SEOData } from "@/lib/seoData";

interface SEOProps extends SEOData {
  path?: string;
}

const TWITTER_DOMAIN = "mediabustermarketing.com";

const SEO = ({ title, description, keywords, canonical, ogImage, path = "" }: SEOProps) => {
  const fullUrl = `${SITE_URL}${path}`;
  const defaultOgImage = `${SITE_URL}/og-image.png`;
  const imageUrl = ogImage || defaultOgImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={canonical || fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter Cards — absolute URLs forced to mediabustermarketing.com */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={TWITTER_DOMAIN} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
    </Helmet>
  );
};

export default SEO;
