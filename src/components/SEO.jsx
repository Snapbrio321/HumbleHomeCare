import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://humblehealthcareservice.com';
const DEFAULT_IMG = `${BASE_URL}/logo.png`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMG,
}) {
  const fullTitle = title
    ? `${title} | Humble Health Care Services`
    : 'Humble Health Care Services | Home Nursing, Elderly Care & Medical Equipment – Visakhapatnam';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`${BASE_URL}${canonical || '/'}`} />

      {/* OG */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${BASE_URL}${canonical || '/'}`} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
