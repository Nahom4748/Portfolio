import javaIcon from "../../images/icons/javascript-programming-language-icon.svg";
import Education from "../../images/icons/education_6785648(1).png";
import Skill from "../../images/icons/innovation-creativity-icon.svg";
import Certified from "../../images/icons/premium-icon.svg";
import nodeIcon from "../../images/icons/node-js-icon.svg";
import reactIcon from "../../images/icons/react-js-icon.svg";
import tailwindIcon from "../../images/icons/tailwind-css-icon.svg";
import bootstrapIcon from "../../images/icons/bootstrap-5-logo-icon.svg";
import mysqlIcon from "../../images/icons/mysql-icon.svg";
import mongodbIcon from "../../images/icons/mongodb-icon.svg";

const aboutData = [
  {
    title: "skills",
    icon: Skill,
    info: [
      {
        title: "JavaScript",
        icon: javaIcon,
      },
      {
        title: "Node.js",
        icon: nodeIcon,
      },
      {
        title: "React",
        icon: reactIcon,
      },
      {
        title: "Tailwind CSS",
        icon: tailwindIcon,
      },
      {
        title: "Bootstrap",
        icon: bootstrapIcon,
      },
      {
        title: "MySQL",
        icon: mysqlIcon,
      },
      {
        title: "MongoDB",
        icon: mongodbIcon,
      },
    ],
  },
  {
    title: "Education",
    icon: Education,
    info: [
      {
        title: "Bachelor of Science in Computer Science",
        stage: "2021",
        Institution: "Admas University",
      },
    ],
  },

  {
    title: "Certificate",
    icon: Certified,
    info: [
      {
        title: "Full stack Development",
        stage: "2024",
        Institution: "Evangadi Tech",
      },
      {
        title: "CCN-Networking",
        stage: "2023",
        Institution: "Addis Ababa Unversity",
      },
    ],
  },
];

export default aboutData;
