import { nanoid } from "nanoid"

// HEAD DATA
export const headData = {
  title: "Raphael Discky", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my portfolio website", // e.g: Welcome to my website
}

// HERO DATA
export const heroData = {
  title: "",
  name: "",
  subtitle: "",
  cta: "more about me",
}

// ABOUT DATA
export const aboutData = {
  img: "discky-photo.jpg",
  paragraphOne:
    "I am currently a student at University of Gadjah Mada pursuing bachelor degree in Computer Science. I am interested and passionate about working in the tech industry.",
  paragraphTwo:
    "With a thirst to learn, I am motivated to always go outside of my knowledge and explore new tools and technologies. This drove me to build several projects especially projects that related to Web Development and Machine Learning.",
  paragraphThree: "",
  resume:
    "https://drive.google.com/file/d/1j03_xRXtQdFu30DtpFyxnBfmB7uVi4sw/view?usp=sharing", // if no resume, the button will not show up
}

// EXPERIENCES DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: "viska.png",
    company: "VISKA",
    jobTitle: "Software Developer",
    date: "October 2021 - Present",
    descriptionOne:
      "- Developed and maintained web and mobile applications for clients from Europe as a remote software engineer",
    descriptionTwo:
      "- Worked as a full-stack developer mainly on React ecosystems like react-native and next",
    descriptionThree: "",
  },
  {
    id: nanoid(),
    img: "joints-logo.png",
    company: "JOINTS UGM",
    jobTitle: "Software Developer",
    date: "November 2020 - April 2021",
    descriptionOne:
      "- Worked on front end development with React and Tailwind CSS",
    descriptionTwo:
      "- Implemented UI/UX designs with component styling and animations",
  },
]

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "myvatn.png",
    title: "Mývatn Nature Baths",
    info: "Myvatn is a ticketing web application for Myvatn Nature Bath, one of the most visited tourist attraction for hot lagoon in Iceland. Worked as full stack developer to develop the frontend and managed the API using Bokun for the transactions process.",
    info2: "",
    url: "https://myvatn.vercel.app/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "joints.png",
    title: "JOINTS 2021",
    info: "A web application to handle information and registration for events and competitions organized by the Student Association of Computer Science University of Gadjah Mada.",
    info2: "",
    url: "https://joints.id/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "tokopaedi.png",
    title: "Tokopaedi",
    info: "Tokopaedi is an e-commerce web application with full functionality such as signup, ordering, payment, etc.",
    info2: "",
    url: "",
    repo: "https://github.com/raphaeldiscky/tokopaedi", // if no repo, the button will not show up
  },
]

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "zundria.putra@gmail.com",
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/raphaeldiscky/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/raphaeldiscky",
    },
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/r_discky",
    },
    {
      id: nanoid(),
      name: "whatsapp",
      url: "https://api.whatsapp.com/send/?phone=6287839912020&text&app_absent=0",
    },
  ],
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
}
