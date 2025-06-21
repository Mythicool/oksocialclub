const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Doing OK Social Club",
    "description": "Oklahoma's premier social dining experience featuring local vendors, live events, and community gatherings.",
    "url": "https://doingoksocial.com",
    "telephone": "+1-405-555-3646465",
    "email": "hello@doingoksocial.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Oklahoma City",
      "addressRegion": "OK",
      "postalCode": "73102",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.4676",
      "longitude": "-97.5164"
    },
    "openingHours": [
      "Fr 17:00-23:00",
      "Sa 12:00-23:00",
      "Su 12:00-20:00"
    ],
    "servesCuisine": [
      "American",
      "BBQ",
      "Tex-Mex",
      "Southern"
    ],
    "priceRange": "$$",
    "acceptsReservations": true,
    "hasMenu": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.facebook.com/doingoksocial",
      "https://www.instagram.com/doingoksocial",
      "https://twitter.com/doingoksocial"
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Doing OK Social Club",
    "url": "https://doingoksocial.com",
    "logo": "https://doingoksocial.com/logo.png",
    "description": "Oklahoma's premier social dining experience",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Oklahoma Entrepreneurs"
      }
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Oklahoma City",
        "addressRegion": "OK",
        "postalCode": "73102",
        "addressCountry": "US"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-405-555-3646465",
      "contactType": "customer service",
      "email": "hello@doingoksocial.com"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  )
}

export default StructuredData
