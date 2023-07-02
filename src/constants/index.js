import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  docker,
  threejs,
  aws,
  c,
  dart,
  firebase,
  flutter,
  java,
  python,
  page,
  weather,
  pokemon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "work",
    title: "work",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const services = [
  {
    title: "Full-stack Developer",
    icon: "🖥️",
  },
  {
    title: "Cloud engineer",
    icon: "☁️",
  },
  {
    title: "Robotics developer",
    icon: "🤖",
  },
  {
    title: "Mobile App Developer",
    icon: "📱",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Google firebase",
    icon: firebase,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Python",
    icon: python,
  },

];


const projects = [
  {
    name: "Pokemon App",
    description:
      "PokemonApp is a simple application that allows users to search for Pokemon creatures and view their details, including their images, stats, abilities, and moves. The application uses the PokeAPI to fetch data about Pokemon and display it in a user-friendly interface.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://github.com/andevrrr/PokemonApp",
  },
  {
    name: "Weather Forecast",
    description:
      "The webpage handles weather data (temperature, wind speed, wind direction, percentage of precipitation, light level, humidity level) obtained via an API that comes from the weather station located on the roof go Tampere University of Applied Sciences, Finland.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/andevrrr/weather_forecast",
  },
  {
    name: "My former portfolio page",
    description:
      "This was my first portfolio website.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: page,
    source_code_link: "https://github.com/andevrrr/antonkucherenko",
  },
];

export { services, technologies, projects };