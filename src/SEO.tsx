// 'use client';

// import Head from 'next/head';
// import { usePathname } from 'next/navigation';

// interface SEOProps {
//   title?: string;
//   description?: string;
//   canonical?: string;
//   ogImage?: string;
// }

// export default function SEO({
//   title = 'Гранум - Изделия из натурального камня',
//   description = 'Премиальные решения с камнем - создайте пространство, которое восхищает',
//   canonical,
//   ogImage = '/og-image.jpg',
// }: SEOProps) {
//   const pathname = usePathname();
//   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://granum-stone.ru';
//   const canonicalUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${pathname}`;

//   return (
//     <Head>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <link rel="canonical" href={canonicalUrl} />

//       {/* Open Graph */}
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={canonicalUrl} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={`${siteUrl}${ogImage}`} />

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
//     </Head>
//   );
// }
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Гранум - Изделия из натурального камня в Челябинске | Собственное производство',
  description = 'Премиальные решения из натурального камня. Собственное производство изделий из гранита, мрамора и других натуральных камней. Качество, которое восхищает.',
  keywords = 'натуральный камень Челябинск, гранит, мрамор, изделия из камня, столешницы, подоконники, ступени, облицовка, производство изделий из камня',
  ogImage = 'https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg',
  canonicalUrl,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }

    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywords;
      document.head.appendChild(newMetaKeywords);
    }

    // Add Open Graph tags
    const siteUrl = canonicalUrl || window.location.origin;
    const siteImage = ogImage;

    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: siteUrl },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: siteImage },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: siteUrl },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: siteImage },
    ];

    ogTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', tag.property);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });

    // Add canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', siteUrl);
    } else {
      const newCanonicalLink = document.createElement('link');
      newCanonicalLink.rel = 'canonical';
      newCanonicalLink.href = siteUrl;
      document.head.appendChild(newCanonicalLink);
    }

    // Add JSON-LD structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Гранум',
      url: siteUrl,
      logo: siteImage,
      description: description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Челябинск',
        addressRegion: 'Челябинская область',
        addressCountry: 'Россия',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+7 912 790 26 95',
        email: 'Alulianov@yandex.ru',
        contactType: 'customer service',
      },
      priceRange: '₽₽₽',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '54.7518', // Coordinates for Emanjelinsk
        longitude: '61.3215', // Coordinates for Emanjelinsk
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    });

    document.head.appendChild(jsonLdScript);
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
};

export default SEO;
