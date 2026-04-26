import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const BASE_URL = 'https://saidigitalservices.in';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sai Digital Services | Website Development & SEO Services in Andhra Pradesh & Telangana',
    template: '%s | Sai Digital Services',
  },
  description:
    'Professional website development, SEO optimization and digital marketing services in Andhra Pradesh, Telangana and Hyderabad. Serving Vijayawada, Visakhapatnam, Rajahmundry and West Godavari.',
  keywords: [
    'Website Development Andhra Pradesh',
    'Website Designer Hyderabad',
    'SEO Services Telangana',
    'Digital Marketing Andhra Pradesh',
    'Web Development Hyderabad',
    'Social Media Marketing',
    'Website Development Vijayawada',
    'SEO Visakhapatnam',
    'Digital Marketing Rajahmundry',
    'Web Designer West Godavari',
    'Website Development Bhimavaram',
    'SEO Andhra Pradesh',
  ],
  authors: [{ name: 'Sai Digital Services', url: BASE_URL }],
  creator: 'Sai Digital Services',
  publisher: 'Sai Digital Services',
  alternates: {
    canonical: BASE_URL,
  },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    title: 'Sai Digital Services | Website Development & SEO in Andhra Pradesh',
    description:
      'Professional website development, SEO optimization and digital marketing services in Andhra Pradesh, Telangana and Hyderabad.',
    siteName: 'Sai Digital Services',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Sai Digital Services - Website Development & SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Digital Services | Website Development & SEO in Andhra Pradesh',
    description:
      'Professional website development, SEO optimization and digital marketing services in Andhra Pradesh, Telangana and Hyderabad.',
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/dgfkn6klm/image/upload/q_auto/f_auto/v1777093468/SDS-logo_1_xdwiuw.png', type: 'image/png' },
    ],
    apple: [
      { url: 'https://res.cloudinary.com/dgfkn6klm/image/upload/q_auto/f_auto/v1777093468/SDS-logo_1_xdwiuw.png' },
    ],
    shortcut: 'https://res.cloudinary.com/dgfkn6klm/image/upload/q_auto/f_auto/v1777093468/SDS-logo_1_xdwiuw.png',
  },
  verification: {
    google: '',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'Sai Digital Services',
  image: `${BASE_URL}/logo.png`,
  url: BASE_URL,
  telephone: '+916304484048',
  email: 'contact@saidigitalservices.in',
  description:
    'Professional website development, SEO optimization and digital marketing services in Andhra Pradesh and Telangana.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mogalthuru',
    addressLocality: 'West Godavari',
    addressRegion: 'Andhra Pradesh',
    postalCode: '534281',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 16.4167,
    longitude: 81.6,
  },
  areaServed: [
    { '@type': 'State', name: 'Andhra Pradesh' },
    { '@type': 'State', name: 'Telangana' },
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Vijayawada' },
    { '@type': 'City', name: 'Visakhapatnam' },
    { '@type': 'City', name: 'Rajahmundry' },
    { '@type': 'City', name: 'Bhimavaram' },
  ],
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <link rel="canonical" href={BASE_URL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
