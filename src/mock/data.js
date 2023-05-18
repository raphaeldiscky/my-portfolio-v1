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
    "As a recent graduate from the University of Gadjah Mada with a bachelor's degree in Computer Science, I am enthusiastic about pursuing a career in the tech industry as a Software Engineer.",
  paragraphTwo:
    "Driven by a constant thirst for knowledge, I consistently strive to explore new tools and technologies beyond my existing skill set, leading to several successful projects in Software Development and Machine Learning.",
  paragraphThree: "",
  resume:
    "https://docs.google.com/document/d/1NoQH9zMCiGYH5cH25JlMJu_j8vWVACvhRnoWIm-ln3Y/edit?usp=sharing", // if no resume, the button will not show up
  portfolio:
    "https://www.canva.com/design/DAFiOhSOtxQ/02VuFQ8GZ-xjcP2ffoUN9w/view?utm_content=DAFiOhSOtxQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
}

// EXPERIENCES DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: "viska.png",
    company: "VISKA",
    jobTitle: "Software Engineer",
    date: "Oct 2021 - Present",
    descriptionOne:
      "- Developed and maintained web and mobile applications as a remote software developer",
    descriptionTwo:
      "- Worked on full-stack development mainly on React ecosystems",
    descriptionThree: "",
  },
  {
    id: nanoid(),
    img: "bangkit.png",
    company: "BANGKIT",
    jobTitle: "Machine Learning Student",
    date: "Feb 2022 - Jul 2022",
    descriptionOne:
      "- Bangkit is a Google-led academy designed to produce high-calibre, technical talent for world-class, Indonesian technology companies and startups.",
    descriptionTwo:
      "- Selected as one of the participants from 63.000+ interested applicants to join Bangkit - a Google led, machine learning program",
    descriptionThree:
      "- Selected as the best team at Company Capstone Project in collaboration with Traveloka",
  },
  {
    id: nanoid(),
    img: "joints-logo.png",
    company: "JOINTS UGM",
    jobTitle: "Software Developer",
    date: "Nov 2020 - Apr 2021",
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
    img: "reykjavik.png",
    title: "Reykjavik Food Walk",
    info: "Reykjavik Food Walk is a ticketing web application for highest rated food tour in Iceland.",
    info2: "",
    url: "https://www.thereykjavikfoodwalk.com/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "myvatn.png",
    title: "Mývatn Nature Baths",
    info: "Myvatn is a ticketing web application for Myvatn Nature Bath, one of the most visited tourist attraction for hot lagoon in Iceland.",
    info2:
      "Worked as full stack developer to develop the frontend and managed the API using Bokun for the transactions process.",
    url: "https://myvatnnaturebaths.is/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "upsell-dashboard.png",
    title: "Upsell Dashboard",
    info: "Upsell is a management dashboard website used to monitor and maintain restaurant's orders and customers.",
    info2:
      "Worked as full stack developer to develop the frontend and managed the API using express and mongoDB",
    url: "https://www.upsell.is/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "forest-lagoon.png",
    title: "Forest Lagoon",
    info: "Forest Lagoon is a website for a new geothermal spa located in Vaðlaskógur forest, Iceland integrated with Upsell and CMS.",
    info2: "",
    url: "https://www.forestlagoon.is/",
    repo: "", // if no repo, the button will not show up
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
      url: "https://linkedin.com/in/raphaeldiscky",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/raphaeldiscky",
    },
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/RaphDiscky",
    },
    {
      id: nanoid(),
      name: "whatsapp",
      url: "https://wa.me/6287839912020",
    },
  ],
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
}
