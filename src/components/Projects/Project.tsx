import { motion } from "framer-motion";
import SkillTechnologyBtn from "../SkillTechnologyBtn";

type ProjectProps = {
  title: string;
  quickOverview: string;
  tech: Array<string>;
  id?: number;
  handleLearnMoreClick: (id: number) => void;
};

function Project({
  title,
  quickOverview,
  tech,
  id,
  handleLearnMoreClick,
}: ProjectProps) {
  return (
    <li className="justify-self-center flex flex-col items-center bg-white bg-opacity-5 px-8 py-10 rounded-lg text-center gap-10 max-w-sm ">
      <div>
        <p className="text-4xl text-left mb-4">{title}</p>
        <p className="leading-7 opacity-80 text-left">{quickOverview}</p>
      </div>
      <div className="w-full">
        <ul className="grid grid-cols-2 gap-5">
          {tech.map((tech) => (
            <SkillTechnologyBtn key={tech} content={tech} />
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", damping: 15 }}
        className="w-full block p-4 rounded-full bg-side bg-opacity-30 mt-auto"
        onClick={() => id && handleLearnMoreClick(id)}
      >
        Learn More
      </motion.button>
    </li>
  );
}

export default Project;
