import {
  Code,
  Smartphone,
  PenTool,
  Share2,
  Search,
  MapPin,
  FileCode,
  PenLine,
  Wrench,
  Monitor,
  ShoppingCart,
  Link,
  ShieldCheck,
  Layout,
  Palette,
  Headset,
  type LucideIcon
} from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  path: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "custom-website-design",
    title: "Custom Website Design",
    shortDesc: "Tailor-made website designs that perfectly capture your brand identity and goals.",
    icon: Monitor,
    path: "/services/custom-website-design"
  },
  {
    id: "responsive-websites",
    title: "Responsive & Mobile-Friendly Websites",
    shortDesc: "Websites engineered to look and perform flawlessly across all devices and screen sizes.",
    icon: Smartphone,
    path: "/services/responsive-websites"
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Development",
    shortDesc: "Robust online stores designed for high conversion rates and seamless shopping experiences.",
    icon: ShoppingCart,
    path: "/services/ecommerce-development"
  },
  {
    id: "seo",
    title: "SEO Services",
    shortDesc: "Technical and on-page optimization to rank higher on Google and drive organic traffic.",
    icon: Search,
    path: "/services/seo"
  },
  {
    id: "api-integration",
    title: "API & Third-Party Integration",
    shortDesc: "Seamlessly connect your digital platforms with essential third-party tools and services.",
    icon: Link,
    path: "/services/api-integration"
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Keep your website secure, up-to-date, and running at peak performance.",
    icon: ShieldCheck,
    path: "/services/website-maintenance"
  },
  {
    id: "ui-ux",
    title: "UI/UX Development",
    shortDesc: "User-centered design that ensures intuitive navigation and engaging user journeys.",
    icon: Layout,
    path: "/services/ui-ux"
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    shortDesc: "Premium branding and marketing materials that make your business stand out.",
    icon: PenTool,
    path: "/services/graphic-design"
  },
  {
    id: "logo-branding",
    title: "Logo Design & Branding",
    shortDesc: "Craft a memorable brand identity with professional logo design and style guides.",
    icon: Palette,
    path: "/services/logo-branding"
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    shortDesc: "Data-driven campaigns to grow your audience and boost engagement across platforms.",
    icon: Share2,
    path: "/services/social-media-marketing"
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform apps delivering powerful experiences for iOS and Android.",
    icon: Smartphone,
    path: "/services/mobile-app-development"
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDesc: "Custom enterprise software and scalable SaaS product engineering.",
    icon: FileCode,
    path: "/services/software-development"
  },
  {
    id: "content-writing",
    title: "Content Writing",
    shortDesc: "Engaging, SEO-friendly copy that connects with your audience and drives conversions.",
    icon: PenLine,
    path: "/services/content-writing"
  },
  {
    id: "google-my-business",
    title: "Google My Business",
    shortDesc: "Local SEO optimization to dominate your local market and attract nearby customers.",
    icon: MapPin,
    path: "/services/google-my-business"
  },
  {
    id: "maintenance-customer-support",
    title: "Maintenance & Customer Support",
    shortDesc: "Reliable technical support and ongoing optimization to keep your business running smoothly.",
    icon: Headset,
    path: "/services/maintenance-customer-support"
  }
];
