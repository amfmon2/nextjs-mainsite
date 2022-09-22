import React from "react";
import ProjectItem from "./ProjectItem";
import asyncroImg from "../public/assets/projects/asyncro-proj.png";
import holidayImg from "../public/assets/projects/holiday-api.jpg";
import discordWigoImg from "../public/assets/projects/discord-wigobot.png";
import mtgLifeImg from "../public/assets/projects/mtg-lifectr.png";

const Projects = () => {
  return (
    <div id='projects' className="w-full py-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Asyncro Chat"
            backgroundImg={asyncroImg}
            projectUrl="/asyncro"
          />
          <ProjectItem
            title="Holiday API"
            backgroundImg={holidayImg}
            projectUrl="/holiday"
          />
          <ProjectItem
            title="Wigo Discord Bot"
            backgroundImg={discordWigoImg}
            projectUrl="/wigodiscord"
          />
          <ProjectItem
            title="MTG Local LifeCtr"
            backgroundImg={mtgLifeImg}
            projectUrl="/mtglifectr"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
