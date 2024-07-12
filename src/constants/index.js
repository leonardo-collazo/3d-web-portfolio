import {
  cih,
  angular,
  css,
  git,
  html,
  javascript,
  reactjs,
  tailwind,
  threejs,
  typescript,
  carrent,
  jobit,
  tripguide,
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
    name: "git",
    icon: git,
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

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
