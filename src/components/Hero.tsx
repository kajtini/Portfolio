import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs";

function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div className="text-left mb-16 lg:mb-20">
      <h1 className="text-7xl lg:text-8xl mb-6 font-light leading-[5rem] text-center lg:text-left">
        <span className="bg-gradient-to-br font-normal from-light to-side bg-clip-text text-transparent">
          I'm
        </span>{" "}
        Kajetan Kowalski
      </h1>
      {/* <hr className="my-5 opacity-20 lg:hidden" /> */}
      <p
        className="leading-8 font-light tracking-wide opacity-80  lg:text-2xl max-w-lg lg:max-w-3xl lg:leading-10 
        sm:text-xl sm:leading-9 text-center mx-auto lg:mx-0 lg:text-left mb-5
        "
      >
        Frontend developer passionate about programming and eager to learn new
        technologies{". "}
        <AnimatePresence mode="wait">
          {expanded && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              When I first started learning front end development, it had
              quickly became my passion. I am a person that is constantly trying
              to improve and expand their knowledge. I find it very exciting to
              discover new features and new technologies to learn and the
              learning itself gives me a lot of fun. When I don’t know how to
              solve something, I will try to the best of my abilities to find a
              piece of information that could help me.
            </motion.span>
          )}
        </AnimatePresence>
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className=" bg-side bg-opacity-30 p-4 w-full max-w-[200px] rounded-full mx-auto lg:mx-0 flex items-center justify-center gap-2 font-medium"
        onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
      >
        {expanded ? <BsFillPersonDashFill /> : <BsFillPersonPlusFill />}
        About me
      </motion.button>
    </motion.div>
  );
}

export default Hero;
