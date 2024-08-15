import appleImage from "../../images/Apple.png"; // Example import, replace with actual image path
import netflixImage from "../../images/Netflix.jpg"; // Example import, replace with actual image path
import amazonImage from "../../images/Amazon.png"; // Example import, replace with actual image path
import evangadiImage from "../../images/Evangadi.jpeg"; // Example import, replace with actual image path

const worksData = [
  {
    title: "Apple.com Clone",
    description: "A clone of the Apple website with React and API integration.",
    details:
      "This project involved recreating the Apple.com website using React for the front-end, with full API integration to handle data and dynamic content. The project focused on responsive design, animations, and mimicking the original site's functionality.",
    image: appleImage,
    links: "https://clone2024.netlify.app/",
    // Replace with the correct image path
  },
  {
    title: "Netflix Clone",
    description: "A Netflix clone using React and API integration.",
    details:
      "This project is a clone of Netflix, built using React for the front-end. It incorporates API integration to fetch movie data and displays it in a user-friendly manner. The application also features a functional login system and a video player component.",
    image: netflixImage, // Replace with the correct image path
    links: "https://nahom4748.github.io/netflixClone/",
  },
  {
    title: "Amazon Clone",
    description: "A full-stack Amazon clone with React, Node.js, Firestore.",
    details:
      "A comprehensive Amazon clone that includes both front-end and back-end development. The front-end is built with React and Tailwind CSS, while the back-end is powered by Node.js and Firestore. The project features a product listing, shopping cart, user authentication, and order management.",
    image: amazonImage, // Replace with the correct image path
    links: "https://amazon-clone-by-nahom.netlify.app/",
  },
  {
    title: "Evangadi Forum",
    description: "A forum website built with React, Node.js, MySQL.",
    details:
      "Evangadi Forum is a discussion platform built using React for the front-end and Node.js for the back-end, with MySQL as the database. The project supports user registration, posting, commenting, and features a dynamic, responsive design.",
    image: evangadiImage, // Replace with the correct image path
    links: "https://evangadi-forum-fullstack.netlify.app/",
  },
];

export default worksData;
