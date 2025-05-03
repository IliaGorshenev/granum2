import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Купить гранит и мрамор от производителя Гранум в Челябинске | Выгодные цены',
  description = "Производство и продажа изделий из гранита и мрамора в Челябинске, Еманжелинске и во всех других регионах России от 'Гранум'. Заказать изделия из камня по выгодным ценам. Столешницы, ступени, подоконники, бордюры, балясины, толстомеры. Выгодные цены, доставка. Каталог и контакты.",
  keywords = 'натуральный камень Челябинск, гранит, мрамор, купить камень, изделия из камня, производство изделий из камня, Гранум Челябинск, столешницы из камня, подоконники из камня, ступени из камня, облицовка камнем, бордюры гранитные, балясины из камня, толстомеры гранитные, камень от производителя, продажа камня, доставка камня, контакты Гранум, слэб, гранитные полосы, тактильные плиты',
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
