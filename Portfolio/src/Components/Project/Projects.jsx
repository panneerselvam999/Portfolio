// import React from "react";
// import Title from "../Layout/Title.jsx";
// import ProjectsCard from "./ProjectsCard.jsx";
// import { Gilber, Alfa, aturister, Edusity,LogReg } from "../../assets/index.js";

// const Project = () => {
//     return (
//         <section
//             id="projects"
//             className="w-full py-20 border-b-[1px] border-b-black"
//         >
//             <Title title={"My Projects"} des={"visit my portfolio"} />

//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14">
//                 <ProjectsCard
//                     title="Gilber - Portfolio"
//                     des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//                     src={Gilber}
//                 />
//                 <ProjectsCard
//                     title="Alfa Service Center"
//                     des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//                     src={Alfa}
//                 />
//                 <ProjectsCard
//                     title="American Tourister"
//                     des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//                     src={aturister}
//                 />
//                 <ProjectsCard
//                     title="Educity"
//                     des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//                     src={Edusity}
//                 />
//                 <ProjectsCard
//                     title="Login and Registration"
//                     des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//                     src={LogReg}
//                 />

//             </div>
//         </section>
//     );
// };

// export default Project;
import React from "react";
import Title from "../Layout/Title.jsx";
import ProjectsCard from "./ProjectsCard.jsx";
import {
    Gilber,
    Alfa,
    aturister,
    Edusity,
    LogReg,
} from "../../assets/index.js";
import projects from "../../Constants/projects.json";

const Project = () => {
    const imageMap = {
        Gilber: Gilber,
        Alfa: Alfa,
        aturister: aturister,
        Edusity: Edusity,
        LogReg: LogReg
    };
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title={"My Projects"} des={"visit my portfolio"} />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14">
                {
                    projects.projectsData.map((project) => (
                        <ProjectsCard
                            key={project.id}
                            title={project.title}
                            des={project.des}
                            img={imageMap[project.img]}
                            git={project.git}
                            live={project.live}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Project;
