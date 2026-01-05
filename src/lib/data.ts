
export const navLinks = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Contact', hash: '#contact' },
];

export const intro = {
  name: "Hi, I'm Yassine Ouhadi.",
  title: "Software Engineer, SDET",
  description: "As a Software Engineer currently working as an SDET, I specialize in ensuring the delivery of high-quality systems across the entire SDLC and STLC. I combine TDD and BDD approaches for robust functional validation, while also focusing on performance and availability testing in cloud environments. My work emphasizes implementing reliability patterns, and I have a strong enthusiasm for applying Model-Based Engineering (MBE) methodologies to solve complex problems.",
};

export const about = {
  title: 'About Me',
  description1: 'As a Software Engineer currently working as an SDET, I specialize in ensuring the delivery of high-quality systems across the entire SDLC and STLC. I combine TDD and BDD approaches for robust functional validation, while also focusing on performance and availability testing in cloud environments. My work emphasizes implementing reliability patterns, and I have a strong enthusiasm for applying Model-Based Engineering methodologies to solve complex problems.',
  description2: '',
};

export const education = {
  school: 'ENSIAS',
  degree: 'Software Engineering',
  years: '2021 - 2024',
};

export const experiences = [
  {
    role: 'Quality Assurance & Release Management',
    company: 'Societe Generale Corporate and Investment Banking',
    period: 'Dec. 2024 – Present',
    description: 'Responsible for the comprehensive quality assurance of high-frequency, distributed trading services in a cloud environment. This includes a blend of functional, automated, and performance testing, conducted in close collaboration with development, prod, quant, and ops teams.',
  },
  {
    role: 'Test Automation Engineer',
    company: 'Orange Business',
    period: 'Feb. 2024 – Dec. 2024',
    description: 'Engineered a full-scale E2E and regression testing framework for a critical legacy application, significantly enhancing product quality and release velocity. Pioneered the adoption of Cypress with a BDD methodology, unifying technical and functional teams. Authored a generic npm package to standardize the Page Object Model (POM) and orchestrated the entire automated testing lifecycle within GitLab CI/CD, from Xray API integration to rich reporting in Jira and Kibana.',
  },
];

export const skills = [
  {
    category: 'Software Engineering',
    list: [
      'System Design',
      'Microservices',
      'Domain-driven Design',
      'Java',
      'TypeScript',
      'Spring Boot',
      'Node.js',
      'REST APIs',
    ],
  },
  {
    category: 'Model-driven Engineering',
    list: [
      'Langium / EMF Cloud',
      'Eclipse EMF / Ecore',
      'GLSP',
      'Model Transformations',
      'Code Generation',
      'DSL design',
      'Language Server Protocol',
    ],
  },
  {
    category: 'DevOps & Cloud',
    list: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD (GitHub Actions/Jenkins)',
      'AWS (EKS)',
      'Helm',
      'Azure',
      'Linux',
      'etcd',
      'SSL',
      'kubectl',
      'Load Balancing',
      'Tracing',
      'Networking',
    ],
  },
  {
    category: 'Test Automation & QA',
    list: [
      'Cypress',
      'Selenium',
      'JUnit',
      'End-to-end testing',
      'Test automation frameworks',
      'Contract Testing',
      'Test Coverage',
      'Stress Testing',
      'Fault Tolerance',
      'Circuit Breakers',
      'k6',
      'Test Load Patterns',
    ],
  },
  {
    category: 'Machine Learning & Computer Vision',
    list: [
      'Python',
      'LLMs',
      'RAG',
      'TensorFlow / PyTorch',
      'Model Context Protocol',
      'Agents',
      'LangChain',
      'LangGraph',
      'A2A',
      'Fine-tuning',
    ],
  },
  {
    category: 'Architecture & Integration',
    list: [
      'UML & Design Patterns',
      'Event-driven systems',
      'RabbitMQ',
      'Service Mesh',
      'Relational Databases',
      'NoSQL Databases',
    ],
  },
];

export const projects = [
  {
    title: 'Feature Assured',
    description:
      'VS Code extension for running and validating Cypress .feature files with real-time validation, inline results, and dynamic step explorer. Includes Docker support and CI/CD integration.',
    tags: ['TypeScript', 'VS Code API', 'Cypress', 'Docker', 'CI/CD'],
    imageUrl: '/projects/feature-assured.png',
    source: 'https://github.com/YassineOuhadi/feature-assured',
  },
  {
    title: 'Cypress Generic Package',
    description:
      'A comprehensive component library providing ready-to-use generic objects and helpers for UI and API testing with Cypress. Features include POM objects, BDD steps, and integration with multiple testing methodologies.',
    tags: ['Cypress', 'BDD', 'Docker', 'CI/CD', 'npm', 'CLI'],
    imageUrl: '/projects/cypress-package.png',
    source: 'https://github.com/YassineOuhadi/cypress-generic-package',
  },
  {
    title: 'Jgen',
    description:
      'A Domain Specific Language for generating Spring Boot RESTful APIs. Features include syntax highlighting, code completion, validation, tree view synchronization, and a web-based Monaco editor for code generation.',
    tags: ['Eclipse EMF', 'Langium', 'LSP', 'Monaco Editor', 'Docker'],
    imageUrl: '/projects/jgen.png',
    source: 'https://github.com/YassineOuhadi/Jgen',
  },
  {
    title: 'Agent based Graph DSL',
    description:
      'A model-driven framework for designing and deploying autonomous AI agent graphs. Enables visual composition of agent workflows, execution with LangGraph, and simplifies the creation of complex, multi-agent systems.',
    tags: ['Model-Based Engineering', 'LLM', 'AI Agents', 'LangGraph'],
    imageUrl: '/projects/agent-graph.png',
    source: 'https://github.com/YassineOuhadi/agentgraph',
  },
];

export const certifications = [
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    status: 'In Progress',
  },
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    status: 'In Progress',
  },
  {
    name: 'Big Data Engineer Certificate',
    status: 'Completed',
  },
  {
    name: 'Artificial Intelligence Analyst Certificate',
    status: 'Completed',
  },
];


export const contact = {
  title: "Let's Build Together",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.",
  email: 'yassinouhadi@gmail.com',
  github: 'https://github.com/YassineOuhadi',
  linkedin: 'https://linkedin.com/in/yassine-ouhadi',
};
