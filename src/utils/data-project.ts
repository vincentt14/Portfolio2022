import DiaCare from "../img/projects/diacare.png";
import ForumNGo from "../img/projects/ForumNGoProject.jpg";
import OpenSpace from "../img/projects/OpenSpaceProject.jpg";
import Capstone from "../img/projects/CapstoneProject.jpg";
import NoteApp2 from "../img/projects/NoteApp2Project.jpg";
import ContactApp from "../img/projects/ContactAppProject.jpg";

interface IProject {
  id: number;
  title: string;
  img: string;
  link: string;
  description: string;
}

const dataProjects: IProject[] = [
  {
    id: 1,
    img: DiaCare,
    title: "DiaCare",
    link: "https://diacare.site/",
    description:
      'DiaCare is a web-based diagnose application to help people diagnose diabetes mellitus disease. Admin can set the diseases, symptoms med and rule base which will be used for the forward chaining method. This application also gives user bunch of information from medicine until advice to avoid or threat the disease. – Build using PHP Laravel and Tailwind CSS, Host using Hostinger | features : login, register, diagnose, track history, dashboards, crud symptoms, diseases, solutions, medicines, rule base.',
  },
  {
    id: 2,
    img: ForumNGo,
    title: "ForumNGo",
    link: "https://discussion-forum-test.vercel.app/",
    description:
      "ForumNGo is a web-based forum application to help people find some discussion or topic, user also can add discussion and discuss some topics together. – Build using React.js, Redux, Bootstrap, Testing with Jest and Cypress, Eslint – PropTypes. Connected to Dicoding API | features : login, register, create threads, leave comments.",
  },
  {
    id: 3,
    img: OpenSpace,
    title: "Open Space App",
    link: "https://open-space-app-bice.vercel.app/",
    description:
      "Open Space App is a web-based twitter look a like application where users can create some threads add comments and see parents threads. – Build using React.js, Redux, Eslint - Proptypes, Testing with Jest and Cypress. with Dicoding API | features : login, register, create talk, view talk parent, add comments",
  },
  {
    id: 4,
    img: Capstone,
    title: "Co-Money",
    link: "https://comoney-dicoding.web.app",
    description:
      "CoMoney is a web-based financial management utility Application to help people manage their finances with income and expenditure dashboard features, savings targets with automatic calculations, and daily financial news. – Build using React.js React Router, React Context, Axios, Lazysizes, SweetAlert and Bootstrap | features: Record and monitor daily and monthly expenses and income, provides daily global financial news, create a savings plan, as well as display information on how much money should be set aside each month.",
  },
  {
    id: 5,
    img: NoteApp2,
    title: "NoteBook 2",
    link: "https://note-book-app-2.vercel.app/",
    description:
    "Note Book 2 is a web-based utility application where users can add some notes, archive it or edit it, this application also provides dark mode – Build using React.js, React Router, React Context, Hooks, Path & Query Params. Connected to Dicoding API | features : dark mode, change app language, login - register - logout, add note, delete note, archive note, search for notes.",
  },
  {
    id: 6,
    img: ContactApp,
    title: "Contact App",
    link: "https://contact-app-navy.vercel.app/",
    description:
      "Contact is a web-based utility application where users can add contacts, delete it or search other contacts – Build using React.js, React Router, React Context, Hooks, Path & Query Params. Connected to Dicoding API | features: login - register - logout, add contact, delete contact and search contacts.",
  },
];

export default dataProjects;
