import { createClient } from '@sanity/client';

// Sanity client configuration
// Replace these with your actual Sanity project credentials
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster reads
});

// GROQ queries for different content types
export const queries = {
  // Home page content
  homeHero: `*[_type == "homeHero"][0]{
    title,
    subtitle,
    description,
    stats[]{
      value,
      label
    }
  }`,
  
  // Home page services section
  homeServices: `*[_type == "homeServices"][0]{
    sectionTitle,
    sectionDescription,
    services[]{
      title,
      description,
      path,
      colorClass
    }
  }`,
  
  // About section
  about: `*[_type == "about"][0]{
    title,
    description,
    secondaryDescription,
    achievements[]{
      icon,
      number,
      label,
      description
    },
    whyChooseTitle,
    features[],
    commitmentTitle,
    commitmentDescription,
    secondaryCommitmentDescription
  }`,
  
  // Contact section
  contact: `*[_type == "contact"][0]{
    title,
    subtitle,
    description,
    phones[],
    email,
    whatsappNumber,
    address{
      line1,
      line2,
      city
    },
    serviceHours{
      weekdays,
      weekends,
      emergency
    },
    serviceAreas[],
    ctaTitle,
    ctaDescription
  }`,
  
  // Footer content
  footer: `*[_type == "footer"][0]{
    companyName,
    tagline,
    description,
    quickLinks[]{
      label,
      sectionId
    },
    serviceLinks[]{
      label,
      path
    },
    contactInfo{
      phone,
      email,
      address
    },
    copyright,
    socialLinks{
      facebook,
      instagram,
      whatsapp
    }
  }`,
  
  // Blogs section
  blogs: `*[_type == "blog"] | order(date desc){
    _id,
    id,
    title,
    excerpt,
    author,
    date,
    category
  }`,
  
  blogsSection: `*[_type == "blogsSection"][0]{
    sectionTitle,
    sectionDescription,
    viewAllButtonText
  }`,
  
  // Page heroes (for service pages)
  pageHero: (pageType: string) => `*[_type == "pageHero" && page == "${pageType}"][0]{
    title,
    subtitle,
    description,
    primaryButtonText,
    secondaryButtonText
  }`,
  
  // Service page services section
  pageServices: (pageType: string) => `*[_type == "pageServices" && page == "${pageType}"][0]{
    sectionTitle,
    sectionDescription,
    services[]{
      icon,
      title,
      description,
      features[]
    },
    repairSection{
      title,
      description,
      items[]{
        icon,
        title,
        description
      }
    }
  }`,
  
  // Service page types section
  pageTypes: (pageType: string) => `*[_type == "pageTypes" && page == "${pageType}"][0]{
    sectionTitle,
    sectionDescription,
    types[]{
      title,
      description,
      image,
      features[],
      bestFor
    }
  }`,
  
  // Service page brands section
  pageBrands: (pageType: string) => `*[_type == "pageBrands" && page == "${pageType}"][0]{
    sectionTitle,
    sectionDescription,
    brands[]{
      name,
      logo,
      description,
      specialties[]
    },
    ctaTitle,
    ctaDescription,
    ctaButtonText
  }`,
  
  // Service page industries section
  pageIndustries: (pageType: string) => `*[_type == "pageIndustries" && page == "${pageType}"][0]{
    sectionTitle,
    sectionDescription,
    industries[]{
      icon,
      title,
      description,
      solutions[],
      image
    }
  }`,
  
  // Service page FAQs section
  pageFAQs: (pageType: string) => `*[_type == "pageFAQs" && page == "${pageType}"][0]{
    sectionTitle,
    sectionDescription,
    categories[]{
      categoryTitle,
      faqs[]{
        question,
        answer
      }
    },
    ctaTitle,
    ctaDescription,
    ctaButtons[]{
      text,
      action,
      variant
    }
  }`,
  
  // Smart features section (CCTV specific)
  smartFeatures: `*[_type == "smartFeatures"][0]{
    sectionTitle,
    sectionDescription,
    features[]{
      icon,
      title,
      description
    }
  }`,
  
  // CTA section (Monitor Property for CCTV, etc.)
  pageCTA: (pageType: string) => `*[_type == "pageCTA" && page == "${pageType}"][0]{
    title,
    description,
    primaryButton{
      text,
      link
    },
    secondaryButton{
      text,
      link
    }
  }`,
};

// Fetch content from Sanity
export async function fetchContent<T>(query: string): Promise<T | null> {
  try {
    const data = await sanityClient.fetch<T>(query);
    return data;
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return null;
  }
}
