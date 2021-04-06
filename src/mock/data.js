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
  paragraphOne:
    'I am Vedant Bothikar, a second year computer engineering student at Pune Institute of Computer Technology.',
  paragraphTwo:
    'I am passionate about learning new technologies and implementing them in projects. So far, I have been involved in web technologies which I found really interesting and currently I am working on a few projects that helps solve some problems in the society.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1bUhR8LaXUXz5jyw7ae4tZLMGlZirux5C/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'QuickPermitLogo.jpeg',
    title: 'Quick Permit',
    info:
      'The motive behind the project is to have a hassle-free system to seek permissions from college to simplify the otherwise cumbersome process observed. ',
    info2:
      'The idea is that students can send permission requests to conduct events in college whereas teachers can approve or reject the requests. Based on this concept there are many other features which have been included.',
    url: 'https://quickpermit.herokuapp.com/',
    repo: 'https://github.com/PermissionProject/Quick-Permit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ChatApp.jpeg',
    title: 'Real time Web Chat App',
    info:
      'This is a real time web chat app where users can create or join a specific room and have a chat based discussion.This project helped me to learn about how socket.io works and improved my Node.js skills.',
    info2: 'Tech stack: Nodejs, Socket.io, HTML, CSS ',
    url: 'http://bothikarchatapp.herokuapp.com',
    repo: 'https://github.com/master30112001/node-chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TaskManager.jpeg',
    title: 'Task Manger API',
    info:
      'This API was implemented to know more about the CRUD operations. Using this API, users can create their accounts and further use all the necessary features for a task-manager.',
    info2: 'Tech Stack: MongoDB, Node.js, Express.js',
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
