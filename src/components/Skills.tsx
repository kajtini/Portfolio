import { motion } from "framer-motion";
import SkillTechnologyBtn from "./SkillTechnologyBtn";

function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <div className="mb-14 lg:mb-20">
      <h2 className="text-5xl font-light mb-6 lg:text-6xl ">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  w-full gap-4 max-w-6xl ">
        {skills.map((skill) => (
          <SkillTechnologyBtn key={skill} content={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
