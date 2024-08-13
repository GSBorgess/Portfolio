import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiHandlebarsdotjs,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
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
      demoLink: "/ausbi-image.png",
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
    title: "Estou trabalhando nisso",
    image: "/",
    category: "Apps",
    data: {
      description: `Estou desenvolvendo um aplicativo, em breve estara online.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Em breve",
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
