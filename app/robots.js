export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://saidigitalservices.in/sitemap.xml',
    host: 'https://saidigitalservices.in',
  };
}
