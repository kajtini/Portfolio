import { motion } from "framer-motion";

type BackdropProps = {
  closeModal: () => void;
};

function Backdrop({ closeModal }: BackdropProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-40 min-h-screen"
      onClick={closeModal}
    ></motion.div>
  );
}

export default Backdrop;
