const projects:IProject[]= [
    {
        name:"IAEround - Bike Routes Storage",
        about:"Website where you can post bike routes. It has: authentication with the ability to change profile info, password and email, the ability to create and change your own routes, search and filter existing routes. Creating this website, I learned about different things: JWT, CORS, httpCookie, SSR... (test user: test - test)",
        shortAbout:"Website where you can post your bike routes. It has: authentication, route creation with file upload, search and filter... (test user: test - test)",
        images:[
            "/img/projects/iae0.jpg",
            "/img/projects/iae1.jpg",
            "/img/projects/iae2.jpg",
            "/img/projects/iae3.jpg",
            "/img/projects/iae4.jpg",
            "/img/projects/iae5.jpg",
            "/img/projects/iae6.jpg",
        ],
        liveLink:"https://iaeround.xyz/",
        sourceLink:"https://github.com/FalejevV/iaeround-frontend",
        usedTools:["HTML/CSS/JS", "Styled", "React", "Redux", "NextJS", "ExpressJS", "Google-Storage", "JWToken", "AWS-PostgreSQL", "*ALotOfPain*"],
    },
    {
        name:"<DIV> Game </DIV>",
        about:`The site is a joke clicker game in which you have to "Save the world by centering the DIV". I can't tell you more about the site. This is a stupid site, so I both want and don't want to show it here`,
        shortAbout:`This is a joke clicker game. It has: ...nothing special`,
        images:[
            "/img/projects/divgame1.jpg",
            "/img/projects/divgame2.jpg",
            "/img/projects/divgame3.jpg",
            "/img/projects/divgame4.jpg",
        ],
        liveLink:"https://div-game.vercel.app/",
        sourceLink:"https://github.com/FalejevV/div-game",
        usedTools:["HTML/CSS/JS", "Styled", "React", "NextJS"],
    },
    {
        name:"Mobile routes database",
        about:"Experimenting with React Native / Expo. A notebook that stores information about different companies. In addition to modifying, adding, and deleting information, there is a search, sorting by country, as well as importing and exporting the database using the device storage. In this case, the database is a text file that stores records in JSON format.",
        shortAbout:`Mobile app used to store compaty information. It has: Entry creation, search, import and export`,
        images:[
            "/img/projects/DB1.png",
            "/img/projects/DB2.png",
            "/img/projects/DB3.png",
            "/img/projects/DB4.png",
        ],
        liveLink:"",
        sourceLink:"https://github.com/FalejevV/BD-DG",
        usedTools:["React native/EXPO", "Styled-native"],
    },
    {
        name:"Frontend-Mentor",
        about:"My first practical tasks in creating various elements of web pages from the Frontend Mentor website",
        shortAbout:`My exercises from the FrontendMentor website`,
        images:[
            "/img/projects/fmentor1.png",
            "/img/projects/fmentor2.jpg",
            "/img/projects/fmentor3.jpg",
            "/img/projects/fmentor4.jpg",
        ],
        liveLink:"https://www.frontendmentor.io/profile/FalejevV",
        sourceLink:"https://github.com/FalejevV/main",
        usedTools:["HTML/CSS/JS", "Styled", "React", "*maybe* API"],
    },
]

export interface IProject{
    name:string,
    about:string,
    shortAbout:string,
    images:string[],
    liveLink:string,
    sourceLink:string,
    usedTools:string[],
}

export default projects;