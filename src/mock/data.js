import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vedant Bothikar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, I am',
  name: 'Vedant Bothikar',
  subtitle: '',
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'aboutImage.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1bUhR8LaXUXz5jyw7ae4tZLMGlZirux5C/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'QuickPermitLogo.jpeg',
    title: 'Quick Permit',
    info: '',
    info2: '',
    url: 'https://quickpermit.herokuapp.com/',
    repo: 'https://github.com/PermissionProject/Quick-Permit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ChatApp.jpeg',
    title: 'Real time Web Chat App',
    info: '',
    info2: '',
    url: 'http://bothikarchatapp.herokuapp.com',
    repo: 'https://github.com/master30112001/node-chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TaskManager.jpeg',
    title: 'Task Manger API',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/master30112001/task-manager-api', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me? Great!',
  btn: 'Connect with me',
  email: 'vbothikar2001@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vedant-bothikar-979752197',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/master30112001',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_ved_ant__/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/BothikarVedant',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
