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
    "Experienced Software Development Engineer with 2 years of experience in a startup environment and a strong background in Computer Science.",
  paragraphTwo:
    "Driven by a constant thirst for knowledge, I consistently strive to explore new tools and technologies beyond my existing skill set, leading to several successful projects in Software Development and Machine Learning.",
  paragraphThree:
    "I am committed to seeking new opportunities that will enable me to grow, learn, and positively impact the company. I am eager to bring my skills and experience to a new position and contribute to the team's success. Collaboration is key, and I am always open to new opportunities for partnership.",
  resume:
    "https://docs.google.com/document/d/1NoQH9zMCiGYH5cH25JlMJu_j8vWVACvhRnoWIm-ln3Y/edit?usp=sharing", // if no resume, the button will not show up
  portfolio:
    "https://www.canva.com/design/DAFiOhSOtxQ/02VuFQ8GZ-xjcP2ffoUN9w/view?utm_content=DAFiOhSOtxQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
}

// EXPERIENCES DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: "upsell.png",
    company: "Upsell.is",
    jobTitle: "Software Engineer - Fullstack ",
    date: "Oct 2021 - Present",
    descriptionOne:
      "- As a full-stack software engineer, I develop both microservices and frontend components for some of the Upsell ecosystem (Dashboard, POS, Kiosk, Widget, etc.) as a member of the core team.",
    descriptionTwo: "- I utilize TypeScript, Hono RPC, FaunaDB, Next.js, etc.",
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
      "- Selected as one of participants from +63.000 interested applicants with acceptance rate of 4.9% to join Bangkit - a Google lead, machine learning program.",
    descriptionThree:
      "- Selected as the best team at Company Capstone Project in collaboration with Traveloka, a leading online travel company in Southeast Asia.",
  },
  {
    id: nanoid(),
    img: "joints-logo.png",
    company: "JOINTS UGM",
    jobTitle: "Software Engineer",
    date: "Nov 2020 - Apr 2021",
    descriptionOne:
      "- Developed a web application to manage information and registrations for national-scale technology events and competitions.",
  },
]

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "upsell-dashboard.png",
    title: "Upsell Dashboard",
    info: "Dashboard for the Upsell ecosystem to monitor, customize, and manage restaurant orders and customers.",
    info2: "",
    url: "https://www.upsell.is/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "upsell-pos.png",
    title: "Upsell POS",
    info: "Point of Sale system for the Upsell ecosystem built using React Native.",
    info2: "",
    url: "https://www.thereykjavikfoodwalk.com/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "upsell-kiosk.png",
    title: "Upsell Kiosk",
    info: "Kiosk system for Upsell ecosystem built using React Native.",
    info2: "",
    url: "https://www.thereykjavikfoodwalk.com/",
    repo: "", // if no repo, the button will not show up
  },
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
  email: "raph.discky@gmail.com",
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
