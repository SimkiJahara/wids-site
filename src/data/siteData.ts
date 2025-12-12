import { Calendar, MapPin, FileText, Users, Mic } from 'lucide-react';

export const siteData = {
  general: {
    title: "WiDS Bangladesh 2025",
    appName: "WiDS Bangladesh",
    logo: "/logos/widsBD.png", // Ensure you move your logo here
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    }
  },
  theme: {
    colors: {
      primary: "#FECB00", // Gold
      secondary: "#00B5E2", // Teal
      dark: "#1A1A1A", // Dark Grey
    }
  },
  navbar: {
    links: [
      { label: "About", href: "#about" },
      { label: "Call for Papers", href: "#cfp" },
      { label: "Speakers", href: "#speakers" },
      { label: "Sponsors", href: "#sponsors" },
    ],
    cta: {
      label: "Register Now",
      href: "#register"
    }
  },
  hero: {
    title: "WiDS Bangladesh 2025",
    subtitle: "Women in Data Science",
    location: "Dhaka, Bangladesh",
    status: "Dates TBA",
    description: "Inspiring and educating data scientists worldwide, regardless of gender, and supporting women in the field.",
    ctaPrimary: { label: "Register Interest", href: "#register" },
    ctaSecondary: { label: "Submit Paper", href: "#cfp" },
    backgroundImage: "https://placehold.co/1920x1080/1A1A1A/333333?text=Dhaka+Skyline"
  },
  about: {
    title: "Our Mission",
    content: "WiDS Bangladesh is an independent event that is organized by WiDS Ambassadors as part of the annual WiDS Worldwide conference organized by Stanford University and an estimated 200+ locations worldwide, which features outstanding women doing outstanding work in the field of data science."
  },
  cfp: {
    title: "Call for Papers",
    subtitle: "IEEE Xplore Indexed",
    description: "We invite submissions of original research papers. Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.",
    deadline: "Submission Deadline: TBA",
    cta: { label: "Submit via Microsoft CMT", href: "#" }
  },
  speakers: {
    title: "Featured Speakers",
    subtitle: "Hear from industry leaders and academic pioneers",
    list: [
      {
        id: 1,
        name: "Dr. Keynote Speaker",
        role: "Professor of Data Science",
        org: "Stanford University",
        image: "https://placehold.co/400x400/00B5E2/FFFFFF?text=Speaker+1",
        bio: "Leading researcher in AI ethics and machine learning bias."
      },
      // Add more speakers here easily
      {
        id: 2,
        name: "TBA",
        role: "Industry Leader",
        org: "Tech Corp",
        image: "https://placehold.co/400x400/FECB00/000000?text=TBA",
        bio: "More details coming soon."
      }
    ]
  },
  agenda: {
    title: "Event Schedule",
    status: "Schedule Coming Soon",
    note: "Stay tuned for a full day of keynotes, technical talks, and workshops."
  },
  sponsors: {
    title: "Our Sponsors",
    list: [
      {
        name: "North South University",
        logo: "/logos/North_South_University.png", // Ensure you move your logo here
        tier: "Platinum",
        url: "http://www.northsouth.edu"
      }
    ]
  },
  footer: {
    copyright: "© 2025 WiDS Bangladesh. All Rights Reserved.",
    disclaimer: "WiDS Bangladesh is an independent event organized by WiDS Ambassadors."
  }
};
