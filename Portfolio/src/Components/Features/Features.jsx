import React from "react";
import Title from "../Layout/Title";
import Card from "./Card";

import { FaGlobe, FaMobile } from "react-icons/fa";
import { SiAntdesign, SiProgress } from "react-icons/si";
import { AiFillAppstore } from "react-icons/ai";
import { HiMiniBars4 } from "react-icons/hi2";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full   border-b-[1px] border-b-black py-20"
    >
      <Title title={"Features"} des={"What i do"} />

      <div className="grid grid-cols-3 gap-20 pb-5">
        <Card title={"Business Stratagy"} icon={<HiMiniBars4 />} des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
        <Card title={"AiFillAppstore"} icon={<AiFillAppstore />} des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
        <Card title={"SiProgress"} icon={<SiProgress />} des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
        <Card title={"FaMobile"} icon={<FaMobile />} des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
        <Card title={"SiAntdesign"} icon={<SiAntdesign />} des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
        <Card title={"FaGlobe"} icon={<FaGlobe />} des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
      </div>
    </section>
  );
};

export default Features;
