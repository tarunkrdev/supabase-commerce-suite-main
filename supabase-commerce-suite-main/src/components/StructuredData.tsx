// src/components/StructuredData.tsx
// ===== STRUCTURED DATA COMPONENTS - JSON-LD SCHEMA.ORG MARKUP =====
// Provides rich snippets for search engines (Products, Breadcrumbs, Articles, Organization)

import { Helmet } from 'react-helmet-async';

// ============================================
// PRODUCT SCHEMA
// ============================================
interface ProductStructuredDataProps {
  product: {
    name: string;
    description?: string;
    image: string;
    sku?: string;
    price: number;
    currency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    brand?: string;
    url?: string;
  };
}

export const ProductStructuredData = ({ product }: ProductStructuredDataProps) => {
  const {
    name,
    description = '',
    image,
    sku = '',
    price,
    currency = 'INR',
    availability = 'InStock',
    brand = 'oops!Pleasured',
    url = typeof window !== 'undefined' ? window.location.href : '',
  } = product;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    sku,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

// ============================================
// BREADCRUMB LIST SCHEMA
// ============================================
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbStructuredData = ({ items }: BreadcrumbStructuredDataProps) => {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

// ============================================
// ARTICLE SCHEMA (for Blog Posts)
// ============================================
interface ArticleStructuredDataProps {
  article: {
    headline: string;
    description?: string;
    image: string;
    datePublished: string; // ISO 8601 format
    dateModified?: string;
    authorName?: string;
    publisherName?: string;
    publisherLogo?: string;
    url?: string;
  };
}

export const ArticleStructuredData = ({ article }: ArticleStructuredDataProps) => {
  const {
    headline,
    description = '',
    image,
    datePublished,
    dateModified,
    authorName = 'oops!Pleasured Team',
    publisherName = 'oops!Pleasured',
    publisherLogo = '/logo.png',
    url = typeof window !== 'undefined' ? window.location.href : '',
  } = article;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

// ============================================
// ORGANIZATION SCHEMA (Global Brand Info)
// ============================================
interface OrganizationStructuredDataProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[]; // Social media URLs
}

export const OrganizationStructuredData = ({
  name = 'oops!Pleasured',
  url = typeof window !== 'undefined' ? window.location.origin : '',
  logo = '/logo.png',
  sameAs = [],
}: OrganizationStructuredDataProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

// ============================================
// FAQ SCHEMA (for FAQ sections)
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

export const FAQStructuredData = ({ faqs }: FAQStructuredDataProps) => {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};