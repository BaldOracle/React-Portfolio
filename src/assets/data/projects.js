import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/coder.GIF';
import pWord from '../images/Password.jpg';
import weather from '../images/Weather.jpg';
import Joyride from '../images/JoyRide.png';
import ProjectImg2 from '../images/coder.GIF';


const projects = [
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc:
      'The Password-Generator is a web application that generates strong and secure passwords with customizable settings.',
    img: pWord,
    link: 'https://baldoracle.github.io/Password-Generator/',
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc:
      'Get current weather data and a 5-day forecast for any city in the world with the Weather Forecast app, built using the OpenWeatherMap API',
    img: weather,
    link: 'https://baldoracle.github.io/Weather-forecast/',
  },
  {
    id: uuidv4(),
    name: 'JoyRide',
    desc:
      'A group project that provides directions and weather information for the start and end locations, designed collaboratively by a team.',
    img: Joyride,
    link: 'https://smcgarr13.github.io/JoyRide/',
  },
  {
    id: uuidv4(),
    name: "Coming Soon",
    desc:
      'n/a',
    img: ProjectImg2,
  },
  {
    id: uuidv4(),
    name: 'Coming Soon',
    desc:
      'N/a',
    img: ProjectImg,
  },
];

export default projects;
