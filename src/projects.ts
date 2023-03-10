export type Project = {
  title: string;
  quickOverview: string;
  tech: Array<string>;
  broadOverview: string;
  learned: string;
  liveLink: string;
  repoLink: string;
  id?: number;
};

const projects: Array<Project> = [
  {
    title: "Pokedex App",
    quickOverview:
      "Application allowing the user to search for pokemon, see detailed info about them and add them to favourites.",
    broadOverview:
      "Application allowing the user to search for pokemon, see detailed info about them and add them to favourites. The user can log in or create a new account. The app allows the user to add pokemon to favourites and then see them in a seperate favourite page. Upon clicking on a learn more button located in a pokemon card, a modal will appear with detailed information about the selected pokemon. The user can also make use of pagination element that allows the user to transfer to a desired page.",
    tech: ["React", "Redux + Toolkit", "TypeScript", "Firebase", "MUI"],
    learned:
      "The idea behind this project was to practice my Redux and firebase skills. I gained a lot of understanding of redux and firebase during the development of the project. Besides that, I've tried to make my code as clean as possible and my folder structure as natural as it can be. Overall, I'm satisfied that I was able to learn new technologies and improve my code quality",
    liveLink: "https://pokedex-f50cb.web.app/",
    repoLink: "https://github.com/kajtini/Pokedex-TypeScript-Redux",
    id: 1,
  },
  {
    title: "Netflix Clone",
    quickOverview:
      "Functional clone of the netflix page with detailed info about movies and shows.",
    broadOverview:
      "Functional clone of the netflix page with Main Page and My List. User can add/remove different movies to/from the watch list and see detailed information about a movie upon clicking on it's picture or learn more button. Movies and shows were aquired from TMDP API using axios.",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Router",
      "React Context",
    ],
    learned:
      "During the development of that project I could improve my TypeScript understanding and knowledge by a lot. I also managed to improve my file and folder structure in React application as this project contained many components and files. Previously, it was difficult for me to understand React Context, but thanks to this project I can now use it with confidence.",
    liveLink: "https://netflix-clone-kk.netlify.app/",
    repoLink: "https://github.com/kajtini/Netflix-Clone-Typescript-React",
    id: 2,
  },
  {
    title: "Countries Info App",
    quickOverview:
      "Application allowing user to browse through countries of the world and see different info about them.",
    broadOverview:
      "Application allowing a user to browse through countries of the world and see different info about them. The user has an ability to search through countries and filter them by region. Upon clicking on a border of the country, the user will be redirected to the page with the info about that country.",
    tech: ["React", "TailwindCSS"],
    learned:
      "This project allowed me to understand the basic concepts of React as this was one of my first projects ever written in this framework. During the development of the project, I had to search for a lot of information on the internet and this allowed me to learn actively which is my preferred way of learning.",
    liveLink: "https://countries-info-kajtini.netlify.app/",
    repoLink:
      "https://github.com/kajtini/Countries-Info-Project-REST-countries-API",

    id: 3,
  },

  {
    title: "Tip Calculator",
    quickOverview:
      "Application allowing the user to calculate the amount of the tip based on ceratain conditions.",
    broadOverview:
      "Application allowing a user to calculate the amount of the tip based on ceratain conditions. The user can select the tip percentage (or insert a custom one), number of people the tip is split between and the bill amount. The application will then calculate the tip and the bill amount per person.",
    tech: ["JavaScript", "HTML", "CSS"],
    learned:
      "The idea behind this project was to practice my HTML, CSS and especially JavaScript skills. I gained a lot of understanding of JavaScript after finishing the project. Completing the project made me feel more confident in JavaScript since I was still learning it at that time and I needed to put the theory I learned into practice.",
    liveLink:
      "https://kajtini.github.io/tip-calculator-frontendmentor-solution/",
    repoLink:
      "https://github.com/kajtini/tip-calculator-frontendmentor-solution",
    id: 4,
  },
];

export default projects;
