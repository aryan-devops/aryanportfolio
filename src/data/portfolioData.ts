export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  stack: string[];
  metrics?: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  notes: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  date?: string;
  description: string;
  focus: string;
}

export const portfolioData = {
  personal: {
    name: "Aryan Pandey",
    title: "Full-Stack Developer & AI Systems Engineer",
    roleDescription: "Full-Stack Web Developer with hands-on experience building and deploying production web applications using Java, JavaScript, React, Node.js, Express.js, PHP, MySQL, and MongoDB. Hands-on experience deploying and networking multiple Docker containers on AWS, with strong foundation in Data Structures and Algorithms, C++, and Python.",
    location: "Raipur, Chhattisgarh, India",
    email: "aryan000pandey@gmail.com",
    phone: "+91 9977228924",
    availability: "Available for Internships & Full-Time Roles",
    github: "https://github.com/aryan-devops",
    linkedin: "https://linkedin.com/in/aryan-pandey-4581921a0",
    stats: [
      { label: "Production Projects", value: "10+" },
      { label: "Research Papers", value: "2" },
      { label: "Certifications", value: "7" },
      { label: "Concurrent Quiz Users", value: "100+" }
    ]
  },

  resume: {
    title: "Verified Curriculum Vitae • Aryan Pandey",
    name: "ARYAN PANDEY",
    location: "Raipur, Chhattisgarh, India",
    phone: "+91 9977228924",
    email: "aryan000pandey@gmail.com",
    linkedin: "https://linkedin.com/in/aryan-pandey-4581921a0",
    linkedinDisplay: "linkedin.com/in/aryan-pandey-4581921a0",
    summary:
      "Full-Stack Web Developer with hands-on experience building and deploying production web applications using Java, JavaScript, React, Node.js, Express.js, PHP, MySQL, and MongoDB. Hands-on experience deploying and networking multiple Docker containers on AWS, with strong foundation in Data Structures and Algorithms, C++, and Python. Published researcher in AI-driven cybersecurity and medical image analysis, bringing strong analytical and problem-solving skills to complex engineering challenges. Skilled at writing clean, maintainable code and collaborating with teams to ship reliable, high-performing web products.",
    coreSkills: {
      languagesAndBackend:
        "Java, Data Structures & Algorithms, C++, Python, JavaScript, PHP, VB.NET, Node.js, Express.js, MongoDB, MySQL, RESTful APIs",
      frontendAndMobile:
        "React, MERN Stack, Android, HTML5, CSS3, Responsive Web Design, Cross-Browser Compatibility, API Integration, SEO Fundamentals",
      cloudAndDevops:
        "Docker (multi-container deployment & networking), Amazon Web Services (AWS - EC2), Firebase, Git, Version Control, Vercel, Netlify, Clean Code Practices, Code Review, Machine Learning, Deep Learning"
    },
    experience: [
      {
        role: "Web Developer Intern",
        company: "Exbyte Technology",
        location: "Bilaspur, Chhattisgarh",
        period: "March 2025 – May 2025",
        points: [
          "Built dynamic website features for live client projects using Node.js, JavaScript, and PHP, contributing directly to production environments.",
          "Improved UI responsiveness and page performance, reducing page load time by 40-50 percent through code and asset optimization.",
          "Used Git for version control across all feature branches, collaborating with senior developers through code review before deployment."
        ]
      }
    ],
    projects: [
      {
        title: "E-Learning System",
        stack: "JavaScript, Node.js, MySQL",
        points: [
          "Built an interactive online learning platform with 10 modules; presented at Smart India Hackathon for a Nabha-focused initiative."
        ]
      },
      {
        title: "Online Proctor-Based Quizzing System",
        stack: "Node.js, Firebase, Docker, AWS",
        points: [
          "Engineered a secure online quiz system with automated proctoring to prevent malpractice, supporting 100+ student users during assessments.",
          "Deployed and networked multiple Docker containers for database services on AWS EC2, configuring container-to-container communication alongside a Vercel-hosted frontend and Firebase backend."
        ]
      },
      {
        title: "E-Commerce Platform",
        stack: "PHP, MySQL, JavaScript",
        points: [
          "Built a full-stack platform with product listing, category filtering, user authentication, and cart management."
        ]
      },
      {
        title: "Annadata - AI Agricultural Advisor",
        stack: "Groq AI, JavaScript, Weather API",
        points: [
          "Built a crop-advisory app integrating Groq AI and real-time weather data for location-based recommendations."
        ]
      }
    ],
    publications: [
      {
        title: "AI-Driven Cybersecurity Solutions for Real-Time Threat Detection",
        venue: "IRJMETS (International Research Journal of Modernization in Engineering Technology and Science)",
        date: "Peer Reviewed",
        description:
          "Published in IRJMETS. Peer-reviewed research applying machine learning and AI to real-time cyber threat detection."
      },
      {
        title: "Machine Learning and Deep Learning Approaches for Medical Image Analysis and Disease Detection Using X-ray and MRI",
        venue: "IJSREM (International Journal of Scientific Research in Engineering and Management)",
        date: "April 2026",
        description:
          "Published in IJSREM, April 2026. Peer-reviewed and indexed research exploring machine learning and deep learning models for medical image analysis to enhance early disease detection and diagnostic accuracy."
      }
    ],
    education: [
      {
        degree: "MCA",
        school: "Amity University, Raipur",
        grade: "CGPA: 7.40 (2nd Sem)",
        period: "August 2025 – June 2027 (Expected)",
        points:
          "Coursework spanning software engineering, data structures & algorithms, machine learning, and cybersecurity; Cyber Security Awareness Programme; participated in multiple hackathons including Smart India Hackathon."
      },
      {
        degree: "BCA",
        school: "Disha College, Kota",
        grade: "79%",
        period: "October 2021 – March 2024",
        points:
          "Coursework in web development, data structures & algorithms, programming fundamentals, and database systems; presented on online safety and web security; recognized as Mr. Fresher and in AI-themed debate contests."
      }
    ],
    schooling: [
      { title: "Class XII", grade: "78%" },
      { title: "Class X", grade: "76%" }
    ],
    certifications: [
      "Git Version Control (Great Learning)",
      "Core PHP and Android (Rays Education)",
      "Java (Great Learning)",
      "Facial Recognition with Python (GUVI)",
      "HTML5/CSS3/JavaScript (BIOS Education)",
      "RESTful API Best Practices (Infosys)",
      "Interpretable Machine Learning Applications"
    ]
  },

  apiData: {
    profile: {
      name: "Aryan Pandey",
      role: "Full-Stack Developer & Systems Builder",
      status: "Actively seeking Software Engineering & Full-Stack Internships",
      location: "Raipur, Chhattisgarh, India",
      education: "MCA at Amity University Raipur (CGPA 7.40, Graduating 2027)",
      coreStrengths: [
        "Full-Stack Web Architecture (Java, React, Node.js)",
        "Docker Multi-Container Networking on AWS EC2",
        "Applied AI Integration (Groq, LLMs)",
        "Security & Automated Proctoring Systems"
      ]
    },
    stack: {
      frontend: ["React", "MERN Stack", "HTML5", "CSS3", "Responsive Design", "API Integration"],
      backend: ["Java", "Node.js", "Express.js", "PHP", "C++", "Python", "RESTful APIs", "DSA"],
      databases: ["MySQL", "MongoDB", "Firebase", "Supabase"],
      cloudAndDevops: ["Docker (Multi-Container)", "AWS (EC2)", "Git", "CI/CD", "Vercel", "Netlify"],
      aiAndTools: ["Groq AI", "Machine Learning", "Deep Learning", "Claude Code", "Antigravity"]
    },
    research: [
      {
        journal: "IRJMETS",
        title: "AI-Driven Cybersecurity Solutions for Real-Time Threat Detection",
        keyFocus: "Autonomous real-time anomaly detection, intrusion prevention & adaptive neural classifiers"
      },
      {
        journal: "IJSREM",
        date: "April 2026",
        title: "Machine Learning and Deep Learning Approaches for Medical Image Analysis and Disease Detection Using X-ray and MRI",
        keyFocus: "Convolutional neural vision pipelines for radiological pathology localization"
      }
    ]
  },

  projects: [
    {
      id: "proctor-quiz",
      title: "Online Proctor-Based Quizzing System",
      tagline: "Secure online quiz system with automated proctoring, Docker multi-container networking on AWS EC2.",
      description: "Engineered a secure online quiz system with automated proctoring to prevent malpractice, supporting 100+ student users. Deployed and networked multiple Docker containers for database services on AWS EC2, configuring container-to-container communication alongside a Vercel-hosted frontend and Firebase backend.",
      category: "Full-Stack & Cloud",
      stack: ["Node.js", "Firebase", "Docker", "AWS EC2", "React"],
      metrics: "100+ Students • Multi-Container AWS",
      image: "/projects/quizerr.jpg",
      liveUrl: "https://proctor-based-quiz.vercel.app/",
      repoUrl: "https://github.com/aryan-devops/proctor-based-quiz",
      featured: true
    },
    {
      id: "annadata-ai",
      title: "Annadata - AI Agricultural Advisor",
      tagline: "Predictive crop intelligence engine powered by Groq AI and real-time weather telemetry.",
      description: "Built a crop-advisory application integrating Groq AI and real-time weather data for location-based agricultural recommendations, optimizing crop yield and pesticide scheduling.",
      category: "AI & Data",
      stack: ["Groq AI", "JavaScript", "Weather API", "React", "Node.js"],
      metrics: "Groq AI Inference • Live Weather API",
      image: "/projects/annadata.jpg",
      liveUrl: "https://annadataweb.vercel.app/",
      repoUrl: "https://github.com/aryan-devops/annadata",
      featured: true
    },
    {
      id: "yesha-ecommerce",
      title: "E-Commerce Platform",
      tagline: "Commercial retail platform with category filtering, user auth, and cart management.",
      description: "Built a full-stack platform with product listing, category filtering, user authentication, and shopping cart management with clean MySQL schemas.",
      category: "Full-Stack Web",
      stack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      metrics: "Full-Stack Cart & Catalog",
      image: "/projects/yesha.jpg",
      liveUrl: "https://yeshaenterprises-delta.vercel.app/",
      repoUrl: "https://github.com/aryan-devops/yeshaenterprises",
      featured: true
    },
    {
      id: "elearning-system",
      title: "E-Learning System",
      tagline: "Interactive online learning platform with 10 modules presented at Smart India Hackathon.",
      description: "Built an interactive online learning platform featuring 10 structured educational modules; presented at Smart India Hackathon for a Nabha-focused educational initiative.",
      category: "EdTech & Hackathon",
      stack: ["JavaScript", "Node.js", "MySQL", "HTML5/CSS3"],
      metrics: "Smart India Hackathon • 10 Modules",
      image: "/projects/quizerr.jpg",
      liveUrl: "https://proctor-based-quiz.vercel.app/",
      repoUrl: "https://github.com/aryan-devops",
      featured: false
    }
  ] as Project[],

  experience: [
    {
      role: "Web Developer Intern",
      company: "Exbyte Technology",
      location: "Bilaspur, Chhattisgarh",
      period: "March 2025 – May 2025",
      type: "Internship",
      highlights: [
        "Built dynamic website features for live client projects using Node.js, JavaScript, and PHP, contributing directly to production environments.",
        "Improved UI responsiveness and page performance, reducing page load time by 40-50 percent through code and asset optimization.",
        "Used Git for version control across all feature branches, collaborating with senior developers through code review before deployment."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Applications & Software Engineering",
      institution: "Amity University",
      period: "August 2025 – June 2027 (Expected)",
      location: "Raipur, Chhattisgarh",
      grade: "CGPA: 7.40 (2nd Sem)",
      notes: "Coursework spanning software engineering, data structures & algorithms, machine learning, and cybersecurity; Cyber Security Awareness Programme; participated in multiple hackathons including Smart India Hackathon."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications",
      institution: "Disha College",
      period: "October 2021 – March 2024",
      location: "Kota, Raipur",
      grade: "79%",
      notes: "Coursework in web development, data structures & algorithms, programming fundamentals, and database systems; presented on online safety and web security; recognized as Mr. Fresher and in AI-themed debate contests."
    }
  ] as EducationItem[],

  publications: [
    {
      id: "pub-1",
      title: "AI-Driven Cybersecurity Solutions for Real-Time Threat Detection",
      journal: "IRJMETS",
      date: "Peer Reviewed",
      description: "Published in IRJMETS (International Research Journal of Modernization in Engineering Technology and Science). Peer-reviewed research applying machine learning and AI to real-time cyber threat detection.",
      focus: "Cybersecurity & Machine Learning"
    },
    {
      id: "pub-2",
      title: "Machine Learning and Deep Learning Approaches for Medical Image Analysis and Disease Detection Using X-ray and MRI",
      journal: "IJSREM",
      date: "April 2026",
      description: "Published in IJSREM (International Journal of Scientific Research in Engineering and Management), April 2026. Peer-reviewed and indexed research exploring machine learning and deep learning models for medical image analysis to enhance early disease detection and diagnostic accuracy.",
      focus: "Deep Learning & Medical Computer Vision"
    }
  ] as PublicationItem[],

  certifications: [
    { name: "Git Version Control", issuer: "Great Learning", category: "DevOps & Tools" },
    { name: "Core PHP and Android Development", issuer: "Rays Education", category: "Backend & Mobile" },
    { name: "Java Programming", issuer: "Great Learning", category: "Core Software" },
    { name: "Facial Recognition with Python", issuer: "GUVI", category: "Computer Vision" },
    { name: "HTML5 / CSS3 / Modern JavaScript", issuer: "BIOS Education", category: "Frontend" },
    { name: "RESTful API Best Practices", issuer: "Infosys", category: "API Architecture" },
    { name: "Interpretable Machine Learning Applications", issuer: "Technical Certification", category: "AI & ML" }
  ],

  skillCategories: [
    {
      title: "Languages & Core",
      skills: ["Java", "Data Structures & Algorithms", "C++", "Python", "JavaScript", "PHP", "VB.NET", "SQL"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React", "MERN Stack", "Android", "HTML5", "CSS3", "Responsive Web Design", "Cross-Browser Compatibility", "API Integration", "SEO Fundamentals"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs", "Clean Code Practices"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker (Multi-Container Networking)", "AWS (EC2)", "Firebase", "Git Version Control", "Vercel", "Netlify", "Code Review"]
    },
    {
      title: "AI & Research",
      skills: ["Machine Learning", "Deep Learning", "Groq AI", "Antigravity", "Claude Code", "Cybersecurity Anomaly Detection"]
    }
  ]
};
