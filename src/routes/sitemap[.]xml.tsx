import { Helmet } from "react-helmet-async";

/**
 * Sitemap is not server-rendered in SPA mode.
 * This component simply adds a link to the sitemap in the head.
 * In production, you can generate a static sitemap.xml separately.
 */
export default function SitemapPage() {
  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
}
