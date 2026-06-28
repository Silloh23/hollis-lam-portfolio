/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, WorkExperience, EducationItem, SkillCategory, ExtracurricularItem } from './types';

export const personalInfo = {
  name: "Hollis Lam",
  title: "Computer Science Student & Software Engineer",
  email: "hlhl22@bath.ac.uk",
  phoneUk: "+44 07565269652",
  phoneHk: "+852 97083727",
  linkedin: "https://www.linkedin.com/in/hollis-l-95a014371",
  github: "https://github.com/Silloh23",
  bio: "Computer Science student at the University of Bath with active experience in Frontend Development and AI/ML. Proven track record of delivering production-ready features, building high-accuracy machine learning pipelines, and engineering full-stack solutions. Passionate about marrying robust technical architecture with responsive, accessible user interfaces."
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "Haskell", "GDScript"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Vite", "scikit-learn", "NumPy", "Manim", "Optuna", "FastAPI", "Express", "Node.js"]
  },
  {
    category: "Technologies & Cloud",
    skills: ["Git", "Docker", "AWS", "PyTorch", "REST APIs", "NPM", "Streamlit", "Chart.js", "PostgreSQL", "Supabase"]
  },
  {
    category: "Spoken Languages",
    skills: ["English (Native)", "Cantonese (Fluent)", "Mandarin (Conversational)"]
  }
];

export const workExperienceData: WorkExperience[] = [
  {
    id: "exp-zoftable",
    company: "Zoftable",
    role: "Frontend Developer",
    location: "Remote",
    duration: "2026",
    bullets: [
      "Accelerated delivery of 3 production pages by translating stakeholder design requirements into reusable, accessible React components, eliminating cross-browser rendering inconsistencies across all target environments.",
      "Raised code quality and onboarding speed by actively participating in peer code reviews and adhering to ESLint, Prettier, and Git branching conventions within a professional Agile development workflow."
    ],
    skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "Git", "Agile"]
  },
  {
    id: "exp-aws",
    company: "Amazon Web Services (AWS)",
    role: "Internship | AI & ML",
    location: "Remote",
    duration: "August 2023",
    bullets: [
      "Improved classification model accuracy by 24% across a 46,000-sample dataset by engineering an ensemble pipeline (logistic regression, decision trees, neural networks) with Sklearn and Optuna hyperparameter tuning.",
      "Delivered the project 7 days ahead of a 4-week deadline by coordinating a cross-timezone 3-person team, allocating tasks to individual technical strengths and maintaining daily async standups.",
      "Communicated model performance to New Zealand executives in a client-facing pitch at programme close, translating statistical results into clear business recommendations for a non-technical audience."
    ],
    skills: ["Python", "scikit-learn", "Optuna", "Machine Learning", "AWS", "Team Coordination"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-bath",
    institution: "University of Bath",
    degree: "BSc (Hons) Computer Science with professional placement",
    duration: "Sept 2025 - June 2029",
    bullets: [
      "Relevant Coursework: Algorithms & Data Structures, Artificial Intelligence, Machine Learning, Computer Systems Architecture (C/Arduino), Relational Databases, Discrete Mathematics, Linear Algebra."
    ]
  },
  {
    id: "edu-kings",
    institution: "The King's School Canterbury",
    degree: "A-Levels & GCSEs",
    duration: "Sept 2021 - June 2025",
    bullets: [
      "A-Levels: Maths (A), Computer Science (A), Physics (B), Further Maths (C)",
      "GCSEs: 6 Grade 9s, 2 Grade 8s, 3 Grade 7s"
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-betabot",
    title: "BetaBot",
    subtitle: "AI Climbing Route Planner",
    description: "An end-to-end AI system that converts climbing wall images into physical/feasible climbing routes using computer vision, graph algorithms, and biomechanical reasoning.",
    bullets: [
      "Built an end-to-end AI system that converts climbing wall images into feasible climbing routes using computer vision, graph algorithms, and biomechanical reasoning.",
      "Fine-tuned a YOLOv8 detector on 180+ annotated images, achieving 74.1% mAP, 78.5% precision, and 73.9% recall for climbing hold detection.",
      "Modeled climbing walls as reachability graphs of 300+ holds and implemented an A* planner with custom cost functions incorporating reachability, stability, and movement efficiency.",
      "Developed an interactive visualization interface that renders hold detections, graph connectivity, optimal routes, pose overlays, and explainable beta guidance in real time.",
      "Reduced annotation effort by 80%+ through an iterative auto-labeling pipeline."
    ],
    tags: ["Python", "YOLOv8", "NetworkX", "FastAPI", "Streamlit", "OpenCV"],
    category: "AI & ML",
    year: "2026",
    githubUrl: "https://github.com/Silloh23/Betabot",
    impactHighlight: "Hold detection & A* route planner"
  },
  {
    id: "proj-f1",
    title: "Probabilistic F1 Race Strategy",
    subtitle: "Race Optimization System",
    description: "A Monte Carlo simulation engine and Bayesian optimization system designed to find optimal pit configurations and tyre degradation strategies under stochastic race conditions.",
    bullets: [
      "Reduced strategy evaluation uncertainty by designing a Monte Carlo simulation engine (100–5,000 rollouts per strategy) in Python, modelling tyre degradation, pit-stop loss, and lap-time variance under stochastic conditions.",
      "Identified optimal pit configurations with 95% confidence intervals by integrating Bayesian optimisation (Optuna) across thousands of race rollouts, surfacing statistically robust strategy rankings.",
      "Improved result interpretability by shipping an interactive Streamlit analytics dashboard, enabling dynamic strategy comparison with real-time parameter adjustment."
    ],
    tags: ["Python", "NumPy", "Optuna", "Machine Learning", "Streamlit", "Monte Carlo"],
    category: "AI & ML",
    year: "2026",
    githubUrl: "https://github.com/Silloh23/f1_race_sim",
    impactHighlight: "95% confidence intervals in Bayesian opt"
  },
  {
    id: "proj-spam",
    title: "Spam Email Classifier",
    subtitle: "From-Scratch Naive Bayes Classifier",
    description: "A mathematical implementation of Multinomial Naive Bayes built entirely from scratch with Laplace smoothing and log-space arithmetic to prevent floating-point underflow.",
    bullets: [
      "Achieved 88.6% held-out accuracy by implementing Multinomial Naive Bayes from scratch in NumPy with Laplace smoothing and log-space arithmetic, eliminating dependency on ML libraries for core inference.",
      "Eliminated data leakage and improved evaluation integrity by engineering a deduplication pipeline using exact-match and cosine-similarity checks across train/test splits.",
      "Validated generalisation across 5-fold stratified cross-validation with 95% confidence intervals, guarding against overfitting on an imbalanced dataset.",
      "Produced an animated visual explainer using Manim to communicate classifier internals, demonstrating ability to convey technical concepts clearly."
    ],
    tags: ["Python", "NumPy", "Machine Learning", "Naive Bayes", "Manim"],
    category: "AI & ML",
    year: "2026",
    impactHighlight: "88.6% accuracy implemented from scratch"
  },
  {
    id: "proj-medtracker",
    title: "Full Stack Medical Tracker",
    subtitle: "Health Tracking & Schema Design",
    description: "A full-stack medical recording app designed with high-integrity database normalization (3NF) and customized integration layer bridging frontend state with a remote relational database.",
    bullets: [
      "Delivered a full-stack health tracking application across 5 data domains by leading relational schema design (ER diagrams, 3NF normalisation) in PostgreSQL via Supabase.",
      "Iterated through 3 feedback cycles with a 10-person Agile team.",
      "Unblocked front-end database access by engineering a Java-Python bridge to proxy Supabase queries, resolving a critical integration gap between the UI layer and backend with no native Java SDK available."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Python", "Node.js", "PostgreSQL", "Supabase", "Agile"],
    category: "Full Stack",
    year: "2026",
    impactHighlight: "3NF Normalization & custom Java-Python bridge"
  }
];

export const extracurricularData: ExtracurricularItem[] = [
  {
    id: "extra-hackerrank",
    title: "HackerRank Orchestrate",
    role: "Multimodal AI Claims Pipeline",
    duration: "June 2026",
    bullets: [
      "Ranked 988/2,039 teams that shipped a working AI agent (15,295 registered) by building a multimodal claim verification pipeline orchestrating Llama 4 Scout via Groq with a rule-based decision engine.",
      "Achieved up to 95% field-level accuracy on a labelled evaluation set by designing a deterministic rule engine that separates VLM visual inference from structured claim validation logic.",
      "Optimised inference throughput across repeated evaluations by implementing SHA-256 image caching and multi-provider LLM orchestration (Groq, OpenAI) with JSON schema validation layers."
    ],
    tags: ["Python", "Groq", "LLaMA 4 Scout", "AI Agents", "Multimodal"],
    githubUrl: "https://github.com/Silloh23/damage-claim-verifier"
  },
  {
    id: "extra-imc",
    title: "IMC Prosperity 4",
    role: "Quantitative Trader Challenge",
    duration: "May 2026",
    bullets: [
      "Ranked top 8.5% globally (~40,000 participants) and 1st in Round 1 manual trading by implementing EMA-driven mean-reversion and market-making strategies in Python across multiple asset classes.",
      "Maximised PnL within exchange constraints by optimising position sizing, risk limits, and strategy entry zones per product."
    ],
    tags: ["Python", "Quantitative Finance", "Trading Strategies", "Optimization"],
    githubUrl: "https://github.com/Silloh23/Huangpu-River-Trading"
  },
  {
    id: "extra-bathhack",
    title: "Bath Hack",
    role: "Godot & Genetic AI Developer",
    duration: "March 2026",
    bullets: [
      "Trained racing agents to navigate unseen tracks by implementing a Genetic Algorithm pipeline (selection, crossover, mutation) in Godot/GDScript, achieving measurable fitness improvements.",
      "Improved agent generalisation by integrating procedural track generation, reducing overfitting to fixed environments."
    ],
    tags: ["Godot", "GDScript", "Genetic Algorithms", "Procedural Generation"],
    githubUrl: "https://github.com/Silloh23/bot-racers"
  },
  {
    id: "extra-taekwondo",
    title: "ITF Taekwondo Club",
    role: "Active Member",
    duration: "2025 - Present",
    bullets: [
      "Progressed from white to yellow belt within 7 months through consistent disciplined practice, developing perseverance, focus, and the ability to receive and act on structured feedback."
    ],
    tags: ["Discipline", "Focus", "Athletics"]
  },
  {
    id: "extra-hkpass",
    title: "HKPASS",
    role: "Sub-Committee Member",
    duration: "2025 - 2026",
    bullets: [
      "Supported the planning and delivery of public affairs and social service events as part of a student-led society."
    ],
    tags: ["Leadership", "Community Service", "Event Planning"]
  },
  {
    id: "extra-sims",
    title: "Software Engineering Job Simulations",
    duration: "2023",
    bullets: [
      "Completed virtual simulations spanning cryptography (password hashing/Hashcat), cloud architecture (AWS Elastic Beanstalk), Java unit testing, and React development (Skyscanner Backpack library)."
    ],
    tags: ["Cryptography", "Cloud Architecture", "Unit Testing", "React"]
  },
  {
    id: "extra-bassoon",
    title: "Bassoon — ABRSM Grade 7",
    duration: "2015 - 2021",
    bullets: [
      "Classical music performance and instrument mastery under structured examination guidelines."
    ],
    tags: ["Classical Music", "ABRSM", "Performance"]
  }
];
