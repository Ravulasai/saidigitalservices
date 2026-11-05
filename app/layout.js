import { Manrope, Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import MobileBottomNav from '@/components/MobileBottomNav';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: false,
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: false,
});

const BASE_URL = 'https://saidigitalservices.in';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sai Digital Services | Website Development & Digital Marketing in Mogaltur, West Godavari',
    template: '%s | Sai Digital Services',
  },
  description:
    'Professional website development, SEO optimization and digital marketing services in Mogaltur, West Godavari, Andhra Pradesh. Serving businesses across AP & Telangana. Call +91 6304484048.',
  keywords: [
    'Website Development Mogaltur',
    'Web Design Mogaltur West Godavari',
    'SEO Services Mogaltur',
    'Digital Marketing Mogaltur',
    'Website Development West Godavari',
    'SEO West Godavari Andhra Pradesh',
    'Web Developer Bhimavaram',
    'Digital Marketing Andhra Pradesh',
    'Website Development Andhra Pradesh',
    'SEO Services Telangana',
    'Web Design Hyderabad',
    'Digital Marketing Vijayawada',
    'Website Development Rajahmundry',
    'Social Media Marketing West Godavari',
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
    title: 'Sai Digital Services | Website Development & Digital Marketing in Mogaltur, West Godavari',
    description:
      'Professional website development, SEO optimization and digital marketing services in Mogaltur, West Godavari, Andhra Pradesh. Call +91 6304484048.',
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
    title: 'Sai Digital Services | Website Development & Digital Marketing in Mogaltur',
    description:
      'Professional website development, SEO and digital marketing in Mogaltur, West Godavari, Andhra Pradesh.',
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
  email: 'sairavula1919@gmail.com',
  description:
    'Professional website development, SEO optimization and digital marketing services based in Mogaltur, West Godavari, Andhra Pradesh. Serving businesses across Andhra Pradesh and Telangana.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mogaltur',
    addressLocality: 'Mogaltur',
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
    { '@type': 'City', name: 'Mogaltur' },
    { '@type': 'AdministrativeArea', name: 'West Godavari' },
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
      className={`${inter.variable} ${manrope.variable} ${jakarta.variable}`}
    >
      <head>
        <link rel="canonical" href={BASE_URL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <meta name="theme-color" content="#F5EFE0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgress />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileBottomNav />
        </ThemeProvider>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HJVSD7LB1F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HJVSD7LB1F');
          `}
        </Script>
      </body>
    </html>
  );
}
