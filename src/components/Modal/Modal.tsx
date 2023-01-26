import { Project as ProjectType } from "../../projects";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Overview from "./Overview";
import Learned from "./Learned";
import TechUsed from "./TechUsed";
import Links from "./Links";
import Title from "./Title";

type ModalProps = {
  clickedProject: ProjectType | null;
  closeModal: () => void;
};

function Modal({ clickedProject, closeModal }: ModalProps) {
  return (
    <>
      {clickedProject && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-full max-w-lg overflow-scroll scrollbar-hide max-h-screen">
          <motion.div
            key="modal"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.4 } }}
            className="backdrop-blur-2xl p-8 lg:p-10 rounded-xl overflow-hidden"
          >
            <AiOutlineClose
              size={30}
              className="fill-white ml-auto mb-5 cursor-pointer"
              onClick={closeModal}
            />
            <Title title={clickedProject.title} />
            <Overview overview={clickedProject.broadOverview} />
            <Learned learned={clickedProject.learned} />
            <TechUsed techUsed={clickedProject.tech} />
            <Links
              liveLink={clickedProject.liveLink}
              repoLink={clickedProject.repoLink}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Modal;
