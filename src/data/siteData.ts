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
      { label: "Scope", href: "#scope" },
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
      { title: "Paper Submission Deadline", date: "Jan 30, 2026", status: "upcoming" },
      { title: "Paper Notification", date: "Feb 20, 2026", status: "upcoming" },
      { title: "Camera Ready Deadline", date: "Mar 1, 2026", status: "upcoming" },
      { title: "Program", date: "Mar 8, 2026", status: "upcoming" },
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
    ctaPrimary: { label: "Registration", href: "#register" },
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
  scope: {
    title: "Scope of the Conference",
    subtitle: "We invite submissions on a broad range of topics. The scope includes, but is not limited to, the following tracks:",
    tracks: [
      {
        id: 1,
        title: "Data Science and Machine Learning Foundations",
        topics: [
          "Supervised, unsupervised, and semi-supervised learning",
          "Mathematical optimization for deep learning",
          "Statistical learning theory and probabilistic models"
        ]
      },
      {
        id: 2,
        title: "Artificial Intelligence for Healthcare, Sustainability, and Social Good",
        topics: [
          "Predictive analytics for public health and epidemiology",
          "AI for disaster management and humanitarian aid",
          "Sustainable energy optimization and green AI"
        ]
      },
      {
        id: 3,
        title: "Responsible, Ethical, and Trustworthy AI",
        topics: [
          "Bias detection, fairness, and algorithmic accountability",
          "Explainable AI (XAI) and model interpretability",
          "AI governance, policy, and regulation"
        ]
      },
      {
        id: 4,
        title: "Big Data Analytics, Data Engineering, and Cloud AI",
        topics: [
          "Scalable data pipelines and data warehousing",
          "Real-time stream processing and analytics",
          "Serverless machine learning and cloud-native AI architectures"
        ]
      },
      {
        id: 5,
        title: "AI in Smart Cities, IoT, and Cyber-Physical Systems",
        topics: [
          "Intelligent traffic management and transportation systems",
          "Sensor data fusion and analysis",
          "AI for smart grid and energy efficiency"
        ]
      },
      {
        id: 6,
        title: "Emerging Trends: Generative AI, Quantum AI, and Advanced AI Systems",
        topics: [
          "Large-scale image and text synthesis (GANs, Diffusion Models)",
          "Quantum machine learning algorithms",
          "Neuro-symbolic AI and reasoning"
        ]
      },
      {
        id: 7,
        title: "Natural Language Processing (NLP) and Large Language Models",
        topics: [
          "Bangla language processing (Translation, Sentiment Analysis, OCR)",
          "LLM fine-tuning, prompting, and application development",
          "Speech recognition and conversational AI"
        ]
      },
      {
        id: 8,
        title: "Computer Vision, Pattern Recognition, and Image Processing",
        topics: [
          "Object detection, tracking, and recognition",
          "Medical image segmentation and analysis",
          "Video analytics and surveillance systems"
        ]
      },
      {
        id: 9,
        title: "Cybersecurity, Privacy-Preserving AI, and Federated Learning",
        topics: [
          "Adversarial machine learning and defense mechanisms",
          "Differential privacy and secure multi-party computation",
          "Decentralized learning frameworks"
        ]
      },
      {
        id: 10,
        title: "Financial Data Science, Fintech, and Business Intelligence",
        topics: [
          "Fraud detection and anti-money laundering (AML)",
          "Algorithmic trading and credit risk modeling",
          "Customer behavior analysis and churn prediction"
        ]
      },
      {
        id: 11,
        title: "AI in Agriculture, Climate Change, and Environmental Science",
        topics: [
          "Precision agriculture and crop yield prediction",
          "Climate modeling and weather forecasting",
          "Remote sensing and satellite imagery analysis"
        ]
      },
      {
        id: 12,
        title: "Bioinformatics, Computational Biology, and Genomics",
        topics: [
          "Drug discovery and protein structure prediction",
          "Genomic data sequencing and analysis",
          "Biological network modeling"
        ]
      },
      {
        id: 13,
        title: "MLOps, Edge Computing, and Scalable AI Systems",
        topics: [
          "Model deployment, monitoring, and lifecycle management",
          "AI specifically optimized for mobile and edge devices",
          "Automated Machine Learning (AutoML)"
        ]
      },
      {
        id: 14,
        title: "Educational Data Mining and Learning Analytics",
        topics: [
          "Personalized learning systems and adaptive testing",
          "Student performance prediction and intervention",
          "Analysis of massive open online course (MOOC) data"
        ]
      }
    ]
  },
  footer: {
    copyright: "© 2025 WiDS Bangladesh. All Rights Reserved.",
    disclaimer: "WiDS Bangladesh is an independent event organized by WiDS Ambassadors."
  }
};
