import project1 from "../assets/projects/Ecars.png";
import project2 from "../assets/projects/Happy.png";
import project3 from "../assets/projects/Chat.png";
import project4 from "../assets/projects/EWA.png";
import project5 from "../assets/projects/EnM.png";
import project6 from "../assets/projects/Calendar.png";
import baykar from "../assets/company/baykar.png";
import sbm from "../assets/company/sbm.jpg";

export const HERO_CONTENT = `Eda Nur Mutlu is a distinguished fourth-year Computer Engineering student at Marmara University, where she has consistently demonstrated exceptional academic performance, securing the top position in her department. She has acquired valuable industry experience through internships in full-stack development, during which she contributed to projects utilizing Spring Boot and React frameworks. Her commitment to professional development is exemplified by her proactive engagement in diverse projects, through which she continually enhances her technical proficiency and maintains currency with emerging technologies in the field.`;

export const ABOUT_TEXT = `Eda Nur Mutlu is a dedicated computer engineering student with a track record of academic excellence and practical experience in software development. Her internships at Sigorta Bilgi ve Gözetim Merkezi and ongoing experience at Baykar Makina have honed her skills in full-stack development, particularly with Java, Spring Boot, and React. She is actively involved in projects like the TEKNOFEST Smart Transportation Competition, where her team's Exit Way Assist application reached the finalist stage. Eda's diverse skill set includes Java, Spring Boot, C, JavaScript, .Net, and Python, complemented by proficiency in Git and GitHub practices. She is passionate about leveraging technology to create innovative solutions and is eager to contribute to cutting-edge projects in the field of computer engineering.`;

export const EXPERIENCES = [
  {
    title: "Long Term Human Machine Interaction Software Technologies Intern",
    company: "Baykar Makina Sanayi ve Ticaret A.Ş.",
    icon: baykar,
    iconBg: "#FFFFFF",
    date: "October 2024 - Current",
    description: `It is aimed to complete a compulsory summer internship in Baykar intranet software department with .Net and React programming languages.`,
    technologies: ["React", "JavaScript", "ASP.NET", "MsSQL"],
  },
  {
    title: "Summer Term Human Machine Interaction Software Technologies Intern",
    company: "Baykar Makina Sanayi ve Ticaret A.Ş.",
    icon: baykar,
    iconBg: "#FFFFFF",
    date: "July 2024 - September 2024",
    description: `A compulsory summer internship was completed in the Baykar intranet software department, focusing on .Net and React programming languages.`,
    technologies: ["React", "JavaScript", "ASP.NET", "MsSQL"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Sigorta Bilgi ve Gözetim Merkezi",
    icon: sbm,
    iconBg: "#FFFFFF",
    date: "July 2023 - September 2023",
    description: `During my internship at Sigorta Bilgi ve Gözetim Merkezi, I developed a web project using Java, Spring Boot, JavaScript, HTML, CSS, and MySQL. My key contributions included optimizing database queries, enhancing backend validation for security, and implementing comprehensive JUnit tests.".`,
    technologies: ["Java", "Spring Boot", "JUnit", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Cars - Electric Cars Sales Website",
    image: project1,
    description:
      "E-Cars is an e-commerce platform for electric vehicles that allows users to filter by brand, model, price, and year, and enjoy personalized experiences with secure login. Smart vehicle suggestions enhance the shopping process.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Sanity", "Stripe"],
    link: "https://github.com/edamuutlu/Electric-Cars-E-Commerce-Website",
  },
  {
    title: "Insurance Management System",
    image: project2,
    description:
      "A web application that enables users to manage vehicle, health, and housing insurances, allowing them to list information, get quotes, and renew policies.",
    technologies: ["Java Spring Boot", "Angular.js", "JavaScript", "MySQL"],
    link: "https://github.com/edamuutlu/Insurance-Management-Project",
  },
  {
    title: "Chat Website",
    image: project3,
    description:
      "A fully functional chat website that allows users to browse albums, play songs, and manage playback, replicating core functionalities of a music streaming service.",
    technologies: ["React", "JavaScript", "Firebase"],
    link: "https://github.com/edamuutlu/React-Firebase-Chat-Website",
  },
  {
    title: "Calendar Website",
    image: project6,
    description:
      "A calendar application that helps users manage events and schedules effectively.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    link: "https://github.com/edamuutlu/google-calendar-react",
  },
  {
    title: "EWA - Exit Way Assist (Teknofest)",
    image: project4,
    description:
      "An assistive application for managing book reviews, enabling users to add, edit, rate, and comment on books.",
    technologies: ["MongoDB", "Express.js", "Vue.js", "Node.js", "Nodemailer"],
    link: "https://www.teknofest.org/tr/yarismalar/akilli-ulasim-yarismasi/",
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website that showcases projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Nodemailer"],
    link: "https://github.com/edamuutlu/My-Portfolio-Website",
  }
];


export const CONTACT = {
  address: "İstanbul",
  email: "edamuutlu@gmail.com",
};