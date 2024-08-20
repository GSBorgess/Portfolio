import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import {
  SiAxios,
  SiCss3,
  SiExpress,
  SiHandlebarsdotjs,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiSqlite,
} from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

export const menu = [
  { name: "Sobre" },
  { name: "Habilidades" },
  { name: "Tecnologias" },
  { name: "Projetos" },
];

export const projects = [
  {
    id: 1,
    title: "AUSBI AI",
    image: "/ausbi-image.png",
    category: "Web",
    data: {
      description: `Desenvolvi uma aplicação de inteligência artificial utilizando React no frontend, Node.js no backend e MongoDB para gerenciamento de dados, com a API Gemini AI integrada para fornecer as funcionalidades principais. O projeto foi feito para oferecer uma experiência de conversação natural e interativa, similar ao ChatGPT, permitindo que os usuários façam perguntas e recebam respostas detalhadas e contextualizadas.`,
      demoLink: "https://github.com/GSBorgess/ausbi-ia",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <SiReact />,
        iconColor: "skyblue",
      },
      {
        name: "React Router",
        icon: <SiReactrouter />,
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
    ],
  },
  {
    id: 2,
    title: "Happy Orphanage - Projeto de Impacto Social",
    image: "happy-orphanage.png",
    category: "Web",
    data: {
      description: `Desenvolvi o projeto Happy Orphanage durante a Next Level Week, um evento promovido pela Rocketseat, sob a orientação do professor Mayk Brito. Este projeto visa conectar orfanatos com a comunidade, facilitando visitas e o apoio às instituições. A aplicação foi construída utilizando as seguintes tecnologias: HTML5 e CSS3: Estruturei e estilizei a aplicação para garantir uma interface intuitiva e acessível; JavaScript: Implementei a lógica de interação e funcionalidades dinâmicas na aplicação, proporcionando uma experiência de usuário fluida; Node.js: Desenvolvi o backend da aplicação para gerenciar dados e processar requisições, assegurando um funcionamento eficiente e seguro.`,
      demoLink: "https://happy-devzero.netlify.app/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        iconColor: "orange",
      },
      {
        name: "CSS3",
        icon: <SiCss3 />,
        iconColor: "skyblue",
      },
      {
        name: "Javascript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
      {
        name: "Handlebars",
        icon: <SiHandlebarsdotjs />,
        iconColor: "yellow",
      },
    ],
  },
  {
    id: 3,
    title: "Ecoleta",
    image: "/ecoleta.jpg",
    category: "Apps",
    data: {
      description: `O Ecoleta é uma aplicação desenvolvida durante a Next Level Week da Rocketseat, sob a orientação do professor Diego Fernandes. O projeto tem como objetivo conectar empresas e entidades que coletam resíduos recicláveis a pessoas que precisam descartar esse material de forma consciente e ambientalmente responsável. No desenvolvimento do Ecoleta, utilizei tecnologias como Node.js, React, e SQLite para criar uma solução fullstack. A aplicação inclui um backend robusto, capaz de gerenciar pontos de coleta e usuários e uma interface web intuitiva para administração dos pontos de coleta. Este projeto foi uma oportunidade de aplicar meus conhecimentos em desenvolvimento de aplicações completas, desde a criação da API até a implementação da interface do usuário, sempre com foco na usabilidade e na sustentabilidade.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <SiReact />,
        iconColor: "skyblue",
      },
      {
        name: "SQLite",
        icon: <SiSqlite />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "Axios",
        icon: <SiAxios />,
        iconColor: "purple",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        iconColor: "orange",
      },
      {
        name: "CSS3",
        icon: <SiCss3 />,
        iconColor: "skyblue",
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
    ],
  },
];

export const experience = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Avançado",
      },
      {
        skill: "CSS",
        level: "Avançado",
      },
      {
        skill: "JavaScript",
        level: "Intermediário",
      },
      {
        skill: "Typescript",
        level: "Intermediário",
      },
      {
        skill: "Tailwind",
        level: "Intermediário",
      },
      {
        skill: "React",
        level: "Intermediário",
      },
      {
        skill: "Next.Js",
        level: "Intermediário",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        level: "Básico",
      },
      {
        skill: "MangoDB",
        level: "Básico",
      },
      {
        skill: "Express",
        level: "Básico",
      },
    ],
  },
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Básico",
      },
      {
        skill: "Photoshop",
        level: "Avançado",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/GSBorgess",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/gabriel-borges-03a721240/",
  },
];
