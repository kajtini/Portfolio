import { motion } from "framer-motion";

type SkillTechnologyBtnProps = {
  content: string;
};

function SkillTechnologyBtn({ content }: SkillTechnologyBtnProps) {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      key={content}
      className="p-4 w-full text-center rounded-full bg-white bg-opacity-5 text-sm sm:text-base flex justify-center items-center"
    >
      {content}
    </motion.li>
  );
}

export default SkillTechnologyBtn;
