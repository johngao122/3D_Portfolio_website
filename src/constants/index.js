
import {
  git,
  github,
  javascript,
  react,
  linkedin,
  contact,
  python,
  aws,
  sql,
  excel,
  android,
  microcontroller,
  sticky_notes,
  calculator,
} from "../icons";

import { coding_lab } from "../images";

export const skills = [
  {
    imageurl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageurl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageurl: github,
    name: "Github",
    type: "Version Control",
  },
  {
    imageurl: javascript,
    name: "Javascript",
    type: "Frontend",
  },
  {
    imageurl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageurl: aws,
    name: "AWS",
    type: "Backend",
  },
  {
    imageurl: sql,
    name: "SQL",
    type: "Backend",
  },
  {
    imageurl: excel,
    name: "Excel",
    type: "Backend",
  },
  {
    imageurl: android,
    name: "Android",
    type: "Mobile",
  },
  {
    imageurl: microcontroller,
    name: "Microcontroller",
    type: "Embedded",
  },
];

export const experiences = [
  {
    title: "Coding Educator",
    company_name: "Coding Lab",
    icon: coding_lab,
    iconBG: "#000000",
    date: "Nov 2023 - January 2024",
    points: [
      "Planned and taught Python programming to primary school students with a focus on fundamental concepts, problem-solving, and real-world applications",
      "Designed and tailored dynamic lesson plans, interactive tutorials, and diverse assessments, addressing distinct learning styles and proficiency levels within a primary school classroom setting.",
      "Customized assessments, including formative and summative evaluations, to gauge students' understanding of Python and App Inventor concepts, gaining praise from manager.",
    ],
  },
];

export const socialinks = [
  {
    name: "Contact",
    iconurl: contact,
    link: "tel:+6587380894",
  },
  {
    name: "Github",
    iconurl: github,
    link: "https://github.com/johngao122",
  },
  {
    name: "LinkedIn",
    iconurl: linkedin,
    link: "https://www.linkedin.com/in/johngjh/",
  },
];

export const projects = [
  {
    iconurl: sticky_notes,
    theme:"btn-back-red",
    name: "Sticky Notes",
    description:"A simple sticky notes app made in react that allows users to create, edit, and delete notes. The app uses local storage to save notes.",
    link: "https://johngao122.github.io/sticky-notes-website/",
  },
  {
    iconurl: calculator,
    theme:"btn-back-green",
    name: "Calculator",
    description:"A simple calculator app made in react that allows users to perform basic arithmetic operations.",
    link: "https://johngao122.github.io/calculator-deploy/",
  },
  {
    iconurl:android,
    theme:"btn-back-blue",
    name:"LORA-based IoT Sensor and Application",
    description:"A LORA-based IoT sensor and application that monitors temperature and humidity data and sends it to a cloud server for display in an application via AWS.",
    link:"https://github.com/johngao122/FypApp"
  }
];
