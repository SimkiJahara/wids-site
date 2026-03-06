import { Calendar, MapPin, FileText, Users, Mic } from "lucide-react";

export const siteData = {
  general: {
    title: "WiDS Bangladesh 2025",
    appName: "WiDS Bangladesh",
    logo: "/logos/widsBD.jpeg", // Ensure you move your logo here
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  theme: {
    colors: {
      primary: "#FECB00", // Gold
      secondary: "#00B5E2", // Teal
      dark: "#1A1A1A", // Dark Grey
    },
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
      href: "#register",
    },
  },
  timeline: {
    title: "Important Dates",
    subtitle: "Mark your calendars for 2026",
    events: [
      {
        title: "Paper Submission Deadline",
        date: "Feb 20, 2026",
        newDate: "March 10, 2026",
        status: "upcoming",
      },
      {
        title: "Paper Notification",
        date: "April 20, 2026",
        status: "upcoming",
      },
      {
        title: "Camera Ready Deadline",
        date: "May 20, 2026",
        status: "upcoming",
      },
      { title: "Conference", date: "July 20, 2026", status: "upcoming" },
    ],
  },
  infoGrid: {
    cards: [
      {
        title: "Call for Papers",
        description:
          "Submit your original research. All accepted papers will be peer reviewed and indexed.",
        color: "bg-wids-gold",
        textColor: "text-wids-dark",
        link: "#cfp",
      },
      {
        title: "Program Detail",
        description:
          "Keynote speeches, poster presentations, panel discussions, and networking events.",
        color: "bg-wids-teal",
        textColor: "text-white",
        link: "#",
      },
      {
        title: "Registration (TBA)",
        description:
          "Secure your spot at WiDS Bangladesh 2026. Early bird discounts available soon.",
        color: "bg-wids-dark",
        textColor: "text-white",
        link: "#register",
      },
    ],
  },
  committee: {
    title: "Our Committees",
    subtitle: "The dedicated team behind WiDS Bangladesh 2026",
    sections: [
      {
        id: 1,
        name: "Steering Committee",
        members: [
          {
            name: "Chair: Prof. Dr. Abdul Hannan Chowdhury",
            role: "Vice Chancellor",
            affiliation: "North South University",
            image:
              "/Commitee names/3. Steering Committee/1. Abdul Hannan Chowdhury, VC, North South University.png",
          },
          {
            name: "Prof. Nasar U. Ahmed",
            role: "Pro Vice-Chancellor",
            affiliation: "North South University",
            image: "/Commitee names/3. Steering Committee/1.2. nasar.jpg",
          },
          {
            name: "Prof. Dr. Abdur Rob Khan",
            role: "Treasurer",
            affiliation: "North South University",
            image:
              "/Commitee names/3. Steering Committee/2.Prof. Abdur Rob Khan, ProVC (IC) and treasurer.jpg",
          },
          {
            name: "Prof. Dr. Md. Mofazzal Hossain",
            role: "Pro-VC",
            affiliation: "SouthEast University",
            image: "/Commitee names/3. Steering Committee/3.Mofazzal.jpg",
          },
          {
            name: "Prof. Dr. Khawza Iftekhar Uddin Ahmed",
            role: "Pro-VC",
            affiliation: "Green University",
            image:
              "/Commitee names/3. Steering Committee/4.Prof. Khawza Iftekhar Uddin Ahmed,.png",
          },
          {
            name: "Prof. Dr. Moushumi Sharmin",
            role: "Professor & Graduate Program Advisor",
            affiliation: "Western Washington University, USA",
            image:
              "/Commitee names/3. Steering Committee/5. Prof. Dr. Moushumi Sharmin, Professor & Graduate Program Advisor, Western Washington University, USA.jpeg",
          },
          {
            name: "Prof. Dr. Farhana Zulkernine",
            role: "Coordinator, Cognitive Science Program",
            affiliation: "Queen's University, Canada",
            image: "/Commitee names/3. Steering Committee/farhana.jpg",
          },
          {
            name: "Prof. Dr. Tanzima Hashem",
            role: "Head, Department of CSE",
            affiliation: "BUET",
            image:
              "/Commitee names/3. Steering Committee/7. Prof. Dr. Tanzima Hashem, Head, Department of CSE, BUET.jpg",
          },
          {
            name: "Dr. Tanzima Islam",
            role: "Associate Professor, Computer Science",
            affiliation: "Texas State University, USA",
            image:
              "/Commitee names/3. Steering Committee/8.Dr. Tanzima Islam, Associate Professor, Department of Computer Science, Texas State University, USA.jpg",
          },
          {
            name: "Dr. Sarah Masud Preum",
            role: "Assistant Professor, Computer Science",
            affiliation: "Dartmouth College, USA",
            image:
              "/Commitee names/3. Steering Committee/9. Dr. Sarah Masud Preum, Assistant Professor, Department of Computer Science, Dartmouth College, USA.jpg",
          },
          {
            name: "Dr. Maitraye Das",
            role: "Assistant Professor, Computer Science",
            affiliation: "Northeastern University, Boston, MA, USA",
            image: "/Commitee names/3. Steering Committee/10. Maitraye Das.jpg",
          },
        ],
      },
      {
        id: 2,
        name: "Organizing Committee",
        members: [
          {
            name: "Chair: Prof. Dr. Md. Shazzad Hosain",
            role: "Dean, SEPS",
            affiliation: "North South University",
            image:
              "/Commitee names/1. Organizing commitee/1. Prof. Dr. Md. Shazzad Hosain, Dean, SEPS, NSU.jpg",
          },
          {
            name: "Co-Chair: Prof. Dr. Mohammad Abdul Matin",
            role: "Chair, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/1. Organizing commitee/2. Prof. Dr. Mohammad Abdul Matin, Chair, Department of ECE, NSU.jpg",
          },
          {
            name: "Prof. Dr. Rashedur Rahman",
            role: "Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/1. Organizing commitee/6. Prof. Dr. Rashedur Rahman, Department of ECE, NSU.png",
          },
          {
            name: "Prof. Dr. Nova Ahmed",
            role: "Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/1. Organizing commitee/3. Prof. Dr. Nova Ahmed, Department of ECE, NSU.jpg",
          },
          {
            name: "Prof. Dr. Rajesh Palit",
            role: "Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/1. Organizing commitee/4. Prof. Dr. Rajesh Palit, Department of ECE, NSU .jpg",
          },
          {
            name: "Prof. Dr. Abul Lais M S Haque",
            role: "Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/1. Organizing commitee/5. Prof. Dr. Abul Lais M S Haque, Department of ECE, NSU.jpg",
          },
        ],
      },
      {
        id: 3,
        name: "Technical Program Committee (TPC)",
        members: [
          {
            name: "Chair: Dr. Sumaiya Tabassum Nimi",
            role: "Assistant Professor, Department of ECE",
            affiliation: "North South University | WiDS Ambassador 2026",
            image:
              "/Commitee names/2. Technical Program Committee/1. Dr. Sumaiya Tabassum Nimi, Assistant Professor, Department of ECE, NSU.jpg",
          },
          {
            name: "Prof. Dr. Sifat Momen",
            role: "Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/2. Technical Program Committee/2. Prof. Dr. Sifat Momen,.jpg",
          },
          {
            name: "Prof. Dr. M. Sohel Rahman",
            role: "Professor, Department of CSE",
            affiliation: "BUET",
            image:
              "/Commitee names/2. Technical Program Committee/3. Prof. Dr. M. Sohel Rahman, Professor, Department of CSE, BUET.jpg",
          },
          {
            name: "Prof. Dr. Swakkhar Shatabda",
            role: "Professor, Department of CSE",
            affiliation: "BRAC University",
            image:
              "/Commitee names/2. Technical Program Committee/4. Prof. Dr. Swakkhar Shatabda, Professor, Department of CSE, BRAC University.jpg",
          },
          {
            name: "Dr. Nabeel Mohammed",
            role: "Associate Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/2. Technical Program Committee/5. Dr. Nabeel Mohammed, Associate Professor, Department of ECE, NSU.jpg",
          },
          {
            name: "Dr. Shafin Rahman",
            role: "Associate Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/2. Technical Program Committee/6. Dr. Shafin Rahman , Associate Professor, Department of ECE, NSU.jpg",
          },
          {
            name: "Dr. Novia Nurain",
            role: "Assistant Professor, Department of CSE",
            affiliation: "BUET",
            image:
              "/Commitee names/2. Technical Program Committee/7. Novia Nurain.jpeg",
          },
          {
            name: "Dr. Adnan Arefeen",
            role: "Assistant Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/2. Technical Program Committee/8. Dr. Adnan Arefeen, Assistant Professor, Department of ECE, NSU.png",
          },
          {
            name: "Dr. Nusrat Jahan Lisa",
            role: "Assistant Professor, Department of ECE",
            affiliation: "North South University",
            image:
              "/Commitee names/2. Technical Program Committee/9. Dr. Nusrat Jahan Lisa, Assistant Professor, Department of ECE, NSU.jpg",
          },
        ],
      },
    ],
  },
  newsletter: {
    title: "Stay Updated",
    description:
      "Don't miss important announcements, deadline extensions, and speaker reveals.",
    placeholder: "Enter your email address",
    buttonText: "Notify Me",
  },
  hero: {
    title: "WiDS Bangladesh 2026",
    subtitle: "Women in Data Science",
    location: "Dhaka, Bangladesh",
    status: "July 20, 2026",
    description:
      "Inspiring and educating data scientists worldwide, regardless of gender, and supporting women in the field.",
    ctaPrimary: { label: "Registration (TBA)", href: "#register" },
    ctaSecondary: { label: "Submit Paper", href: "#cfp", highlight: true },
    backgroundImage:
      "https://placehold.co/1920x1080/1A1A1A/333333?text=Dhaka+Skyline",
  },
  about: {
    title: "Our Mission",
    content:
      "WiDS Bangladesh is an independent event that is organized by WiDS Ambassadors as part of the annual WiDS Worldwide conference organized by Stanford University and an estimated 200+ locations worldwide, which features outstanding women doing outstanding work in the field of data science.",
  },
  cfp: {
    title: "Call for Papers",
    subtitle: "Peer Reviewed",
    description:
      "All submissions must be original, unpublished, and not currently under review by other conferences or journals.",
    guidelines: [
      {
        label: "Paper Format",
        text: "Manuscripts must be prepared using the standard Conference Proceedings template.",
      },
      {
        label: "Page Limit",
        text: "Papers should be 4 to 6 pages in length, including all figures, tables, and references.",
      },
      {
        label: "Layout",
        text: "Use the arXiv two-column template. Details and template files are available at",
        linkText: "arXiv (Two Column)",
        linkUrl:
          "https://github.com/myst-templates/arxiv_two_column?tab=readme-ov-file",
      },
      { label: "File Type", text: "Submissions must be in PDF format." },
    ],
    warning:
      "Papers exceeding the page limit or deviating from the formatting requirements may be rejected without review.",
    deadline: "Submission Deadline: March 10, 2026",
  },
  speakers: {
    title: "Featured Speakers",
    subtitle: "Hear from industry leaders and academic pioneers",
    list: [
      {
        id: 1,
        name: "TBA",
        role: "",
        org: "",
        image:
          "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "",
      },
      {
        id: 2,
        name: "TBA",
        role: "",
        org: "",
        image:
          "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "",
      },
      {
        id: 3,
        name: "TBA",
        role: "",
        org: "",
        image:
          "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "",
      },
      {
        id: 4,
        name: "TBA",
        role: "",
        org: "",
        image:
          "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
        bio: "",
      },
    ],
  },
  agenda: {
    title: "Event Schedule",
    status: "Schedule Coming Soon",
    note: "Stay tuned for a full day of keynotes, technical talks, and workshops.",
  },
  sponsors: {
    title: "Our Sponsors",
    list: [
      {
        name: "North South University",
        logo: "/logos/North_South_University.png", // Ensure you move your logo here
        tier: "Platinum",
        url: "http://www.northsouth.edu",
      },
    ],
  },
  scope: {
    title: "Scope of the Conference",
    subtitle:
      "We invite submissions on a broad range of topics. The scope includes, but is not limited to, the following tracks:",
    tracks: [
      {
        id: 1,
        title: "Data Science and Machine Learning Foundations",
        topics: [
          "Supervised, unsupervised, and semi-supervised learning",
          "Mathematical optimization for deep learning",
          "Statistical learning theory and probabilistic models",
        ],
      },
      {
        id: 2,
        title:
          "Artificial Intelligence for Healthcare, Sustainability, and Social Good",
        topics: [
          "Predictive analytics for public health and epidemiology",
          "AI for disaster management and humanitarian aid",
          "Sustainable energy optimization and green AI",
        ],
      },
      {
        id: 3,
        title: "Responsible, Ethical, and Trustworthy AI",
        topics: [
          "Bias detection, fairness, and algorithmic accountability",
          "Explainable AI (XAI) and model interpretability",
          "AI governance, policy, and regulation",
        ],
      },
      {
        id: 4,
        title: "Big Data Analytics, Data Engineering, and Cloud AI",
        topics: [
          "Scalable data pipelines and data warehousing",
          "Real-time stream processing and analytics",
          "Serverless machine learning and cloud-native AI architectures",
        ],
      },
      {
        id: 5,
        title: "AI in Smart Cities, IoT, and Cyber-Physical Systems",
        topics: [
          "Intelligent traffic management and transportation systems",
          "Sensor data fusion and analysis",
          "AI for smart grid and energy efficiency",
        ],
      },
      {
        id: 6,
        title:
          "Emerging Trends: Generative AI, Quantum AI, and Advanced AI Systems",
        topics: [
          "Large-scale image and text synthesis (GANs, Diffusion Models)",
          "Quantum machine learning algorithms",
          "Neuro-symbolic AI and reasoning",
        ],
      },
      {
        id: 7,
        title: "Natural Language Processing (NLP) and Large Language Models",
        topics: [
          "Bangla language processing (Translation, Sentiment Analysis, OCR)",
          "LLM fine-tuning, prompting, and application development",
          "Speech recognition and conversational AI",
        ],
      },
      {
        id: 8,
        title: "Computer Vision, Pattern Recognition, and Image Processing",
        topics: [
          "Object detection, tracking, and recognition",
          "Medical image segmentation and analysis",
          "Video analytics and surveillance systems",
        ],
      },
      {
        id: 9,
        title: "Cybersecurity, Privacy-Preserving AI, and Federated Learning",
        topics: [
          "Adversarial machine learning and defense mechanisms",
          "Differential privacy and secure multi-party computation",
          "Decentralized learning frameworks",
        ],
      },
      {
        id: 10,
        title: "Financial Data Science, Fintech, and Business Intelligence",
        topics: [
          "Fraud detection and anti-money laundering (AML)",
          "Algorithmic trading and credit risk modeling",
          "Customer behavior analysis and churn prediction",
        ],
      },
      {
        id: 11,
        title: "AI in Agriculture, Climate Change, and Environmental Science",
        topics: [
          "Precision agriculture and crop yield prediction",
          "Climate modeling and weather forecasting",
          "Remote sensing and satellite imagery analysis",
        ],
      },
      {
        id: 12,
        title: "Bioinformatics, Computational Biology, and Genomics",
        topics: [
          "Drug discovery and protein structure prediction",
          "Genomic data sequencing and analysis",
          "Biological network modeling",
        ],
      },
      {
        id: 13,
        title: "MLOps, Edge Computing, and Scalable AI Systems",
        topics: [
          "Model deployment, monitoring, and lifecycle management",
          "AI specifically optimized for mobile and edge devices",
          "Automated Machine Learning (AutoML)",
        ],
      },
      {
        id: 14,
        title: "Educational Data Mining and Learning Analytics",
        topics: [
          "Personalized learning systems and adaptive testing",
          "Student performance prediction and intervention",
          "Analysis of massive open online course (MOOC) data",
        ],
      },
    ],
  },
  footer: {
    copyright: "© 2025 WiDS Bangladesh. All Rights Reserved.",
    disclaimer:
      "WiDS Bangladesh is an independent event organized by WiDS Ambassadors.",
  },
};
