const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "About Me",
    link: "#aboutMe",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  {text: "Dreams", imgPath: "/images/flame (2).png" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  {text: "Dreams", imgPath: "/images/flame (2).png" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Coding Experience" },
  { value: 10, suffix: "+", label: "UI Designs Brought to Life" },
  { value: 5, suffix: "+", label: "Collaborative Team Projects" },
  { value: 5, suffix: "+", label: "Front-end Technologies Mastered" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/exp1.png", //AIESEC
  },
  {
    imgPath: "/images/logos/exp2.png", //Genesys
  },
  {
    imgPath: "/images/logos/exp4.png", //Upskill
  },
  {
    imgPath: "/images/logos/exp3.webp", //Tech Solutions
  },
  {
    imgPath: "/images/logos/exp1.png",
  },
  {
    imgPath: "/images/logos/exp2.png",
  },
  {
    imgPath: "/images/logos/exp4.png",
  },
  {
    imgPath: "/images/logos/exp3.webp",
  },
  {
    imgPath: "/images/logos/exp1.png",
  },
  {
    imgPath: "/images/logos/exp2.png",
  },
  {
    imgPath: "/images/logos/exp4.png",
  },
  {
    imgPath: "/images/logos/exp3.webp",
  },
  
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Fluid Interface Animations",
    desc: "I am quite good in using Framer Motion and GSAP to create smooth animations (I actually used GSAP for this website). My aim is to enhance user experience without overwhelming them.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "I meet deadlines one cup of coffee at a time. My communication style is clear and transparent throughout the project lifecycle. I try to build trust with my team members and team leads.",
  },
  {
    imgPath: "/images/time.png",
    title: "Independent & Efficient",
    desc: "I can work with little or no supervision — although I might come back to communicate when something seems unclear. Just show me where we're headed, and I’ll handle the details, giving my team steady updates, and the occasional good meme.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "ThreeJS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Another contract role, but one of the key things I learned from this role is the importance of collaboration between frontend and backend teams. I was able to work with backend developers in API integration, which made me understand better how frontend and backend systems interact.",
    imgPath: "/images/logos/exp3.webp",
    logoPath: "/images/logos/logo3.jpeg",
    title: "Frontend Developer",
    date: "April 2025 - June 2025",
    responsibilities: [
      "Built and deployed client-facing dashboards using React.js and TailwindCSS and Shadcn UI.",
      "Collaborated with backend teams to integrate GraphQL APIs, which allowed for faster data fetching.",
      "Implemented end-to-end testing (Cypress, Jest)",
    ],
  },
  {
    review: "This role was where I really put React to good use. It was a short contract role but I worked on some large-scale React applications, that focused on performance optimization and UI. I had to learn to write clean, modular code that is easy to understand and maintain because I had to work with other developers. This was also a nice work environment.",
    imgPath: "/images/logos/exp1.png",
    logoPath: "/images/logos/logo2.png",
    title: "Frontend Developer",
    date: "August 2024 - January 2025",
    responsibilities: [
      "Developed and optimized React.js applications, improving frontend performance by 15%.",
      "Integrated RESTful & GraphQL APIs, that optimized data retrieval and authentication flows (OAuth).",
      "Ensured cross-browser and cross-device compatibility using responsive web design principles.",
      "Participated in sprint stand-ups and team meetings, to ensure efficient development cycles.",  
    ],
  },
  {
    review: "This was also a trainig role, but I solidified my skills in React. I was able to work on more complex projects with other developers that required a deeper understanding of React concepts like state management, hooks and so on. This role opened me up to the possibilities in Web Development",
    imgPath: "/images/logos/exp2.png",
    logoPath: "/images/logos/logo1.png",
    title: "Frontend Developer",
    date: "January 2024 - October 2024",
    responsibilities: [
      "Developed interactive and responsive UI components using React.js and Tailwind CSS.",
      "Debugged and tested APIs using Jest, improving system reliability.",
      "Worked with a cross-functional team to align frontend implementation with business requirements.",
    ],
  },
  {
    review: "This was my first role as a frontend developer. I learned the basics of frontend development - HTML, CSS, and JavaScript, created my first webpage, button, list items and so on. This was an onsite role, and I had to sit through weekly meetings where I couldn't understand most of what they were saying.",
    imgPath: "/images/logos/exp4.png",
    logoPath: "/images/logos/logo4.png",
    title: "Frontend Intern",
    date: "September 2022 - August 2023",
    responsibilities: [
      "Developed UI components using HTML, CSS and Javascript.",
      "Collaborated with team members on group projects requirements and deliver solutions.",
      "Participated in code reviews and team meetings to enhance learning.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const aboutMe = [
  {
    heading: "Kharis Nkemena",
    id: "0",
    imgPath: "/images/kharis.png",
  },
  {
    heading: "Who is Kharis?",
    id: "1",
    text:
      "I am a Frontend Web Developer - incase that wasn't obvious by now :), and I just love things that work. So, I create beautiful, functional, and user-friendly websites. I turn complex problems into simpler problems (because simpler problems are much easier to solve) and my tool for solving problems is Web Development",
  },
  {
    heading: "My Motivation",
    id: "2",
    text:
      "I picked up coding during the lockdown. It was slow and a bit boring until I created my first 'Hello World' page. I realized that web development is more than just coding; it's about creating experiences that everyday people interact with, it's reproducing an idea in your head into what anyone can interact with. This realization fueled my passion and commitment to mastering web development",
  },
  {
    heading: "How I Work",
    id: "3",
    text:
      "I can really focus on a task when working alone, I think it's easier for me to manage myself that way. I enjoy working in teams too, especially with the occasional Slack banter. I believe that the best solutions come from different minds that think together, ideas flowing freely. I am always eager to learn from others and share what I know. This is one of the reasons I feel working with a team has an advantage",
  },
  {
    heading: "Where I am Headed",
    id: "4",
    text:
      "Right now, I’m just focused on building real-world projects that challenge my creativity and expand my skills. I like to be the best (or one of the bests) in what I do, I want to grow into a frontend engineer who designs experiences enjoy using",
  },
  {
    heading: "Some other stuff About Me",
    id: "5",
    text:
      "I may be one of the most boring people you'll meet. Asides from my facination with AI and working in Healthcare, I enjoy reading, listening to podcasts, and going for long walks just to think. I write too when I feel like it, but mostly about the things I think about",
  },
];

const socialImgs = [
  {
    name: "x",
    url: "https://x.com/kharis_sss",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kharis-nkemena/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "Github",
    url: "https://github.com/DrKhariss?tab=repositories",
    imgPath: "/images/github.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  aboutMe,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};