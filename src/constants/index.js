import {
  cih,
  angular,
  csharp,
  css,
  git,
  html,
  javascript,
  reactjs,
  tailwind,
  threejs,
  typescript,
  unity,
} from "../assets";

export const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Tech",
    path: "#tech",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const services = [
  {
    title: "Single Page Application (SPA) Development",
    description:
      "Create dynamic web applications that offer a desktop-like experience using frameworks such as React, Angular, Tailwind CSS and others",
  },
  {
    title: "Development of Reusable Components",
    description:
      "Create reusable interface components that can be used in different parts of the application. Implement component libraries to improve development efficiency.",
  },
  {
    title: "User Interface (UI) Development",
    description:
      "Create attractive and functional interfaces using HTML, CSS and JavaScript. Implement responsive designs to ensure applications work well on devices of different sizes and resolutions.",
  },
  {
    title: "User Experience (UX) Development",
    description:
      "Improve the user experience by implementing usability and accessibility principles. Conduct usability tests and make adjustments based on user feedback.",
  },
  {
    title: "Animations and Interactive Effects",
    description:
      "Implement animations and interactive effects using CSS and JavaScript to enhance the user experience. Use libraries like Framer Motion or frameworks like Tailwind CSS for advanced animations.",
  },
  {
    title: "Integration with APIs and Back-End Services",
    description:
      "Connect the user interface with back-end services using RESTful APIs and others. Handle asynchronous communication between the front-end and back-end.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize the performance of web applications to ensure fast loading times and a smooth user experience. Implement optimization techniques such as lazy loading, file minification, and efficient resource usage.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Ensure applications work correctly across different browsers and versions. Conduct tests and make adjustments to handle browser discrepancies.",
  },
  {
    title: "Version Control Implementation",
    description:
      "Use version control systems like Git and GitHub to manage source code and collaborate with other developers. Maintain a history of changes and facilitate collaboration on projects.",
  },
];

const experiences = [
  {
    id: 3,
    title: "Unity 3D Developer",
    companyName: "Hydraulic Research Center",
    icon: cih,
    iconBg: "#000",
    date: "September 2023 - December 2023",
    description: `The "Process Virtualization" research group is developing a new 3D version of the MultiH.Virtual, a virtual hydraulic laboratory. This will improve the user experience by being able to work in a 3D environment compared to the previous version which was in 2D.
    
    We are a team of 3 students, including myself, who continue to develop the new version of MultiH.Virtual using Unity 3D and C#. At this stage my roles in the team are to continue developing and improving the user interface and the internal lab mechanics related with the lab practices.`,
  },
  {
    id: 2,
    title: "Unity 3D Developer",
    companyName: "Hydraulic Research Center",
    icon: cih,
    iconBg: "#000",
    date: "February 2023 - May 2023",
    description: `The "Process Virtualization" research group is developing a new 3D version of the MultiH.Virtual, a virtual hydraulic laboratory. This will improve the user experience by being able to work in a 3D environment compared to the previous version which was in 2D.
    
    We are a team of 3 students, including myself, who continue to develop the new version of MultiH.Virtual using Unity 3D and C#. At this stage my roles in the team are to continue developing the user interface and the internal mechanics of the lab.`,
  },
  {
    id: 1,
    title: "Unity 3D Developer",
    companyName: "Hydraulic Research Center",
    icon: cih,
    iconBg: "#000",
    date: "June 2022 - July 2022",
    description: `The "Process Virtualization" research group is developing a new 3D version of MultiH.Virtual, a virtual hydraulic laboratory. This will improve the user experience by being able to work in a 3D environment compared to the previous version which was in 2D.
    
    We are a team of 3 students, including myself, who started the development of the new version of MultiH.Virtual using Unity 3D and C#. At this stage my roles in the team are to develop the user interface and the internal mechanics of the lab.`,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Git",
    icon: git,
  },
];

const projects = [
  {
    id: 3,
    name: "Knight, monsters and arena",
    description:
      "3D action videogame made with Unity. It's about a knight who fights with monsters in an arena. For every monster killed you earn score and monsters decrease player's life with each hit. To regain health, a health powerup will be spawned in the arena every certain amount of time. The game overs when the player's life decreases to zero.",
    skills: ["Game Development", "Game Design", "Unity", "C#", "3D"],
    projectLink: "https://www.youtube.com/embed/b8Kuf-7AVrk?si=8-BPPBIMx8gCrcDN",
    sourceCodeLink: "https://github.com/leonardo-collazo/knight-monsters-arena",
  },
  {
    id: 2,
    name: "Bea's gift",
    description:
      "2D video game 'endless runner' made with Unity for Android mobiles. It is about a girl who avoids different types of obstacles. The background changes every certain amount of points scored. The game ends when the girl hits an obstacle.",
    skills: ["Game Development", "Game Design", "Unity", "C#", "3D"],
    projectLink: "https://www.youtube.com/embed/A_MXcc4jNsI?si=gO4nuX9Gfe2-7ko8",
    sourceCodeLink: "https://github.com/leonardo-collazo/bea-gift",
  },
  {
    id: 1,
    name: "Super 50 Bros",
    description:
      "A classic platformer in the style of Super Mario Bros., using a free art pack and recreated with the LOVE framework and Lua. The goal is to navigate various levels from a side perspective, where jumping onto enemies inflicts damage and jumping up into blocks typically breaks them or reveals a powerup.",
    skills: ["Game Development", "Game Design", "LOVE Framework", "Lua", "2D"],
    projectLink: "https://www.youtube.com/embed/qcnpv1CL_EM?si=jOeYc4kc5jDHYhcv",
    sourceCodeLink: "",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };
