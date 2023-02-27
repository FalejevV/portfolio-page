const projects:IProject[]= [
    {
        name:"IAEround - Bike Routes Storage",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mi ut tellus ullamcorper condimentum. Nam ac metus urna. Proin molestie nibh metus. Proin a urna a ipsum vulputate finibus.",
        images:[
            "/img/projects/1.jpg",
            "/img/projects/2.jpg",
            "/img/projects/3.jpg"
        ],
        liveLink:"https://google.com",
        sourceLink:"https://google.com",
        usedTools:["ass","ass2","ass3"],
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
        usedTools:["ass","ass2","ass3"],
    },
    {
        name:"Random project",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mi ut tellus ullamcorper condimentum. Nam ac metus urna. Proin molestie nibh metus. Proin a urna a ipsum vulputate finibus.",
        images:[
            "/img/projects/7.jpg",
            "/img/projects/8.jpg",
            "/img/projects/9.jpg"
        ],
        liveLink:"https://google.com",
        sourceLink:"https://google.com",
        usedTools:["ass","ass2","ass3"],
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