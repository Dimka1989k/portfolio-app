

import image1 from "./images/Countries.png";
import image2 from "./images/EventBooster.jpg";
import image3 from "./images/IceCream.jpg";
import image4 from "./images/ImageGallery.jpg";
import image5 from "./images/Kapusta.jpg";
import image6 from "./images/Movie.jpg";
import image7 from "./images/Petly.jpg";
import image8 from "./images/PhoneBook.jpg";
import image9 from "./images/WebStudio.png";
import image10 from "./images/Weather.png";
import image11 from "./images/hounter.png";
import image12 from "./images/HomeProject.png";
import image13 from "./images/Post.png";
import image14 from "./images/GOHOME.png";
import image15 from "./images/strazen.png";
import image16 from './images/casino.png';
import image17 from './images/Roll.png';
import image18 from './images/audiofile.png';
import image19 from './images/bookContacts.png';
import image20 from './images/vehicle.jpg';
import image21 from './images/news.jpg';

const logotext = "D.K";
const meta = {
  title: "Dmytro Kyselov",
  description:
    "I’m Kyselov Dmytro - Frontend Devloper, urrently working in Ukraine",
};

const introdata = {
  title: "I’m Kyselov Dmytro",
  animated: {
    first: "Front-End Developer",
    second: "I love coding",
    third: "I code cool websites"
  },
  description:
    "",
  your_img_url: "",
};

const dataabout = {
  title: "About my self",
  aboutme:
    "Motivated Frontend Developer with experience in building dynamic web applications using JavaScript, React and Redux. Skilled in performance optimization, feature implementation, and effective collaboration with remote teams. Looking to contribute to innovative projects focused on efficiency and user experience. Open to relocation to other cities or countries.",
};
const worktimeline = [
  {
    jobtitle: "EPAM Systems (Internship)",
    where: "HTML, CSS, SCSS, JavaScript, Typescript ",
    date: "February 2025 – May 2025",
  },
  {
    jobtitle: "Onix-Systems (Builder.ai)",
    where: "JavaScript, TypeScript, React, Material UI, Jest, Enzyme",
    date: "August 2024 – December 2024",
  },
  {
    jobtitle: "Kano MDM",
    where: "ObjectScript, InterSystems IRIS,  Docker ",
    date: "February 2024 – July 2024",
  },
   {
    jobtitle: "Legal Assistant - Self-Employed",
    where: "Prepared legal documents, conducted research, and supported clients.",
    date: "October 2022 – August 2024",
  },
  {
    jobtitle: "State Tax Service in the Kirovohrad Region",
    where: "Provided legal support in tax disputes and administrative appeals.",
    date: "September 2012 – October 2022",
  },
  {
    jobtitle: "Department of the Ministry of Internal Affairs in the Kirovohrad region ",
    where: "Investigated of criminal offences.",
    date: "July 2010  - September 2012",
  },
];

const skills = [
  {
    name: "HTML",
    value: 100,
  },
  {
    name: "CSS",
    value: 100,
  },
  {
    name: "SCSS",
    value: 100,
  },
  {
    name: "JavaScript",
    value: 190,
  },
  {
    name: "TypeScript",
    value: 180,
  },
  {
    name: "React",
    value: 100,
  },
  {
    name: "Redux",
    value: 100,
  },
];

const services = [
  {
    title: "GOIT Bootcamp - Fullstack Development Program | June 2022 – March 2023",
    description:
      " ● Gained hands-on experience in modern web development, utilizing React, RTK, Node.js, and foundational front-end technologies. \n ● Contributed as a developer to various projects, focusing on responsive layouts, state management, and API integration. \n ● Implemented logic and styling for key features such as user authentication, pagination, and modal windows. Notable projects: Petly, Kapusta, Movies, and PhoneBook.",
  },
  {
    title: "National Academy of Public Administration under the President of Ukraine ",
     description: "Master's degree in Public Administration | July 2013 - February 2016", 
  },
   {
    title: "The Kirovohrad Branch of Kharkiv National University of Internal Affairs",
  description: "Specialist in Criminal Law | June  2006 - July 2010", 
  },
 ];

const dataportfolio = [ 
   {
    img: image21,   
    description:
      "News App. ",
    link: "https://dimka1989k.github.io/news-bootstrap/",
    tech: "[React, Bootstrap]",
  },
   {
    img: image15,   
    description:
      "An online platform providing expert consultations and real-time chat support. ",
    link: "https://dapper-bonbon-cab8c0.netlify.app/",
    tech: "[React, CSS, Node.js, Express.js, OAuth-2 google, Stripe, Websoket.io]",
  },
    {
    img: image16,
    description:
      "Simple casino game",
    link: "https://dimka1989k.github.io/bass-splash/",
     tech: "[React, CSS]",
  },
   {
    img: image17,
    description:
      "Simple dice game",
    link: "https://dimka1989k.github.io/dice-app/",
     tech: "[React, Tailwind CSS]",
  },
  {
    img: image20,
    description:
      "Simple Car Dealer App",
    link: "https://vehicles-phi.vercel.app/",
     tech: "[Next]",
  },
   {
    img: image18,
    description:
      "Simple transcriber-audiofile",
    link: "https://transcriber-audiofile.vercel.app/",
     tech: "[Next, Shadsn, Clerk, Stripe, Prisma, Openai, PostgreSQL, ]",
  },
   {
    img: image19,
    description:
      "Simple book contact",
    link: "https://book-contact.vercel.app/contacts",
     tech: "[Next, Shadsn, React-Hook-Form]",
  },
 
  {
    img: image2,
    description:
      "The application for ordering concert tickets.",
    link: "https://jekiekolya.github.io/Command-project-JS/index.html",
     tech: "[HTML, SASS, JS]",
  },
  {
    img: image3,
    description:
      "The website with a responsive layout.",
    link: "https://nikolaylyah.github.io/goit-final/",
    tech: "[HTML, SASS, JS]",
  },
  {
    img: image4,
    description:
      "Image search app",
    link: "https://dimka1989k.github.io/goit-react-hw-03-image-finder/",
     tech: "[REACT, CSS]",
  },
  {
    img: image5,
    description:
      "The application to control your personal budget.",
    link: "https://hodosovsky.github.io/kapusta/login",
    tech: "[React, RTK, Styled-Components, Swagger]",
  },
  {
    img: image6,
    description:
      "The application for searching favorite movie.",
    link: "https://dimka1989k.github.io/goit-react-hw-05-movies/",
    tech: "[React, CSS]",
  },

  {
    img: image7,
    description:
      "The application for searching for buying and selling pets.",
    link: "https://petly-project-app.netlify.app/",
    tech: "[React, RTK, Styled-Components, Swagger, Node]",
  },
  {
    img: image8,
    description:
      "The application to save search and delete phone numbers.",
    link: "https://dimka1989k.github.io/goit-react-hw-08-phonebook/",
    tech: "[React, CSS, RTK]",
  },
  {
    img: image9,
    description:
      "The simple landing page with apaptive layout design.",
    link: "https://dimka1989k.github.io/goit-markup-hw-08/",
    tech: "[HTML, CSS, SCSS, JS]",
  },
  {
    img: image10,
    description:
      "Simple weather application.",
    link: "https://dimka1989k.github.io/weather/",
    tech: "[React, CSS]",
  },
  {
    img: image11,
    description:
      "The simple landing page with apaptive layout design.",
    link: "https://dimka1989k.github.io/test-remote/",
    tech: "[React, Styled-Components]",
  },
  {
    img: image12,
    description:
      "The simple landing page with apaptive layout design.",
    link: "https://dimka1989k.github.io/test-Smart/",
     tech: "[React, Styled-Components]",
  },
  {
    img: image13,
    description:
      "Branch & Shipment Tracker App",
    link: "https://dimka1989k.github.io/test-sameit/",
    tech: "[React, RTK, Styled-Components]",
  },
  {
    img: image14,
    description:
      "Simple Apartment Booking Website.",
    link: "https://dimka1989k.github.io/gohome-vue-project/",
     tech: "[Vue.js, Vuex, SCSS]",
  },
  
   {
    img: image1,   
    description:
      "The application for searching countries.",
    link: "https://dimka1989k.github.io/goit-js-hw-10/",
    tech: "[HTML, CSS, JS]",
  },
  
 ];

const contactConfig = {
  YOUR_EMAIL: "dimas1989k@gmail.com",
  YOUR_FONE: "+38 (095) 865-6462",
  description:
    "",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/Dimka1989k",
  facebook: "https://www.facebook.com/dmitrij.kiselev.884241/",
  linkedin: "https://www.linkedin.com/in/kyselyovdmitry/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
