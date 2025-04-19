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
    "Experienced software engineer with 3+ years of experience in a fast-paced startup environment and a strong background in Computer Science.",
  paragraphTwo:
    "Specializing in backend development with full-stack capabilities, I thrive on solving complex problems and building scalable solutions. I'm driven by a passion for continuous learning and actively explore new tools and technologies to stay ahead of the curve.",
  paragraphThree:
    "My main technology stacks includes Python, TypeScript, Go, PostgreSQL, NoSQL, and React — but I'm quick to pick up whatever the work requires.",
  paragraphFour:
    "I am committed to seeking new opportunities that will enable me to grow, learn, and positively impact the company. I am eager to bring my skills and experience to a new position and contribute to the team's success.",
  resume:
    "https://docs.google.com/document/d/1irQVZ6Kf8466hn6cvk7SJTvcaKVlUHKp/edit", // if no resume, the button will not show up
  portfolio:
    "https://www.canva.com/design/DAFiOhSOtxQ/02VuFQ8GZ-xjcP2ffoUN9w/view?utm_content=DAFiOhSOtxQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
}

// EXPERIENCES DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: "upsell.png",
    company: "UPSELL",
    companyUrl: "https://www.upsell.is/",
    jobTitle: "Software Engineer",
    date: "Oct 2021 - Present",
    descriptionOne:
      "- As a software engineer (primarily backend) in the core team, I focus on developing and maintaining backend microservices while also contributing to frontend components for various Upsell products, including the Dashboard, POS, Kiosk, Widget, and more.",
  },
  {
    id: nanoid(),
    img: "bangkit.png",
    company: "BANGKIT",
    companyUrl: "https://grow.google/intl/id_id/bangkit/?tab=machine-learning",
    jobTitle: "Machine Learning Engineer",
    date: "Feb 2022 - Jul 2022",
    descriptionOne:
      "- Selected amongst a highly competitive pool (acceptance rate: 4.9%) with +63.000 interested applicants to participate in Bangkit - a Google lead, machine learning program.",
    descriptionTwo:
      "- Collaborated with Traveloka to develop an OCR-based object detection model for KTP validation. Integrated model into a native Kotlin mobile app and back-end server leveraging Fastify, PostgreSQL, and GCP.",
  },
  {
    id: nanoid(),
    img: "joints-logo.png",
    company: "JOINTS UGM",
    companyUrl: "https://www.instagram.com/jointsugm/?hl=en",
    jobTitle: "Software Engineer",
    date: "Nov 2020 - Apr 2021",
    descriptionOne:
      "- Developed and deployed a web application for national-scale technology events and competitions.",
    descriptionTwo:
      "- This application utilized React and Tailwind CSS for the front-end, and Firebase with Express for the back-end service.",
  },
]

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "upsell-dashboard.png",
    title: "Upsell Dashboard",
    info: "Dashboard for the Upsell ecosystem to monitor, customize, and manage restaurant products.",
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
    url: "",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "upsell-kiosk.png",
    title: "Upsell Kiosk",
    info: "Kiosk system for Upsell ecosystem built using React Native.",
    info2: "",
    url: "",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "reykjavik.png",
    title: "Reykjavik Food Walk",
    info: "Reykjavik Food Walk is a ticketing CMS based web application for highest rated food tour in Iceland.",
    info2: "",
    url: "https://www.thereykjavikfoodwalk.com/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "myvatn.png",
    title: "Mývatn Nature Baths",
    info: "Myvatn is a ticketing CMS based web application for Myvatn Nature Bath, one of the most visited tourist attraction for hot lagoon in Iceland.",
    url: "https://myvatnnaturebaths.is/",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "forest-lagoon.png",
    title: "Forest Lagoon",
    info: "Forest Lagoon is a ticketing CMS based web application for a new geothermal spa located in Vaðlaskógur forest.",
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
