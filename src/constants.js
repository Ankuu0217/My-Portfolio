// Skills Section Logo's
import btrackLogo from './assets/tech_logo/images.jpeg'
import skillLaddersLogo from './assets/tech_logo/images2.jpeg'
import unifiedMentorLogo from './assets/tech_logo/loader.png'
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import ecommerceLogo from './assets/tech_logo/E-Commerece.png'
import cartLogo from './assets/tech_logo/Cart.png'
import patientPortalLogo from './assets/tech_logo/Portal.png'
import aureviaLogo from './assets/tech_logo/Aurevia.png'

import gitmLogo from './assets/tech_logo/Gitm.png'
import heeraLogo from './assets/tech_logo/Heera.png'

import mediaSearchLogo from "./assets/tech_logo/mediaSearchLogo.png";
import authLogo from "./assets/tech_logo/authLogo.png";





// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    //   { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    //   { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    //   { name: 'GSAP', logo: gsapLogo },
    //   { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    //   { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    //   { name: 'Firebase', logo: firebaseLogo },
    //   { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
    //   { name: 'C', logo: cLogo },
    //   { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
    //   { name: 'Python', logo: pythonLogo },
    //   { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    //   { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
      {
    id: 1,
    img: skillLaddersLogo, // add company logo here
    role: "Frontend Developer Intern",
    company: "Skill Ladders",
    date: "Aug 2025 - Oct 2025",
    desc: "Developed dynamic frontend pages using React.js, improving UI responsiveness and application performance. Focused on writing clean, reusable components and implementing efficient state management practices.",
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Reusable Components",
      "State Management",
    ],
  },
    {
    id: 2,
    img: unifiedMentorLogo, // add company logo here
    role: "Web Development Intern",
    company: "Unified Mentor",
    date: "May 2024 - Jun 2024",
    desc: "Worked on HTML, CSS, JavaScript, and basic React to build and enhance client projects. Focused on responsive UI, cross-browser compatibility, and mobile-first design while contributing to real-world development tasks.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Basics",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Mobile-First Design",
    ],
  },


 {
    id: 0,
    img: btrackLogo, // add company logo here
    role: "Cloud Computing Intern",
    company: "B-Track India Pvt. Ltd.",
    date: "Oct 2025 - Present",
    desc: "Working on cloud infrastructure, deployment automation, and scalable architectures. Gaining hands-on experience with cloud platforms, CI/CD workflows, and server management while implementing best practices for performance, security, and cost optimization.",
    skills: [
      "Cloud Computing",
      "CI/CD",
      "Deployment Automation",
      "Server Management",
      "Performance Optimization",
      "Security Best Practices",
    ],
  },
];

  
export const education = [
  {
    id: 0,
    img: gitmLogo, // add your institute logo import
    school: "Global Institute of Technology and Management",
    date: "2021 - 2025",
    grade: "7.8 CGPA",
    desc: "Completed Bachelor of Technology (B.Tech) in Computer Science Engineering. Gained strong knowledge of core computer science subjects, full stack web development, data structures, and programming fundamentals. Actively worked on academic and self-driven projects focusing on real-world problem solving.",
    degree: "Bachelor of Technology - Computer Science and Engineering",
  },
  {
    id: 1,
    img: heeraLogo, // same school logo can be reused
    school: "Heera Public School",
    date: "2020 - 2021",
    grade: "82%",
    desc: "Completed higher secondary education (Class 12) with a focus on Science stream. Built a strong foundation in analytical thinking, problem solving, and basic programming concepts.",
    degree: "CBSE(XII)-PCM with Computer Science",
  },
  {
    id: 2,
    img: heeraLogo,
    school: "Heera Public School",
    date: "2018 - 2019",
    grade: "81%",
    desc: "Completed secondary education (Class 10). Developed interest in computer science and technology, laying the groundwork for future studies in software development.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

 export const projects = [
  {
    id: 0,
    title: "E-Commerce React Application",
    description:
      "A fully responsive multi-page e-commerce web application built with React.js. Features include product listing, product details, cart management, and checkout flow. Global state management is handled using Redux Toolkit, and APIs are integrated using Axios to ensure smooth data handling and scalability.",
    image: ecommerceLogo, // add your image import
    tags: [
      "React JS",
      "Redux Toolkit",
      "JavaScript",
      "HTML",
      "CSS",
      "Axios",
      "REST API",
    ],
    github: "https://github.com/yourusername/ecommerce-react-app",
    webapp: "https://your-ecommerce-app.netlify.app",
  },

  {
    id: 1,
    title: "Aurevia Healthcare Website",
    description:
      "A professional healthcare-focused website designed and developed with a clean and elegant UI. Includes service sections for medical consultations, diagnostics, and treatment offerings. Implemented patient registration using email or registration number and ensured full responsiveness across all devices.",
    image: aureviaLogo, // add your image import
    tags: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
    ],
    github: "https://github.com/yourusername/aurevia-healthcare",
    webapp: "https://aurevia-healthcare.netlify.app",
  },

  {
    id: 2,
    title: "Shopping Cart & Checkout System",
    description:
      "A standalone cart and checkout module built as part of an e-commerce workflow. Users can add, remove, and update product quantities with real-time price calculation. Focused on reusable components, clean state management, and performance optimization.",
    image: cartLogo, // add your image import
    tags: [
      "React JS",
      "Redux Toolkit",
      "JavaScript",
      "State Management",
      "Component Design",
    ],
    github: "https://github.com/yourusername/react-cart-system",
    webapp: "https://react-cart-system.netlify.app",
  },

  {
    id: 3,
    title: "Healthcare Patient Registration Portal",
    description:
      "A responsive patient registration portal built for healthcare use cases. Allows patients to register using email or registration number, ensuring a smooth and user-friendly onboarding experience. Emphasis on form validation, accessibility, and mobile-first design.",
    image: patientPortalLogo, // add your image import
    tags: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "Form Validation",
      "Mobile-First Design",
    ],
    github: "https://github.com/yourusername/patient-registration-portal",
    webapp: "https://patient-registration-portal.netlify.app",
  },
  {
  id: 4,
  title: "Media Search App",
  description:
    "A dynamic media search application that allows users to search for images, videos, and GIFs using third-party APIs. Implemented Redux Toolkit for efficient global state management and optimized API handling.",
  image: mediaSearchLogo, // import your image
  tags: [
    "React JS",
    "Redux Toolkit",
    "API Integration",
    "JavaScript",
    "State Management",
    "Responsive Design",
  ],
  github: "https://github.com/yourusername/media-search-app",
  webapp: "https://your-media-search-app.netlify.app",
},
{
  id: 5,
  title: "User Authentication System",
  description:
    "A full-stack authentication system with secure user registration and login. Includes email verification and password reset functionality using OTP. Integrated Nodemailer for email services and JWT for authentication.",
  image: authLogo, // import your image
  tags: [
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "JWT",
    "Nodemailer",
    "Authentication",
    "REST API",
  ],
  github: "https://github.com/yourusername/user-auth-system",
  webapp: "https://your-auth-app.netlify.app",
}
];
