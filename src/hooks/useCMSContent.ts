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

export interface ServiceItem {
  title: string;
  description: string;
  path: string;
  colorClass: string;
}

export interface HomeServicesContent {
  sectionTitle: string;
  sectionDescription: string;
  services: ServiceItem[];
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
  whyChooseTitle: string;
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
  ctaTitle: string;
  ctaDescription: string;
}

export interface FooterContent {
  companyName: string;
  tagline: string;
  description: string;
  quickLinks: Array<{ label: string; sectionId: string }>;
  serviceLinks: Array<{ label: string; path: string }>;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  copyright: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface BlogItem {
  _id: string;
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

export interface BlogsSectionContent {
  sectionTitle: string;
  sectionDescription: string;
  viewAllButtonText: string;
}

export interface PageHeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface PageServiceItem {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

export interface PageServicesContent {
  sectionTitle: string;
  sectionDescription: string;
  services: PageServiceItem[];
  repairSection?: {
    title: string;
    description: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

export interface PageTypeItem {
  title: string;
  description: string;
  image: string;
  features?: string[];
  bestFor?: string;
}

export interface PageTypesContent {
  sectionTitle: string;
  sectionDescription: string;
  types: PageTypeItem[];
}

export interface PageBrandItem {
  name: string;
  logo: string;
  description: string;
  specialties?: string[];
}

export interface PageBrandsContent {
  sectionTitle: string;
  sectionDescription: string;
  brands: PageBrandItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

export interface PageIndustryItem {
  icon: string;
  title: string;
  description: string;
  solutions?: string[];
  image?: string;
}

export interface PageIndustriesContent {
  sectionTitle: string;
  sectionDescription: string;
  industries: PageIndustryItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  categoryTitle: string;
  faqs: FAQItem[];
}

export interface PageFAQsContent {
  sectionTitle: string;
  sectionDescription: string;
  categories?: FAQCategory[];
  faqs?: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtons: Array<{
    text: string;
    action: string;
    variant: string;
  }>;
}

export interface SmartFeaturesContent {
  sectionTitle: string;
  sectionDescription: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface PageCTAContent {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
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

// ============ HOME PAGE HOOKS ============

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

export function useHomeServices() {
  const fallback: HomeServicesContent = {
    sectionTitle: "Our Services",
    sectionDescription: "Comprehensive technology and security solutions for homes, offices, and institutions",
    services: [
      {
        title: "Printers",
        description: "Repairs, toner refills, leasing, sales, Canon/HP/Epson support, on-site technicians.",
        path: "/printers",
        colorClass: "bg-gray-100 text-gray-800"
      },
      {
        title: "CCTV Systems",
        description: "Indoor/outdoor cameras, IP systems, cloud storage, demo videos, maintenance plans.",
        path: "/cctv",
        colorClass: "bg-blue-100 text-blue-800"
      },
      {
        title: "Door Locks",
        description: "Smart locks, biometric/keycard access, mobile app integration, full installation.",
        path: "/door-locks",
        colorClass: "bg-green-100 text-green-800"
      },
      {
        title: "Fire Alarms",
        description: "Smoke/heat/CO sensors, regulatory compliance, emergency support, AMCs.",
        path: "/fire-alarms",
        colorClass: "bg-red-100 text-red-800"
      }
    ]
  };

  return useCMSContent<HomeServicesContent>(queries.homeServices, fallback);
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
    whyChooseTitle: "Why Choose iTOP Services?",
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
    ],
    ctaTitle: "Ready to Get Started?",
    ctaDescription: "Don't let tech problems slow you down. Contact our expert team today for fast, reliable solutions that get your devices working perfectly."
  };

  return useCMSContent<ContactContent>(queries.contact, fallback);
}

export function useFooterContent() {
  const fallback: FooterContent = {
    companyName: "iTOP Services",
    tagline: "Tech Solutions",
    description: "Your trusted partner for technology and security solutions since 2008.",
    quickLinks: [
      { label: "About", sectionId: "about" },
      { label: "Services", sectionId: "services" },
      { label: "Contact", sectionId: "contact" },
      { label: "Blogs", sectionId: "blogs" }
    ],
    serviceLinks: [
      { label: "Printers", path: "/printers" },
      { label: "CCTV Systems", path: "/cctv" },
      { label: "Door Locks", path: "/door-locks" },
      { label: "Fire Alarms", path: "/fire-alarms" }
    ],
    contactInfo: {
      phone: "+91 9990820830",
      email: "sachidanand@live.in",
      address: "224, B1, DDA Flats, Loknayak Puram, New Delhi 110041"
    },
    copyright: "© 2024 iTOP Services. All rights reserved. | Serving Delhi NCR since 2008",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      whatsapp: "https://wa.me/919990820830"
    }
  };

  return useCMSContent<FooterContent>(queries.footer, fallback);
}

export function useBlogsSection() {
  const fallback: BlogsSectionContent = {
    sectionTitle: "Latest Blogs & FAQs",
    sectionDescription: "Stay updated with the latest trends and insights in technology and security",
    viewAllButtonText: "View Testimonials & Feedback"
  };

  return useCMSContent<BlogsSectionContent>(queries.blogsSection, fallback);
}

export function useBlogs() {
  const fallback: BlogItem[] = [
    {
      _id: '1',
      id: '1',
      title: 'The Future of Home Security with Smart Door Locks',
      excerpt: 'Discover how smart door locks work, their key benefits like remote access and activity logs, and the best brands available in India including Qubo, Yale, and Godrej.',
      author: 'Alice Johnson',
      date: '2024-01-20',
      category: 'Door Locks'
    },
    {
      _id: '2',
      id: '2',
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      excerpt: 'A comprehensive guide to choosing the right CCTV system for your business, featuring top brands like CP Plus, Hikvision, and Dahua with placement tips.',
      author: 'Bob Williams',
      date: '2024-02-15',
      category: 'CCTV'
    },
    {
      _id: '3',
      id: '3',
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      excerpt: 'Learn about different types of fire alarm systems, recommended brands like Honeywell and Ceasefire, and the best locations for installation.',
      author: 'Charlie Brown',
      date: '2024-03-10',
      category: 'Fire Alarms'
    },
    {
      _id: '4',
      id: '4',
      title: 'Laser vs Inkjet Printers: Which One Suits Your Needs?',
      excerpt: 'Compare inkjet and laser printers to make the right choice based on your usage, budget, and printing needs for home or business use.',
      author: 'Tech Expert',
      date: '2024-03-15',
      category: 'Printers'
    }
  ];

  return useCMSContent<BlogItem[]>(queries.blogs, fallback);
}

// ============ SERVICE PAGE HOOKS ============

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

export function usePageServices(pageType: string) {
  const fallbacks: Record<string, PageServicesContent> = {
    cctv: {
      sectionTitle: "We Provide the Best CCTV Services",
      sectionDescription: "Complete surveillance solutions for residential and commercial properties",
      services: [
        { icon: "Camera", title: "CCTV Camera Installation", description: "Professional installation of dome, bullet, PTZ, IP, and face recognition cameras. Covers placement, cabling, and integration with control systems. Our technicians ensure optimal camera positioning for maximum coverage and minimal blind spots." },
        { icon: "Settings", title: "System Upgrade & Expansion", description: "Upgrade from analog to HD or IP-based systems. Includes expanding coverage, integrating facial recognition, and modernizing storage solutions. Transform your old surveillance system into a smart, connected security network." },
        { icon: "Wrench", title: "Camera Repair & Maintenance", description: "Lens cleaning, connectivity troubleshooting, DVR issues, recording failure diagnosis. Includes scheduled maintenance and system health checks to ensure continuous surveillance and optimal performance of your security system." },
        { icon: "HardDrive", title: "DVR/NVR Setup", description: "Configuration of DVR/NVRs for storage, recording schedules, motion detection triggers, and remote access. Complete setup includes network configuration, mobile app integration, and user training for easy system management." },
        { icon: "Shield", title: "Security System Integration", description: "Integration with access control systems, alarm systems, and building management platforms. Comprehensive security ecosystem setup for maximum protection and centralized monitoring capabilities." },
        { icon: "AlertTriangle", title: "Emergency Response Setup", description: "24/7 monitoring solutions with instant alerts and emergency response protocols. Integration with security services and automated notification systems for immediate incident response." }
      ],
      repairSection: {
        title: "CCTV Repair Services",
        description: "Expert repair solutions for all CCTV system issues",
        items: [
          { icon: "Camera", title: "Camera Repair", description: "Lens replacement, image quality issues, and housing repairs" },
          { icon: "HardDrive", title: "DVR/NVR Repair", description: "Storage issues, recording problems, and system crashes" },
          { icon: "Settings", title: "Network Issues", description: "Connectivity problems, IP conflicts, and remote access issues" },
          { icon: "AlertTriangle", title: "Emergency Repairs", description: "24/7 urgent repair services for critical security systems" }
        ]
      }
    },
    printers: {
      sectionTitle: "Complete Printer Services",
      sectionDescription: "From installation to maintenance, we provide comprehensive printer solutions for homes and businesses",
      services: [
        { icon: "Wrench", title: "Printer Repairs", description: "Complete diagnosis and repair services for all printer issues including paper jams, quality problems, and hardware failures. Our certified technicians handle everything from simple fixes to complex component replacements.", features: ["Paper jam resolution", "Print quality issues", "Hardware component replacement", "Diagnostic services"] },
        { icon: "Settings", title: "Installation & Setup", description: "Professional printer installation and network setup services. We handle everything from unboxing to driver installation, network configuration, and user training.", features: ["Network printer setup", "Driver installation", "WiFi configuration", "User training"] },
        { icon: "Package", title: "Toner & Ink Supply", description: "Reliable supply of original and compatible toner cartridges and ink refills for all major printer brands. We offer competitive pricing and bulk discounts for businesses.", features: ["Original cartridges", "Compatible alternatives", "Bulk discounts", "Regular supply contracts"] },
        { icon: "Truck", title: "Printer Leasing", description: "Flexible printer leasing options for businesses and events. Choose from our range of high-quality printers with maintenance included in the rental package.", features: ["Monthly rental plans", "Event-based rentals", "Maintenance included", "Flexible terms"] },
        { icon: "Shield", title: "AMC Plans", description: "Comprehensive Annual Maintenance Contracts to keep your printers running smoothly. Regular maintenance, priority support, and genuine parts included.", features: ["Preventive maintenance", "Priority support", "Genuine parts", "Cost-effective plans"] },
        { icon: "Zap", title: "Emergency Support", description: "24/7 emergency printer support for critical business operations. Quick response times and on-site service when you need it most.", features: ["24/7 availability", "Quick response", "On-site service", "Emergency repairs"] }
      ]
    },
    doorlocks: {
      sectionTitle: "We Provide the Best Door Lock Services",
      sectionDescription: "Complete lock solutions for residential and commercial properties",
      services: [
        { icon: "Lock", title: "Lock Installation", description: "Professional installation of mechanical, electronic, and smart locks for all door types with proper alignment and security." },
        { icon: "Wrench", title: "Lock Repair", description: "Expert repair services for jammed locks, broken keys, keypad issues, and smart lock troubleshooting." },
        { icon: "Smartphone", title: "Smart Lock Setup", description: "Complete smart lock installation with mobile app configuration, user access setup, and integration training." },
        { icon: "Key", title: "Key Services", description: "Key duplication, lock rekeying, master key systems, and emergency lockout services available 24/7." }
      ]
    },
    firealarms: {
      sectionTitle: "We Provide the Best Fire Alarm Services",
      sectionDescription: "Comprehensive fire safety solutions for all types of properties",
      services: [
        { icon: "Flame", title: "Fire Alarm Installation", description: "Complete installation of smoke, heat, and flame detectors with control panel setup and zone configuration." },
        { icon: "Shield", title: "System Maintenance", description: "Regular testing, battery replacement, sensor cleaning, and compliance inspections to ensure optimal performance." },
        { icon: "Wrench", title: "Emergency Repairs", description: "24/7 urgent response for faulty alarms, disconnected sensors, and control panel issues." },
        { icon: "Bell", title: "Smart Monitoring", description: "Advanced monitoring systems with mobile alerts, incident logs, and integration with building management systems." }
      ]
    }
  };

  return useCMSContent<PageServicesContent>(
    queries.pageServices(pageType),
    fallbacks[pageType] || fallbacks.printers
  );
}

export function usePageTypes(pageType: string) {
  const fallbacks: Record<string, PageTypesContent> = {
    cctv: {
      sectionTitle: "Types of CCTV Systems We Offer",
      sectionDescription: "Choose the perfect camera for your security needs",
      types: [
        { title: "Dome Cameras", description: "360° view, vandal-resistant design perfect for indoor and outdoor monitoring", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop" },
        { title: "Bullet Cameras", description: "Long range, weatherproof cameras ideal for perimeter monitoring and outdoor areas", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" },
        { title: "PTZ Cameras", description: "Pan, tilt, zoom functionality for active monitoring and tracking of subjects", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop" },
        { title: "IP Cameras", description: "HD quality, smart analytics, and network connectivity for modern surveillance", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" },
        { title: "Thermal Cameras", description: "Night vision and heat sensing technology for 24/7 monitoring capabilities", image: "https://images.unsplash.com/photo-1573883430120-6e6d5dc38cd5?w=400&h=300&fit=crop" },
        { title: "Face Recognition Cameras", description: "AI-powered, real-time alerts for advanced security and access control", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop" }
      ]
    },
    printers: {
      sectionTitle: "Types of Printers We Service",
      sectionDescription: "We work with all types of printers, from basic home models to industrial printing solutions",
      types: [
        { title: "Laser Printers", description: "High-speed, cost-effective printing for offices and businesses. Perfect for high-volume text documents with sharp, professional quality.", image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop", features: ["Fast printing speeds", "Low cost per page", "Professional quality", "High paper capacity"], bestFor: "Offices, businesses, high-volume printing" },
        { title: "Inkjet Printers", description: "Versatile printers ideal for photo printing and color documents. Great for home use and small offices requiring quality color output.", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop", features: ["Excellent photo quality", "Color accuracy", "Affordable initial cost", "Compact design"], bestFor: "Home users, photo printing, small offices" },
        { title: "All-in-One Printers", description: "Multifunction devices combining printing, scanning, copying, and faxing capabilities. Space-saving solution for comprehensive office needs.", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop", features: ["Multiple functions", "Space-saving", "Network connectivity", "Mobile printing"], bestFor: "Small offices, home offices, versatile tasks" },
        { title: "Wide Format Printers", description: "Large format printing for posters, banners, and technical drawings. Professional quality for marketing materials and engineering plans.", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop", features: ["Large format printing", "High resolution", "Professional quality", "Various media types"], bestFor: "Design studios, engineering firms, marketing agencies" },
        { title: "Thermal Printers", description: "Specialized printers for labels, receipts, and barcodes. Essential for retail, logistics, and inventory management applications.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop", features: ["No ink required", "Fast printing", "Durable labels", "Low maintenance"], bestFor: "Retail, warehouses, shipping, inventory" },
        { title: "Dot Matrix Printers", description: "Impact printers for multi-part forms and carbon copies. Reliable solution for applications requiring duplicate copies.", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop", features: ["Multi-part forms", "Carbon copies", "Reliable operation", "Low operating cost"], bestFor: "Banking, logistics, official documentation" }
      ]
    },
    doorlocks: {
      sectionTitle: "Types of Door Locks We Offer",
      sectionDescription: "Choose the perfect lock for your security needs",
      types: [
        { title: "Mechanical Locks", description: "Traditional deadbolts, mortise locks, and lever handles for reliable security", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop" },
        { title: "Smart Locks", description: "Keypad, biometric, and app-controlled locks with remote access capabilities", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" },
        { title: "Biometric Locks", description: "Fingerprint and face recognition locks for maximum security and convenience", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop" },
        { title: "Magnetic Locks", description: "Electromagnetic locks perfect for glass doors and access control systems", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" }
      ]
    },
    firealarms: {
      sectionTitle: "Types of Fire Alarm Systems We Offer",
      sectionDescription: "Advanced fire detection systems for complete protection",
      types: [
        { title: "Smoke Detectors", description: "Ionization and photoelectric smoke detectors for early fire detection", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop" },
        { title: "Heat Detectors", description: "Fixed temperature and rate-of-rise heat detectors for kitchen and industrial areas", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" },
        { title: "Control Panels", description: "Addressable and conventional fire alarm control panels with zone management", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop" },
        { title: "Notification Devices", description: "Sirens, strobes, and voice evacuation systems for emergency alerts", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" }
      ]
    }
  };

  return useCMSContent<PageTypesContent>(
    queries.pageTypes(pageType),
    fallbacks[pageType] || fallbacks.printers
  );
}

export function usePageBrands(pageType: string) {
  const fallbacks: Record<string, PageBrandsContent> = {
    cctv: {
      sectionTitle: "Top CCTV Brands We Work With",
      sectionDescription: "Authorized partners for premium surveillance solutions",
      brands: [
        { name: "Hikvision", logo: "https://www.hikvision.com/content/dam/hikvision/global/about-us/brand-identity/hikvision-logo.png", description: "World's leading provider of innovative video surveillance products" },
        { name: "Dahua", logo: "https://www.dahuasecurity.com/asset/image/logo.png", description: "Professional video surveillance and smart IoT solutions" },
        { name: "Axis", logo: "https://logos-world.net/wp-content/uploads/2020/07/Axis-Logo.png", description: "Pioneer in network video and intelligent security solutions" },
        { name: "Bosch", logo: "https://logos-world.net/wp-content/uploads/2020/07/Bosch-Logo.png", description: "Premium security cameras and surveillance systems" },
        { name: "CP Plus", logo: "https://www.cpplus.in/images/logo.png", description: "Leading security surveillance brand in India" },
        { name: "Panasonic", logo: "https://logos-world.net/wp-content/uploads/2020/07/Panasonic-Logo.png", description: "Advanced video surveillance and security solutions" }
      ]
    },
    printers: {
      sectionTitle: "Brands We Service",
      sectionDescription: "Authorized service partners for all major printer brands with genuine parts and expert technicians",
      brands: [
        { name: "HP", logo: "https://logos-world.net/wp-content/uploads/2020/07/HP-Logo.png", description: "Leading manufacturer of inkjet and laser printers for home and business use.", specialties: ["LaserJet series", "DeskJet inkjet", "OfficeJet all-in-one", "Enterprise solutions"] },
        { name: "Canon", logo: "https://logos-world.net/wp-content/uploads/2020/07/Canon-Logo.png", description: "Premium printers known for excellent photo quality and reliability.", specialties: ["PIXMA series", "imageCLASS laser", "Professional photo printers", "Wide format"] },
        { name: "Epson", logo: "https://logos-world.net/wp-content/uploads/2020/07/Epson-Logo.png", description: "Innovative printing technology with EcoTank and WorkForce series.", specialties: ["EcoTank printers", "WorkForce series", "Photo printers", "POS printers"] },
        { name: "Brother", logo: "https://logos-world.net/wp-content/uploads/2020/11/Brother-Logo.png", description: "Reliable printers for small to medium businesses with excellent support.", specialties: ["Laser printers", "Label printers", "All-in-one devices", "Industrial printers"] },
        { name: "Samsung", logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png", description: "Quality laser printers with smart connectivity features.", specialties: ["Laser printers", "Smart connectivity", "Mobile printing", "Office solutions"] },
        { name: "Xerox", logo: "https://logos-world.net/wp-content/uploads/2020/07/Xerox-Logo.png", description: "Professional printing solutions for large enterprises and offices.", specialties: ["Production printers", "Multifunction devices", "Document solutions", "Enterprise systems"] }
      ],
      ctaTitle: "Don't see your brand?",
      ctaDescription: "We service many other brands including Ricoh, Kyocera, Lexmark, and more. Contact us to check if we can help with your specific printer model.",
      ctaButtonText: "Contact Us"
    },
    doorlocks: {
      sectionTitle: "Top Door Lock Brands We Work With",
      sectionDescription: "Trusted brands for secure access solutions",
      brands: [
        { name: "Yale", logo: "https://www.yalehome.com/content/dam/yale/logos/yale-logo.png", description: "Premium smart locks and traditional security solutions" },
        { name: "August", logo: "https://august.com/images/logo.png", description: "Smart home access and keyless entry systems" },
        { name: "Schlage", logo: "https://www.schlage.com/content/dam/schlage-com/logo.png", description: "Trusted residential and commercial lock solutions" },
        { name: "Kwikset", logo: "https://www.kwikset.com/images/logo.png", description: "Innovative door hardware and smart lock technology" },
        { name: "Godrej", logo: "https://logos-world.net/wp-content/uploads/2020/07/Godrej-Logo.png", description: "India's leading security and storage solutions" },
        { name: "Honeywell", logo: "https://logos-world.net/wp-content/uploads/2020/07/Honeywell-Logo.png", description: "Advanced home automation and security systems" }
      ]
    },
    firealarms: {
      sectionTitle: "Top Fire Alarm Brands We Work With",
      sectionDescription: "Trusted brands for reliable fire safety solutions",
      brands: [
        { name: "Honeywell", logo: "https://logos-world.net/wp-content/uploads/2020/07/Honeywell-Logo.png", description: "Leading fire safety and security solutions provider" },
        { name: "Bosch", logo: "https://logos-world.net/wp-content/uploads/2020/07/Bosch-Logo.png", description: "Premium fire detection and alarm systems" },
        { name: "Ceasefire", logo: "https://www.ceasefire.in/images/logo.png", description: "India's leading fire safety equipment manufacturer" },
        { name: "Ravel", logo: "https://www.ravelfiresafety.com/images/logo.png", description: "Comprehensive fire safety solutions" },
        { name: "Siemens", logo: "https://logos-world.net/wp-content/uploads/2020/07/Siemens-Logo.png", description: "Advanced fire safety technology and systems" },
        { name: "Edwards", logo: "https://www.edwardsfiresafety.com/images/logo.png", description: "Professional fire detection and notification systems" }
      ]
    }
  };

  return useCMSContent<PageBrandsContent>(
    queries.pageBrands(pageType),
    fallbacks[pageType] || fallbacks.printers
  );
}

export function usePageIndustries(pageType: string) {
  const fallbacks: Record<string, PageIndustriesContent> = {
    cctv: {
      sectionTitle: "Installation Suggestions by Property Type",
      sectionDescription: "Customized surveillance solutions for every sector",
      industries: [
        { icon: "Home", title: "Residential", description: "Home security cameras for entrances, gardens, and interior monitoring" },
        { icon: "Building", title: "Commercial", description: "Office surveillance, parking lots, and business premise security" },
        { icon: "School", title: "Educational", description: "School and college campus security with comprehensive coverage" },
        { icon: "Hotel", title: "Hospitality", description: "Hotel lobby, corridor, and facility monitoring systems" },
        { icon: "Factory", title: "Industrial", description: "Factory floor monitoring, perimeter security, and safety compliance" },
        { icon: "ShoppingBag", title: "Retail", description: "Store surveillance, theft prevention, and customer behavior analysis" }
      ]
    },
    printers: {
      sectionTitle: "Industries We Serve",
      sectionDescription: "Specialized printing solutions tailored to meet the unique needs of different industries",
      industries: [
        { icon: "Building", title: "Corporate Offices", description: "High-volume printing solutions for large corporations with network printers, managed print services, and enterprise-grade security.", solutions: ["Network printer setup", "Managed print services", "Cost optimization", "Security features"], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
        { icon: "Home", title: "Home Offices", description: "Compact, efficient printers for home-based professionals and remote workers with wireless connectivity and mobile printing.", solutions: ["Wireless setup", "Mobile printing", "Compact designs", "Cost-effective solutions"], image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" },
        { icon: "GraduationCap", title: "Educational Institutions", description: "Reliable printing solutions for schools and colleges with high-capacity printers and student-friendly features.", solutions: ["High-capacity printers", "Student access control", "Bulk printing", "Educational discounts"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" },
        { icon: "ShoppingBag", title: "Retail Businesses", description: "Point-of-sale printers, receipt printers, and label printing solutions for retail operations and inventory management.", solutions: ["POS printers", "Receipt printing", "Label printers", "Inventory solutions"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" },
        { icon: "Factory", title: "Manufacturing", description: "Industrial-grade printers for manufacturing environments with barcode printing, quality control documentation, and harsh environment capabilities.", solutions: ["Industrial printers", "Barcode printing", "Quality documentation", "Harsh environment"], image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop" },
        { icon: "Heart", title: "Healthcare", description: "Medical-grade printing solutions for hospitals and clinics with patient record printing, prescription labels, and compliance features.", solutions: ["Medical records", "Prescription labels", "HIPAA compliance", "Patient wristbands"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" }
      ]
    },
    doorlocks: {
      sectionTitle: "Industries We Serve",
      sectionDescription: "Customized lock solutions for every sector",
      industries: [
        { icon: "Home", title: "Residential", description: "Home security locks for main doors, bedrooms, and interior spaces" },
        { icon: "Building", title: "Commercial", description: "Office access control, meeting room locks, and security systems" },
        { icon: "School", title: "Educational", description: "School and college security with keycard and biometric access" },
        { icon: "Hotel", title: "Hospitality", description: "Hotel room locks, RFID systems, and guest access management" },
        { icon: "Factory", title: "Industrial", description: "High-security locks for industrial facilities and restricted areas" },
        { icon: "ShoppingBag", title: "Retail", description: "Store security, cash room locks, and retail access control" }
      ]
    },
    firealarms: {
      sectionTitle: "Industries We Serve",
      sectionDescription: "Customized fire safety solutions for every sector",
      industries: [
        { icon: "Home", title: "Residential", description: "Home fire safety systems for apartments, villas, and residential complexes" },
        { icon: "Building", title: "Commercial", description: "Office buildings, corporate complexes, and commercial establishments" },
        { icon: "School", title: "Educational", description: "Schools, colleges, and educational institutions with compliance requirements" },
        { icon: "Hotel", title: "Hospitality", description: "Hotels, restaurants, and hospitality venues with guest safety priorities" },
        { icon: "Factory", title: "Industrial", description: "Manufacturing plants, warehouses, and industrial facilities" },
        { icon: "ShoppingBag", title: "Retail", description: "Shopping malls, retail stores, and commercial complexes" }
      ]
    }
  };

  return useCMSContent<PageIndustriesContent>(
    queries.pageIndustries(pageType),
    fallbacks[pageType] || fallbacks.printers
  );
}

export function usePageFAQs(pageType: string) {
  const fallbacks: Record<string, PageFAQsContent> = {
    cctv: {
      sectionTitle: "CCTV System FAQs",
      sectionDescription: "Common questions about CCTV installation and surveillance systems",
      faqs: [
        { question: "How many CCTV cameras do I need for my shop?", answer: "Usually 2–4 cameras are enough: one for entry, one for the counter, one for storage, and one outdoor. We provide layout planning as well." },
        { question: "Can I access my CCTV feed on my phone?", answer: "Yes. All our systems support mobile viewing via dedicated Android and iOS apps." },
        { question: "What's better: wired or wireless cameras?", answer: "Wired systems are more reliable but take more time to install. Wireless systems are easy to set up but may depend on Wi-Fi quality." },
        { question: "How long can CCTV footage be stored?", answer: "Storage duration depends on your DVR/NVR capacity and recording quality. Typically ranges from 7 days to 3 months. Cloud storage options are also available." },
        { question: "Do CCTV cameras work in complete darkness?", answer: "Yes, cameras with infrared (IR) night vision can record in complete darkness up to specified distances, usually 20-100 meters depending on the model." },
        { question: "Can I upgrade my existing analog CCTV system?", answer: "Yes! We can upgrade your system to HD or IP cameras while utilizing existing cable infrastructure in most cases." },
        { question: "What's the difference between HD and IP cameras?", answer: "HD cameras provide high-definition video over coax cables, while IP cameras offer superior image quality, advanced features, and network connectivity but require more bandwidth." },
        { question: "Do I need internet for CCTV to work?", answer: "No, CCTV systems work independently. Internet is only needed for remote viewing on mobile devices or cloud storage features." }
      ],
      ctaTitle: "Ready to Secure Your Property?",
      ctaDescription: "Get a free security assessment and customized CCTV solution for your needs.",
      ctaButtons: [
        { text: "Free Assessment", action: "contact", variant: "primary" },
        { text: "WhatsApp Us", action: "whatsapp", variant: "secondary" }
      ]
    },
    printers: {
      sectionTitle: "Frequently Asked Questions",
      sectionDescription: "Get answers to common questions about our printer services and solutions",
      categories: [
        {
          categoryTitle: "General Questions",
          faqs: [
            { question: "What areas do you serve?", answer: "We provide services across Delhi and NCR. You can contact us to check availability in your specific area." },
            { question: "Do you provide emergency or same-day services?", answer: "Yes, we offer same-day support for urgent installations, breakdowns, or safety issues." },
            { question: "Are your staff and technicians certified?", answer: "Yes. Our team is professionally trained, background-verified, and equipped with all necessary tools and certifications." }
          ]
        },
        {
          categoryTitle: "Printer Services",
          faqs: [
            { question: "Do you repair all brands of printers?", answer: "Yes. We repair HP, Canon, Epson, Brother, Samsung, Pantum, and more. We handle all issues from hardware to cartridge problems." },
            { question: "Can I rent a printer for short-term use?", answer: "Yes. We offer flexible daily/weekly/monthly printer rental options for events, exams, and offices." },
            { question: "How much time does a repair take?", answer: "Most repairs are completed within 24 hours. Complex issues may take longer, but we keep you informed at each step." },
            { question: "Do you provide genuine toner and ink cartridges?", answer: "Yes, we supply both genuine OEM cartridges and high-quality compatible alternatives. We offer competitive pricing and bulk discounts for businesses with regular supply contracts." },
            { question: "What's included in your AMC plans?", answer: "Our Annual Maintenance Contracts include regular preventive maintenance, priority support, genuine parts replacement, and emergency repairs. We offer different tiers to match your specific needs and budget." },
            { question: "How quickly can you respond to emergency repair calls?", answer: "We provide 24/7 emergency support with response times typically within 4-6 hours for critical business environments. Our technicians carry common parts and tools for immediate repairs." },
            { question: "Do you offer training for printer operation and maintenance?", answer: "Yes, we provide comprehensive training for your staff on printer operation, basic troubleshooting, and maintenance. This helps prevent common issues and extends the life of your equipment." },
            { question: "Can you help with printer network setup and configuration?", answer: "Absolutely! We specialize in network printer setup, including WiFi configuration, driver installation, and user access management. We ensure seamless integration with your existing IT infrastructure." }
          ]
        }
      ],
      ctaTitle: "Need Help with Your Printer?",
      ctaDescription: "Our expert technicians are ready to help with any printer-related questions or issues.",
      ctaButtons: [
        { text: "Contact Support", action: "contact", variant: "primary" },
        { text: "WhatsApp Us", action: "whatsapp", variant: "secondary" }
      ]
    },
    doorlocks: {
      sectionTitle: "Door Lock FAQs",
      sectionDescription: "Get answers to the most common questions about smart door locks, installation process, security features, and ongoing maintenance. Our expert team has compiled these insights from years of experience helping customers upgrade their home security.",
      faqs: [
        { question: "Will a smart lock fit my wooden or metal door?", answer: "Yes. Most smart locks fit standard door thicknesses. We recommend sharing door images for better compatibility checks." },
        { question: "Will my smart lock still work during power or internet outages?", answer: "Yes. Most smart locks use battery power and support Bluetooth unlocking. Some models come with physical key backups." },
        { question: "What if my smart lock's battery dies?", answer: "You will be notified in advance. Also, emergency USB charging or mechanical key options are available in most models." },
        { question: "Can I install a smart lock myself?", answer: "While some smart locks are designed for DIY installation, we recommend professional installation to ensure proper alignment, security, and warranty coverage." },
        { question: "How secure are smart locks compared to traditional locks?", answer: "Smart locks often provide enhanced security features like tamper alerts, activity logs, and temporary access codes. They use encrypted communication and are designed to be as secure as traditional deadbolts." },
        { question: "Can I integrate smart locks with other smart home devices?", answer: "Yes! Most smart locks work with popular platforms like Alexa, Google Home, and Apple HomeKit, allowing integration with cameras, lights, and security systems." },
        { question: "What happens if I lose my phone?", answer: "Smart locks typically offer multiple access methods including backup keys, keypads, or secondary user access through family members' phones." },
        { question: "How long do smart lock batteries last?", answer: "Most smart lock batteries last 6-12 months depending on usage. You'll receive low battery notifications well in advance through the mobile app." },
        { question: "Do smart locks work with all door types?", answer: "Smart locks are compatible with most standard doors including wooden, metal, and composite doors. Our technicians assess door compatibility during the free consultation to ensure proper fit and functionality." },
        { question: "Can I still use a regular key with a smart lock?", answer: "Many smart locks offer traditional key backup options alongside digital access methods. This provides peace of mind and ensures you're never locked out, even if the electronic components fail." },
        { question: "How do I manage access for guests or service providers?", answer: "Smart locks allow you to create temporary access codes that can be set to expire after a specific time or number of uses. You can also grant and revoke access remotely through the mobile app." },
        { question: "What maintenance do smart locks require?", answer: "Smart locks require minimal maintenance - mainly battery replacement every 6-12 months and occasional cleaning of the keypad or fingerprint sensor. Our service team provides annual maintenance checks to ensure optimal performance." }
      ],
      ctaTitle: "Ready to Upgrade Your Home Security?",
      ctaDescription: "Join thousands of satisfied customers who have upgraded to smart locks. Our certified technicians provide professional installation and setup for all smart lock brands with comprehensive warranty coverage.",
      ctaButtons: [
        { text: "Get Free Consultation", action: "contact", variant: "primary" },
        { text: "WhatsApp Us Now", action: "whatsapp", variant: "secondary" }
      ]
    },
    firealarms: {
      sectionTitle: "Fire Safety FAQs",
      sectionDescription: "Everything you need to know about fire alarm systems, installation requirements, maintenance schedules, and safety compliance. Our fire safety experts answer the most common questions to help you make informed decisions about protecting your property and loved ones.",
      faqs: [
        { question: "What is the average lifespan of a fire alarm device?", answer: "Typically, 8 to 10 years. Sensors should be tested regularly and batteries replaced annually." },
        { question: "How often should I test my fire alarm?", answer: "Once a month. Testing takes under 5 minutes and ensures your system is always ready." },
        { question: "Can fire alarms be monitored on a mobile app?", answer: "Yes. Smart alarms connect to apps and alert you in real-time in case of fire, smoke, or system errors." },
        { question: "Do I need a fire alarm for a small office?", answer: "Yes, fire alarms are essential for any workplace regardless of size. Small offices should have at least smoke detectors in main areas and compliance with local fire safety regulations." },
        { question: "Will it work during a power cut?", answer: "Yes, all our fire alarm systems come with battery backup that can operate for 24-72 hours during power outages, ensuring continuous protection." },
        { question: "Can I upgrade an old alarm system?", answer: "Absolutely! We can upgrade your existing system to addressable or smart fire alarms, add new zones, or integrate with building management systems while using existing wiring where possible." },
        { question: "Can I receive alerts on my phone?", answer: "Yes! Our smart fire alarm systems can send instant notifications to your smartphone, security team, and monitoring center when an alarm is triggered." },
        { question: "What is the typical lifespan of a fire detector?", answer: "Smoke detectors typically last 8-10 years, while heat detectors can last 15-20 years. We provide replacement schedules and proactive maintenance to ensure optimal performance." },
        { question: "What's the difference between smoke and heat detectors?", answer: "Smoke detectors sense airborne particles from fires, while heat detectors respond to temperature changes. Smoke detectors are more sensitive and provide earlier warning, while heat detectors are better for dusty or steamy environments." },
        { question: "Are fire alarms mandatory for all buildings?", answer: "Yes, fire safety regulations mandate fire detection systems for most commercial buildings, apartments, and public spaces. Residential homes also benefit greatly from fire alarm installation." },
        { question: "How do I maintain my fire alarm system?", answer: "Regular maintenance includes monthly testing, annual professional inspections, battery replacements, and sensor cleaning. We offer comprehensive AMC packages to handle all maintenance requirements." },
        { question: "What should I do if my fire alarm keeps giving false alarms?", answer: "False alarms can be caused by dust accumulation, cooking smoke, or sensor malfunction. Our technicians can diagnose the issue and recommend solutions like sensor relocation or upgrades to reduce false alarms." }
      ],
      ctaTitle: "Protect Your Property with Professional Fire Safety",
      ctaDescription: "Don't wait for an emergency. Get a comprehensive fire safety assessment and modern alarm system installation. Our certified fire safety experts ensure your property meets all safety standards and regulations.",
      ctaButtons: [
        { text: "Schedule Fire Safety Audit", action: "contact", variant: "primary" },
        { text: "Emergency Consultation", action: "whatsapp", variant: "secondary" }
      ]
    }
  };

  return useCMSContent<PageFAQsContent>(
    queries.pageFAQs(pageType),
    fallbacks[pageType] || fallbacks.printers
  );
}

export function useSmartFeatures() {
  const fallback: SmartFeaturesContent = {
    sectionTitle: "Smart CCTV Features",
    sectionDescription: "Advanced technology for modern security needs",
    features: [
      { icon: "Shield", title: "24/7 Live Monitoring", description: "Continuous surveillance with real-time alerts" },
      { icon: "Smartphone", title: "Mobile Alerts & App Access", description: "Instant notifications and remote viewing on your phone" },
      { icon: "Cloud", title: "Cloud Storage Integration", description: "Secure cloud backup and easy access to recordings" },
      { icon: "Eye", title: "AI-Powered Motion Detection", description: "Smart analytics to reduce false alarms" },
      { icon: "FileText", title: "Log History for Recorded Events", description: "Detailed timeline of all surveillance activities" },
      { icon: "Lock", title: "Secure Remote Access Control", description: "Protected login and encrypted data transmission" }
    ]
  };

  return useCMSContent<SmartFeaturesContent>(queries.smartFeatures, fallback);
}

export function usePageCTA(pageType: string) {
  const fallbacks: Record<string, PageCTAContent> = {
    cctv: {
      title: "Monitor Your Property",
      description: "Ready to secure your property with professional CCTV installation?",
      primaryButton: { text: "WhatsApp Our Expert", link: "https://wa.me/919990820830" },
      secondaryButton: { text: "Send a Message", link: "mailto:sachidanand@live.in" }
    }
  };

  return useCMSContent<PageCTAContent>(
    queries.pageCTA(pageType),
    fallbacks[pageType] || fallbacks.cctv
  );
}
