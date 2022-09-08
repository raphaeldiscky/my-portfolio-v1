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
    "https://docs.google.com/document/d/1NoQH9zMCiGYH5cH25JlMJu_j8vWVACvhRnoWIm-ln3Y/edit?usp=sharing", // if no resume, the button will not show up
}

// EXPERIENCES DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: "viska.png",
    company: "VISKA",
    jobTitle: "Software Developer",
    date: "Oct 2021 - Present",
    descriptionOne:
      "- Developed and maintained web and mobile applications for clients from Europe as a remote software engineer",
    descriptionTwo:
      "- Worked as a full-stack developer mainly on React ecosystems like react-native and next",
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
    descriptionThree: "",
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
