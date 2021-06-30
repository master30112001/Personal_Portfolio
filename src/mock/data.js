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
  resume: 'https://drive.google.com/file/d/14odZvBQZFr_0Thw9U9AFCpMJ1AgLc8eg/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'quickPermitDashboard.jpeg',
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
    img: 'covmeal.jpeg',
    title: 'CovMeal',
    info:
      " Our team saw problems like not getting resources to order meals from, thus working on a solution to this issue CovMeal helps connect food service providers with people fighting the Covid-19 virus to get meals delivered so that people don't have to worry for food during quarantine.",
    info2: 'Tech stack: React.js, Firebases',
    url: 'http://covmeal.netlify.app',
    repo: '', // if no repo, the button will not show up
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

// Education DATA
export const educationData = [
  {
    id: nanoid(),
    img: 'pictlogo.jpeg',
    title: 'Pune Institute of Computer Technology',
    info:
      'Studying theory and applications of subjects including Object Oriented Programming and Data structures and Algorithms',
    info2: '',
    url: 'https://pict.edu/',
    repo: 'https://github.com/PermissionProject/Quick-Permit', // if no repo, the button will not show up
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
      url: 'https://twitter.com/VedantBothikar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

/*
Thank you for providing your support to so many families out there !! 
Our team recently had a conversation with you,We have added your organization's details on our portal 'CovMeal', Now customers will be able to get details of you providing meal deliveries to patients affected with the Covid-19 virus.
We expect more and more customers to get connected with you from now onwards.

We request you to share this website as much as possible, so people who aren't aware of from where to order food during quarantine can be benefitted with these resources handy with them.
http://covmeal.netlify.app

Once again, Thank you for your support !!



We have seen many people struggling to find restarants providing meals to Covid-19 patients, to provide a helping hand in this situation we have come up with a portal where you can find nearby restaurants that provide meals to such patients. 
Here you will be able to search for restaurants in your nearby locality that provide these kind of services.
If you are a food service provider who is servicing for such Covid warriors, do register yourself below.

We request all readers to share this as much as possible, this could help someone in need. 
http://covmeal.netlify.app



*/
