import dynamic from 'next/dynamic';
import HeroBanner from '@/components/HeroBanner';
import About from '@/components/About';
import Services from '@/components/Services';

// Lazy load below-fold sections
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Contact = dynamic(() => import('@/components/Contact'));

export const metadata = {
  title: 'Sai Digital Services | Website Development & SEO Services in Andhra Pradesh & Telangana',
  description:
    'Professional website development, SEO optimization and digital marketing services in Andhra Pradesh, Telangana and Hyderabad. 3+ years experience. Call +91 6304484048.',
  alternates: { canonical: 'https://saidigitalservices.in' },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sai Digital Services - Service List',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Website Development',
        description: 'Responsive business websites, portfolio sites, landing pages, ecommerce',
        provider: { '@type': 'LocalBusiness', name: 'Sai Digital Services' },
        areaServed: 'Andhra Pradesh',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'SEO Optimization',
        description: 'On-page SEO, speed optimization, rankings, local SEO',
        provider: { '@type': 'LocalBusiness', name: 'Sai Digital Services' },
        areaServed: 'Andhra Pradesh',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Social Media Management',
        description: 'Instagram and Facebook growth content strategy',
        provider: { '@type': 'LocalBusiness', name: 'Sai Digital Services' },
        areaServed: 'Andhra Pradesh',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Digital Marketing',
        description: 'Lead generation campaigns and conversions',
        provider: { '@type': 'LocalBusiness', name: 'Sai Digital Services' },
        areaServed: 'Andhra Pradesh',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Branding Strategy',
        description: 'Ideas to grow your brand online',
        provider: { '@type': 'LocalBusiness', name: 'Sai Digital Services' },
        areaServed: 'Andhra Pradesh',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'Website Maintenance',
        description: 'Updates, fixes, support',
        provider: { '@type': 'LocalBusiness', name: 'Sai Digital Services' },
        areaServed: 'Andhra Pradesh',
      },
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a professional website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic business website starts from ₹15,000. E-commerce and custom solutions are priced based on features and requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide SEO services in Andhra Pradesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide complete SEO services including on-page optimization, technical SEO, local SEO and ongoing ranking improvements across Andhra Pradesh and Telangana.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical timeline for website development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard business website typically takes 1-2 weeks. E-commerce sites and complex projects may take 3-4 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve businesses across Andhra Pradesh and Telangana including Hyderabad, Vijayawada, Visakhapatnam, Rajahmundry, Bhimavaram and West Godavari.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroBanner />
      <About />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </>
  );
}
