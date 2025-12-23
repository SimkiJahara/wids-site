import { Calendar, MapPin, FileText, Users, Mic } from 'lucide-react';

export const siteData = {
  general: {
    title: "WiDS Bangladesh 2025",
    appName: "WiDS Bangladesh",
    logo: "/logos/widsBD.jpeg", // Ensure you move your logo here
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
  timeline: {
    title: "Important Dates",
    subtitle: "Mark your calendars for 2026",
    events: [
      { title: "Abstract Submission", date: "2026-01-15", status: "upcoming" },
      { title: "Paper Notification", date: "2026-02-20", status: "upcoming" },
      { title: "Camera Ready Deadline", date: "2026-03-10", status: "upcoming" },
      { title: "Conference Date", date: "2026-04-12", status: "upcoming" },
    ]
  },
  infoGrid: {
    cards: [
      {
        title: "Call for Papers",
        description: "Submit your original research. All accepted papers will be indexed in IEEE Xplore.",
        color: "bg-wids-gold",
        textColor: "text-wids-dark",
        link: "#cfp"
      },
      {
        title: "Student Activities",
        description: "Join the poster session, hackathon, and mentorship circles designed for students.",
        color: "bg-wids-teal",
        textColor: "text-white",
        link: "#"
      },
      {
        title: "Registration",
        description: "Secure your spot at WiDS Bangladesh 2025. Early bird discounts available soon.",
        color: "bg-wids-dark",
        textColor: "text-white",
        link: "#register"
      }
    ]
  },
  committee: {
    title: "Organizing Committee",
    subtitle: "The team behind WiDS Bangladesh",
    members: [
      {
        name: "Dr. Alice Chen",
        role: "General Chair",
        affiliation: "Global Tech University",
        image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dr. Maria Garcia",
        role: "Program Chair",
        affiliation: "Data Science Institute",
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dr. James Wilson",
        role: "Publicity Chair",
        affiliation: "WiDS Ambassador",
        image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  newsletter: {
    title: "Stay Updated",
    description: "Don't miss important announcements, deadline extensions, and speaker reveals.",
    placeholder: "Enter your email address",
    buttonText: "Notify Me"
  },
  hero: {
    title: "WiDS Bangladesh 2026",
    subtitle: "Women in Data Science",
    location: "Dhaka, Bangladesh",
    status: "March 8, 2026",
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
        name: "Dr. Sumaiya Tabassum Nimi",
        role: "Keynote Speaker",
        org: "North South University",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "Expert in Computational Biology and AI applications in Healthcare."
      },
      {
        id: 2,
        name: "Dr. Elena Rodriguez",
        role: "AI Research Lead",
        org: "Tech Global Institute",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "Pioneering work in Natural Language Processing and Ethics."
      },
      {
        id: 3,
        name: "Prof. Sarah Smith",
        role: "Data Science Chair",
        org: "University of Innovation",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "Leading research in Big Data Analytics and Visualization."
      },
      {
        id: 4,
        name: "Dr. Yuki Tanaka",
        role: "Chief Data Officer",
        org: "Future Systems",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "Transforming industries through predictive modeling."
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
