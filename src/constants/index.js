import {
  cih,
  alejandroSainz,
  jorgeHaidar,
  jorgePadron,
  lennisBatista,
  rachelLopez,
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
  love,
  lua,
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
    title: "Recommendations",
    path: "#recommendations",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const services = [
  {
    title: "💻 Software Engineer 💻",
    description:
      "As a Software Engineer, I specialize in designing and building efficient, reliable software solutions. My expertise lies in understanding user needs and transforming them into robust systems using the latest technologies. I focus on crafting scalable code that is easy to maintain, ensuring long-term stability and performance. Whether it's creating custom applications or improving existing software, I am passionate about solving complex problems.",
  },
  {
    title: "🎮 Game Programmer 🎮",
    description:
      "As a Game Programmer, I develop engaging gameplay mechanics, immersive environments, and compelling storylines. I bring creativity and precision to game development, blending technical skills with a passion for interactive experiences. My experience extends from prototyping game ideas to refining complex features, always with an eye for player satisfaction. Whether it's a casual mobile game or a large-scale project, I strive to create experiences that captivate and entertain.",
  },
  {
    title: "🌐 Full-Stack Developer 🌐",
    description:
      "As a Full-Stack Developer, I manage both front-end and back-end development to create fully-functional and visually appealing web applications. My work involves crafting responsive, user-friendly interfaces and ensuring the server-side logic supports seamless operation. From database management to API integration, I handle the full spectrum of development to bring ideas to life. My aim is to deliver comprehensive, high-quality solutions tailored to meet specific business needs.",
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
    name: "Unity",
    icon: unity,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "LOVE",
    icon: love,
  },
  {
    name: "Lua",
    icon: lua,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const projects = [
  {
    id: 7,
    name: "Knight, monsters and arena",
    description:
      "3D action videogame made with Unity. It's about a knight who fights with monsters in an arena. For every monster killed you earn score and monsters decrease player's life with each hit. To regain health, a health powerup will be spawned in the arena every certain amount of time. The game overs when the player's life decreases to zero.",
    skills: ["Game Development", "Game Design", "Unity", "C#", "3D"],
    projectLink: "https://www.youtube.com/embed/b8Kuf-7AVrk?si=8-BPPBIMx8gCrcDN",
    sourceCodeLink: "https://github.com/leonardo-collazo/knight-monsters-arena",
  },
  {
    id: 6,
    name: "Bea's gift",
    description:
      "2D video game 'endless runner' made with Unity for Android mobiles. It is about a girl who avoids different types of obstacles. The background changes every certain amount of points scored. The game ends when the girl hits an obstacle.",
    skills: ["Game Development", "Game Design", "Unity", "C#", "3D"],
    projectLink: "https://www.youtube.com/embed/A_MXcc4jNsI?si=gO4nuX9Gfe2-7ko8",
    sourceCodeLink: "https://github.com/leonardo-collazo/bea-gift",
  },
  {
    id: 5,
    name: "Super 50 Bros",
    description:
      "A classic platformer in the style of Super Mario Bros., using a free art pack and recreated with the LOVE 2D framework and Lua. The goal is to navigate various levels from a side perspective, where jumping onto enemies inflicts damage and jumping up into blocks typically breaks them or reveals a powerup.",
    skills: ["Game Development", "Game Design", "LOVE Framework", "Lua", "2D"],
    projectLink: "https://www.youtube.com/embed/qcnpv1CL_EM?si=jOeYc4kc5jDHYhcv",
    sourceCodeLink: "",
  },
  {
    id: 4,
    name: "Match 3",
    description:
      "Match-3 has taken various forms over the years and a video game similar to Candy Crush was recreated with the LOVE 2D framework and Lua. The goal of the game is to match any three tiles of the same variety by swapping any two adjacent tiles; when three or more tiles match in a line, those tiles add to the player's score and are removed from play, with new tiles coming from the ceiling to replace them.",
    skills: ["Game Development", "Game Design", "LOVE Framework", "Lua", "2D"],
    projectLink: "https://www.youtube.com/embed/txL_95dxFZ8?si=NaHR7n2Bel9-nHhy",
    sourceCodeLink: "",
  },
  {
    id: 3,
    name: "Breakout",
    description:
      "Originally developed by Atari in 1976 and it was recreated with the LOVE 2D framework and Lua. Breakout ditched the two-player mechanic in favor of a single-player game where the player, still controlling a paddle, was tasked with eliminating a screen full of differently placed bricks of varying values by deflecting a ball back at them.",
    skills: ["Game Development", "Game Design", "LOVE Framework", "Lua", "2D"],
    projectLink: "https://www.youtube.com/embed/qEGUnZVks0k?si=DGwbqQGbZOGW_EWz",
    sourceCodeLink: "",
  },
  {
    id: 2,
    name: "Flappy Bird",
    description:
      "A mobile game by Dong Nguyen that went viral in 2013 and it was recreated with the LOVE 2D framework and Lua. It uses a very simple but effective gameplay mechanic of avoiding pipes indefinitely by just tapping the screen, making the player's bird avatar flap its wings and move upwards slightly.",
    skills: ["Game Development", "Game Design", "LOVE Framework", "Lua", "2D"],
    projectLink: "https://www.youtube.com/embed/-PSYcqRnOxE?si=62QHofNRWJJDPDFZ",
    sourceCodeLink: "",
  },
  {
    id: 1,
    name: "Pong",
    description:
      "Pong is a video game released in 1972 by Atari and it was recreated with LOVE 2D framework and Lua. It involves two opposing players each controlling a platform to hit a ball until one of the two players misses the ball and loses. The players are actually two artificial intelligences (AI) created by me.",
    skills: ["Game Development", "Game Design", "LOVE Framework", "Lua", "2D"],
    projectLink: "https://www.youtube.com/embed/Q8_gXBVcjks?si=udCqWUSQpzx8EOmd",
    sourceCodeLink: "",
  },
];

const recommendations = [
  {
    id: 5,
    recommendation: `It is a pleasure to recommend Leonardo, who has been an exceptional collaborator on our joint academic and professional journey. His ability to work in a team, along with his capacity for learning and adaptation, have been fundamental in our formation and acquisition of experience across various projects.
    
    Although we have not worked together on specific projects, we have shared our experiences and challenges in software development, allowing me to appreciate his approach and dedication. His diligence and perfectionism in every assigned task are noteworthy, and these qualities, along with his willingness to learn and adapt, have been key to his progress.
    
    In terms of technical skills, Leonardo has shown significant development in frontend technologies, although his greatest experience and passion lies in game development. The implementation of a game as a personal project demonstrates his commitment and skills in this area, particularly highlighting his use of C# and Unity, as well as his application of mathematics, mechanics, physics, and collisions in game development.
    
    His creative approach to problem-solving and constant pursuit of mastery in new technologies are aspects that highlight his profile as a professional. Beyond his technical skills, Leonardo stands out for his strong sense of collaboration and communication, making him valuable in any team.`,
    name: "Jorge Haidar",
    image: jorgeHaidar,
    linkedInProfile: "https://www.linkedin.com/in/jorge-haidar/",
  },
  {
    id: 4,
    recommendation: `It's my pleasure to recommend Leonardo Collazo, who was an exceptional study partner and remains one of the most skilled programmers I've had the pleasure to work with. I collaborated closely with him on various application development projects during our Computer Engineering studies, utilizing technologies such as Java, PrimeFaces, JSF, Spring Boot, PostgreSQL. I've witnessed firsthand his proficiency and ease with these technologies.
    Additionally, Leonardo is passionate about 3D development and has independently created several incredible games as personal projects.
    His dedication to mastering new technologies and his creative approach to problem-solving were evident in every project we undertook together. Beyond technical skills, Leonardo excels in teamwork, demonstrating strong communication and collaboration abilities.`,
    name: "Lennis Batista",
    image: lennisBatista,
    linkedInProfile: "https://www.linkedin.com/in/lennis-batista-b45207271/",
  },
  {
    id: 3,
    recommendation: `I had the privilege of studying with Leonardo during our university years in computer engineering. He consistently demonstrated exceptional skills in software development and academic excellence.
    We collaborated at the Hydraulic Research Center (CIH) on a project to develop a 3D virtual laboratory using Unity. Leonardo was responsible for user interfaces, user experience, and 3D gameplay mechanics. His ability to tackle these technical challenges was crucial to the team's success, resulting in outstanding achievements.
    Leonardo consistently brings innovative solutions and technical proficiency to his work. He will undoubtedly contribute positively to any organization.`,
    name: "Alejandro Sainz",
    image: alejandroSainz,
    linkedInProfile: "https://www.linkedin.com/in/alejandro-sainz-4361b5271/",
  },
  {
    id: 2,
    recommendation: `I had the pleasure of studying with Leonardo Collazo for four years in the Software Engineering program at university. He possesses strong skills in front-end development, specifically with Angular, React, TypeScript, and Tailwind CSS. His thesis project, a 3D Virtual Hydraulics Lab developed using Unity and C#, is a testament to his technical expertise and innovative thinking.
    
    Leonardo was consistently one of the top students in our class, excelling in both the theoretical and practical aspects of software engineering. His ability to grasp complex concepts quickly and apply them effectively was evident through his high grades and outstanding project work. He was always willing to share his knowledge and help his peers, which made him a highly respected member of our cohort.
    
    I can confidently say he is a development guru whose work is consistently outstanding. He is a highly skilled, experienced, and helpful professional with a remarkably positive attitude. Leonardo's commitment to excellence, combined with his technical prowess and collaborative spirit, makes him an invaluable asset to any software engineering team. His work is not only of high quality but also demonstrates innovation and a deep understanding of the field.`,
    name: "Rachel Lopez",
    image: rachelLopez,
    linkedInProfile: "https://www.linkedin.com/in/rachel-l-0883091b3/",
  },
  {
    id: 1,
    recommendation: `I met Leonardo at university. From the beginning he showed great dedication and perseverance, obtaining one of the best averages in graduation. He is always eager to learn and constantly improving himself.
    
    It was a pleasure to work with him on the project that would later become his thesis, related to the operation and simulation of a hydraulics laboratory. At the beginning we were a team of 5 students in which Leonardo was in charge of the design and implementation of the user interface, as well as other components of the system.
    
    After finishing university he has focused on front-end development, learning new technologies like Angular and working on several personal projects.
    
    I completely recommend him for any job.`,
    name: "Jorge Padron",
    image: jorgePadron,
    linkedInProfile: "https://www.linkedin.com/in/jpadronp/",
  },
];

export { services, technologies, experiences, projects, recommendations };
