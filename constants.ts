import { ExperienceItem, Project, Skill, Profile } from './types';

export const PERSONAL_INFO: Profile = {
  id: 1,
  name: "Hasan Ahmed Jobayer",
  title: "Full Stack WordPress & WooCommerce || Shopify || Webflow Developer",
  tagline: "Architecting sophisticated, scalable, and high-performance web solutions.",
  phone: "+8801748447652",
  email: "hasanahmedjobayer@gmail.com",
  location: "Chattogram, Bangladesh",
  whatsapp: "8801748447652",
  resume_url: "/resume.pdf",
  formspree_url: "https://formspree.io/f/mnneodez",
  about: "As a solutions architect with over a decade of experience, I seek to leverage my deep expertise in full-stack engineering to lead high-performing teams. My objective is to architect and implement complex, data-driven web solutions that ensure optimal performance, robust security, and seamless integration.",
  linkedin_url: "https://www.linkedin.com/in/engrhasanjobayer/",
  facebook_url: "https://www.facebook.com/engr.hjobayer/"
};

export const SKILLS: Skill[] = [
  { id: 1, name: "WordPress / WooCommerce", level: 99, category: "cms" },
  { id: 2, name: "PHP 8.x", level: 95, category: "backend" },
  { id: 3, name: "JavaScript / React", level: 90, category: "frontend" },
  { id: 4, name: "HTML5 / CSS3 / Tailwind / Bootstrap", level: 95, category: "frontend" },
  { id: 5, name: "Shopify / Liquid", level: 85, category: "cms" },
  { id: 6, name: "Webflow", level: 85, category: "cms" },
  { id: 7, name: "MySQL", level: 90, category: "backend" },
  { id: 8, name: "Figma to Code", level: 95, category: "tools" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior WordPress & WooCommerce Developer",
    company: "Sariya IT",
    period: "2022 – Present",
    location: "Bangladesh",
    description: [
      "Develop websites with popular CMS like WordPress (ACF, Elementor, Gutenberg) and HubSpot.",
      "Confer with management to prioritize needs and resolve conflicts.",
      "Design and implement website security measures.",
      "Optimize pages for speed and SEO."
    ]
  },
  {
    id: 2,
    role: "Senior Web Developer",
    company: "Loud Days",
    period: "2022 – 2024",
    location: "Melbourne, Australia (Remote)",
    description: [
      "Developed websites utilizing WordPress, Shopify, and WooCommerce.",
      "Analyzed user needs to determine technical requirements.",
      "Integrated complex payment gateways and performance optimization.",
      "Mentored junior developers and conducted code reviews."
    ]
  },
  {
    id: 3,
    role: "Project Manager & Team Leader",
    company: "Digital People Bangladesh",
    period: "2019 – 2022",
    location: "Dhaka, Bangladesh",
    description: [
      "Led development for platforms including Magento, Shopify, and WordPress.",
      "Translated business requirements into technical specifications.",
      "Ensured code validity, structure, and industry standard compliance.",
      "Managed ongoing website revisions and bug testing."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Right Path Benefits",
    category: "Insurance",
    description: "Comprehensive employee benefits and insurance solutions platform tailored for businesses.",
    image_url: "https://picsum.photos/seed/rightpath/800/600",
    link: "https://rightpathbenefits.com",
    sort_order: 1
  },
  {
    id: 2,
    title: "T2 Insurance Solutions",
    category: "Insurance",
    description: "Customized insurance strategies providing robust coverage for diverse business needs.",
    image_url: "https://picsum.photos/seed/t2insure/800/600",
    link: "https://t2insurancesolutions.com",
    sort_order: 2
  },
  {
    id: 3,
    title: "Northstead",
    category: "Corporate",
    description: "Professional corporate presence focusing on strategic business growth and management.",
    image_url: "https://picsum.photos/seed/northstead/800/600",
    link: "https://northstead.com",
    sort_order: 3
  },
  {
    id: 4,
    title: "Berlin Insurance Group",
    category: "Insurance",
    description: "Dedicated risk management and insurance services portal for personal and commercial lines.",
    image_url: "https://picsum.photos/seed/berlin/800/600",
    link: "https://berlininsurancegroup.com",
    sort_order: 4
  },
  {
    id: 5,
    title: "Landmark Wealth Strategies",
    category: "Finance",
    description: "Financial planning website offering wealth management and strategic investment advice.",
    image_url: "https://picsum.photos/seed/landmark/800/600",
    link: "https://landmarkws.com",
    sort_order: 5
  },
  {
    id: 6,
    title: "High Ticket Barbers",
    category: "Services",
    description: "Premium booking, portfolio, and coaching site for high-end barbering professionals.",
    image_url: "https://picsum.photos/seed/barber/800/600",
    link: "https://highticketbarbers.com",
    sort_order: 6
  },
  {
    id: 7,
    title: "Wholistic Body Healthcare",
    category: "Health",
    description: "Integrative wellness center website featuring service details and appointment scheduling.",
    image_url: "https://picsum.photos/seed/health/800/600",
    link: "https://wholisticbodyhealthcare.com.au",
    sort_order: 7
  },
  {
    id: 8,
    title: "Holistic Yoga Studio",
    category: "Health",
    description: "Serene digital space for a yoga studio, including class schedules and retreat information.",
    image_url: "https://picsum.photos/seed/yoga/800/600",
    link: "https://holisticyogastudio.com",
    sort_order: 8
  },
  {
    id: 9,
    title: "MK Legal Group",
    category: "Legal",
    description: "Professional law firm website showcasing legal services, expertise, and client resources.",
    image_url: "https://picsum.photos/seed/legal/800/600",
    link: "https://mklegalgroup.com.au",
    sort_order: 9
  },
  {
    id: 10,
    title: "LOAV Tuitions",
    category: "Education",
    description: "Educational platform offering tuition services, learning resources, and student support.",
    image_url: "https://picsum.photos/seed/loav/800/600",
    link: "https://loavtuitions.com",
    sort_order: 10
  }
];