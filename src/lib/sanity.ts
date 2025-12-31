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
  
  // Services section
  services: `*[_type == "service"] | order(order asc){
    _id,
    title,
    description,
    icon,
    path,
    colorClass
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
    serviceAreas[]
  }`,
  
  // Page heroes (for service pages)
  pageHero: (pageType: string) => `*[_type == "pageHero" && page == "${pageType}"][0]{
    title,
    subtitle,
    description,
    primaryButtonText,
    secondaryButtonText
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
