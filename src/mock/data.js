import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Raphael Discky', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: 'more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'discky.jpeg',
  paragraphOne: "I'm computer science student from University Gadjah Mada.",
  paragraphTwo: 'Interested in web development and machine learning.',
  paragraphThree: 'I love working in tech industry.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'joints.png',
    title: 'JOINTS 2021',
    info: 'A web application to handle information and registration for events and competitions organized by the Student Association of Computer Science University of Gadjah Mada.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'linkeddev.png',
    title: 'LinkedDev',
    info: 'LinkedDev is a social media web application made for developers.',
    info2: '',
    url: '',
    repo: 'https://github.com/raphaeldiscky/linked-dev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tokopaedi.png',
    title: 'Tokopaedi',
    info: 'Tokopaedi is an e-commerce web application with full functionality such as signup, ordering, payment, etc.',
    info2: '',
    url: '',
    repo: 'https://github.com/raphaeldiscky/tokopaedi', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'zundria.putra@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/raphaeldiscky/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/raphaeldiscky',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/r_discky',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://api.whatsapp.com/send/?phone=6287839912020&text&app_absent=0',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
