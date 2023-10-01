const projects: IProject[] = [
    {
        name: "Games Platform (Ongoing)",
        about: "An interactive platform for gamers to log and review their collection. Users can sign in, track playtime, completion, and give detailed feedback on various game aspects. The site offers insights into individual gaming trends and aggregates user reviews for an evolving game list. Data is sourced from IGDB and stored in Supabase. (test user falejevv@gmail.com : test123)",
        shortAbout: "A site for gamers to log, review, and see their play trends. Rate games on key aspects, with rankings based on community feedback. Data from IGDB, processed and stored in Supabase.(test user falejevv@gmail.com : test123)",
        images: [
            "/img/projects/gg1.webp",
            "/img/projects/gg2.webp",
            "/img/projects/gg3.webp",
            "/img/projects/gg4.webp",
            "/img/projects/gg5.webp",
        ],
        liveLink: "https://gamegrid-eight.vercel.app/",
        sourceLink: "https://github.com/FalejevV/gamegrid",
        usedTools: ["HTML/CSS/JS", "TailwindCSS", "React", "Redux", "NextJS", "Supabase", "API"],
    },
    {
        name: "IAEround - Bike Routes Storage",
        about: "Website where you can post bike routes. It has: authentication with the ability to change profile info, password and email, the ability to create and change your own routes, search and filter existing routes. Creating this website, I learned about different things: JWT, CORS, httpCookie, SSR... (test user: test - test)",
        shortAbout: "Website where you can post your bike routes. It has: authentication, route creation with file upload, search and filter... (test user: test - test)",
        images: [
            "/img/projects/iae0.jpg",
            "/img/projects/iae1.jpg",
            "/img/projects/iae2.jpg",
            "/img/projects/iae3.jpg",
            "/img/projects/iae4.jpg",
            "/img/projects/iae5.jpg",
            "/img/projects/iae6.jpg",
        ],
        liveLink: "https://iaeround.netlify.app/",
        sourceLink: "https://github.com/FalejevV/iaeround-frontend",
        usedTools: ["HTML/CSS/JS", "Styled", "React", "Redux", "NextJS", "ExpressJS", "Google-Storage", "JWToken", "AWS-PostgreSQL", "*ALotOfPain*"],
    },
    {
        name: "<DIV> Game </DIV>",
        about: `The website is a joke clicker game in which you have to "Save the world by centering the DIV". I can't tell you more about the page. This is a stupid project, so I both want and don't want to show it here`,
        shortAbout: `This is a joke clicker game. It has: ...nothing special`,
        images: [
            "/img/projects/divgame1.jpg",
            "/img/projects/divgame2.jpg",
            "/img/projects/divgame3.jpg",
            "/img/projects/divgame4.jpg",
        ],
        liveLink: "https://div-game.vercel.app/",
        sourceLink: "https://github.com/FalejevV/div-game",
        usedTools: ["HTML/CSS/JS", "Styled", "React", "NextJS"],
    },
    {
        name: "Mobile routes database",
        about: "Experimenting with React Native / Expo. A notebook that stores information about different companies. In addition to modifying, adding, and deleting information, there is a search, sorting by country, as well as importing and exporting the database using the device storage. In this case, the database is a text file that stores records in JSON format.",
        shortAbout: `Mobile app used to store company information. It has: Entry creation, search, import and export`,
        images: [
            "/img/projects/DB1.png",
            "/img/projects/DB2.png",
            "/img/projects/DB3.png",
            "/img/projects/DB4.png",
        ],
        liveLink: "",
        sourceLink: "https://github.com/FalejevV/BD-DG",
        usedTools: ["React native/EXPO", "Styled-native"],
    },
    {
        name: "Tricky stuff",
        about: "Website with experiments where I try to recreate things that seem difficult to me (Some are not mobile friendly). All bugs, errors and problems can be found on this site! Everything is under control (No)",
        shortAbout: `Website with experiments where I try to recreate things that seem difficult to me.`,
        images: [
            "/img/projects/tricky-1.jpg",
            "/img/projects/tricky-2.jpg",
            "/img/projects/tricky-3.jpg",
            "/img/projects/tricky-4.jpg",
        ],
        liveLink: "https://react-tricky.vercel.app/",
        sourceLink: "https://github.com/FalejevV/React-tricky",
        usedTools: ["HTML/CSS/JS", "Styled", "React", "*Anything*"],
    },
]

export interface IProject {
    name: string,
    about: string,
    shortAbout: string,
    images: string[],
    liveLink: string,
    sourceLink: string,
    usedTools: string[],
}

export default projects;