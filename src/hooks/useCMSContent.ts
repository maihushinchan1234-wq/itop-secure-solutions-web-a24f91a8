import { useState, useEffect } from 'react';
import { fetchContent, queries } from '@/lib/sanity';

// Types for CMS content
export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface ServiceContent {
  _id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  colorClass: string;
}

export interface AboutContent {
  title: string;
  description: string;
  secondaryDescription: string;
  achievements: Array<{
    icon: string;
    number: string;
    label: string;
    description: string;
  }>;
  features: string[];
  commitmentTitle: string;
  commitmentDescription: string;
  secondaryCommitmentDescription: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  description: string;
  phones: string[];
  email: string;
  whatsappNumber: string;
  address: {
    line1: string;
    line2: string;
    city: string;
  };
  serviceHours: {
    weekdays: string;
    weekends: string;
    emergency: string;
  };
  serviceAreas: string[];
}

export interface PageHeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// Custom hook to fetch CMS content with fallback
export function useCMSContent<T>(
  query: string,
  fallbackData: T
): { content: T; isLoading: boolean; error: string | null } {
  const [content, setContent] = useState<T>(fallbackData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadContent() {
      try {
        setIsLoading(true);
        const data = await fetchContent<T>(query);
        
        if (isMounted) {
          if (data) {
            setContent(data);
          }
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load content');
          setIsLoading(false);
        }
      }
    }

    loadContent();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return { content, isLoading, error };
}

// Specific hooks for each content type
export function useHomeHero() {
  const fallback: HeroContent = {
    title: "Trusted Technology & Security Experts",
    subtitle: "Serving You Since 2008",
    description: "Your go-to specialist for reliable hardware and security solutions. For over 17 years, we've proudly supported homes, offices, and institutions across Delhi NCR.",
    stats: [
      { value: "17+", label: "Years Experience" },
      { value: "1000+", label: "Happy Customers" },
      { value: "24/7", label: "Support Available" },
      { value: "100%", label: "Genuine Parts" }
    ]
  };

  return useCMSContent<HeroContent>(queries.homeHero, fallback);
}

export function useAboutContent() {
  const fallback: AboutContent = {
    title: "About iTOP Services",
    description: "Since 2008, iTOP Services has been Delhi NCR's trusted partner for comprehensive technology solutions. What started as a small printer repair service has grown into a full-service technology and security company, serving hundreds of satisfied customers across residential and commercial sectors.",
    secondaryDescription: "We specialize in printer services, CCTV surveillance systems, smart door locks, and fire alarm installations. Our team of certified technicians brings years of experience and expertise to every project, ensuring reliable solutions that keep your technology running smoothly and your property secure.",
    achievements: [
      { icon: "Users", number: "500+", label: "Happy Customers", description: "Homes and businesses served across Delhi NCR" },
      { icon: "Clock", number: "16+", label: "Years Experience", description: "Established in 2008, serving the community" },
      { icon: "Award", number: "50+", label: "Brands Supported", description: "Wide range of technology brands and models" },
      { icon: "CheckCircle", number: "24/7", label: "Support Available", description: "Emergency services and customer support" }
    ],
    features: [
      "Certified and experienced technicians",
      "Same-day service for most repairs",
      "Genuine parts and quality materials",
      "Comprehensive warranty on all services",
      "Transparent pricing with no hidden costs",
      "Free consultation and site surveys"
    ],
    commitmentTitle: "Our Commitment",
    commitmentDescription: "At iTOP Services, we understand that technology is essential to your daily life and business operations. That's why we're committed to providing fast, reliable, and cost-effective solutions that minimize downtime and maximize your peace of mind.",
    secondaryCommitmentDescription: "Whether you need emergency printer repair, want to upgrade to a smart security system, or require regular maintenance for your office equipment, we're here to help with professional service and genuine care for our customers' satisfaction."
  };

  return useCMSContent<AboutContent>(queries.about, fallback);
}

export function useContactContent() {
  const fallback: ContactContent = {
    title: "Contact iTOP Services",
    subtitle: "🚀 Get Expert Help Now",
    description: "Ready to transform your tech experience? Our certified experts are standing by to provide immediate assistance, professional consultations, and comprehensive solutions tailored to your needs.",
    phones: ["+91 9849655559", "+91 9990820830"],
    email: "sachidanand@live.in",
    whatsappNumber: "919849655559",
    address: {
      line1: "224, B1, DDA Flats",
      line2: "Loknayak Puram",
      city: "New Delhi 110041"
    },
    serviceHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "10:00 AM - 6:00 PM",
      emergency: "Available on Call"
    },
    serviceAreas: [
      'Central Delhi', 'South Delhi', 'North Delhi', 'East Delhi',
      'West Delhi', 'Gurgaon', 'Noida', 'Faridabad',
      'Ghaziabad', 'Greater Noida', 'Dwarka', 'Rohini'
    ]
  };

  return useCMSContent<ContactContent>(queries.contact, fallback);
}

export function usePageHero(pageType: string) {
  const fallbacks: Record<string, PageHeroContent> = {
    cctv: {
      title: "CCTV Camera Installation & Surveillance Systems",
      subtitle: "From Indoor Monitoring to Smart AI-Powered Security – Keep an Eye with Confidence",
      description: "Professional CCTV installation and surveillance solutions for homes, businesses, and institutions. From basic monitoring to advanced AI-powered security systems.",
      primaryButtonText: "Explore Camera Types",
      secondaryButtonText: "Smart Features"
    },
    printers: {
      title: "Comprehensive Printer Solutions",
      subtitle: "Sales, Service, Repairs & Support — Everything You Need for Seamless Printing",
      description: "From home inkjet printers to commercial laser systems, we provide complete printer solutions including installation, repair, maintenance, and supplies for all major brands.",
      primaryButtonText: "Get Free Quote",
      secondaryButtonText: "Explore Services"
    },
    doorlocks: {
      title: "Smart & Secure Door Lock Solutions",
      subtitle: "From Traditional Locks to Smart Access Systems – Install, Repair & Upgrade with Confidence",
      description: "Expert door lock installation, repair, and upgrade services for homes and businesses. From mechanical locks to smart biometric systems, we ensure your security.",
      primaryButtonText: "Get Free Quote",
      secondaryButtonText: "Explore Lock Types"
    },
    firealarms: {
      title: "Fire Alarm & Detection Systems",
      subtitle: "From Smoke Detectors to Integrated Alarm Systems – Detect Early, Respond Fast, Stay Safe",
      description: "Professional fire alarm system installation and maintenance for homes, offices, and industrial facilities. Advanced detection systems with 24/7 monitoring and emergency response capabilities.",
      primaryButtonText: "Schedule Fire Safety Audit",
      secondaryButtonText: "Explore Alarm Types"
    }
  };

  return useCMSContent<PageHeroContent>(
    queries.pageHero(pageType),
    fallbacks[pageType] || fallbacks.printers
  );
}
