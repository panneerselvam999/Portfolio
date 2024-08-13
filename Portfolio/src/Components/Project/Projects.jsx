import React from "react";
import Title from "../Layout/Title.jsx";
import ProjectsCard from "./ProjectsCard.jsx";

import projects from "../../Constants/projects.json";

const Project = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title={"My Projects"} des={"visit my portfolio"} />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14">
                {projects.projectsData.map((project) => (
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        des={project.des}
                        img={project.img}
                        git={project.git}
                        live={project.live}
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;
