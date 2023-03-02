const projects:IProject[]= [
    {
        name:"IAEround - Bike Routes Storage",
        about:"I was riding a bike with a friend, discussing what kind of project I should create for practice. He came up with the idea - to create a site with a repository of routes. So here we are... A lot of unfamiliar things hit me at once. CORS / HTTP cookie / Password encryption / Working with files in google storage. In the end it is perfect, well polished project (no)",
        images:[
            "/img/projects/1.jpg",
            "/img/projects/2.jpg",
            "/img/projects/3.jpg"
        ],
        liveLink:"https://iaeround.xyz/",
        sourceLink:"https://github.com/FalejevV/iaeround-frontend",
        usedTools:["HTML/CSS/JS", "Styled", "React", "Redux", "NextJS", "ExpressJS", "Google-Storage", "JWToken", "AWS-PostgreSQL", "*ALotOfPain*"],
    },
    {
        name:"<DIV> Game </DIV>",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mi ut tellus ullamcorper condimentum. Nam ac metus urna. Proin molestie nibh metus. Proin a urna a ipsum vulputate finibus.",
        images:[
            "/img/projects/10.jpg",
            "/img/projects/5.jpg",
            "/img/projects/6.jpg"
        ],
        liveLink:"https://google.com",
        sourceLink:"https://google.com",
        usedTools:["HTML/CSS/JS", "Styled", "React", "NextJS"],
    },
    {
        name:"Frontend-Mentor",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mi ut tellus ullamcorper condimentum. Nam ac metus urna. Proin molestie nibh metus. Proin a urna a ipsum vulputate finibus.",
        images:[
            "/img/projects/7.jpg",
            "/img/projects/8.jpg",
            "/img/projects/9.jpg"
        ],
        liveLink:"https://google.com",
        sourceLink:"https://google.com",
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