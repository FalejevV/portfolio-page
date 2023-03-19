const projects:IProject[]= [
    {
        name:"IAEround - Bike Routes Storage",
        about:"While cycling, a friend suggested creating a website where you can save your cycling routes. Used Google Bucked to store images. AWS PostgreSQL - database. Backend - ExpressJS. CORS problems, httpCookies, JWT (Too much for a first project...) In general, it works. I still find bugs. BUT IT WORKS. At least at the moment when I write this text.",
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
        about:"After the first project (which is higher in the list) I decided to relax a little and make a simple clicker where you need to save the world and center the damn <DIV> tag. There is nothing special about this site. I'll delete it as I make something better.",
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
        name:"Frontend-Mentor",
        about:"I decided to insert here the first practical classes that I took on the FrontendMentor website. I throw a link to the page of completed tasks where you can see them live. As well as the main github page of all these projects.",
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
    images:string[],
    liveLink:string,
    sourceLink:string,
    usedTools:string[],
}

export default projects;