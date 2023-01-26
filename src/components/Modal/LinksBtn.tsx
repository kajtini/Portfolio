import { motion } from "framer-motion";

type LinksBtnProps = {
  type: "live" | "repo";
  liveLink: string;
  repoLink: string;
};

function LinksBtn({ type, liveLink, repoLink }: LinksBtnProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="bg-side bg-opacity-30 flex-grow p-4 font-medium rounded-full cursor-pointer text-center"
      href={type === "live" ? liveLink : repoLink}
      target="_blank"
    >
      {type === "live" ? "Live" : "Repo"}
    </motion.a>
  );
}

export default LinksBtn;
