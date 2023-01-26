import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="flex items-center justify-between mb-10 lg:mb-20">
      <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        href="https://github.com/kajtini"
        target="_blank"
      >
        <FaGithubSquare size={30} className="cursor-pointer fill-white" />
      </motion.a>
      <p className="text-sm opacity-50 sm:text-xl">
        kowalskikajetandev@gmail.com
      </p>
    </div>
  );
}

export default Navbar;
