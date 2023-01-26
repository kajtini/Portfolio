import { useState } from "react";
import projects from "../../projects";
import Backdrop from "../Modal/Backdrop";
import Modal from "../Modal/Modal";
import Project from "./Project";
import { Project as ProjectType } from "../../projects";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );

  function setClickedProject(id: number) {
    const clickedProject = projects.find((project) => project.id === id);
    if (clickedProject) {
      setCurrentProject(clickedProject);
    }
  }

  function handleLearnMoreClick(id: number) {
    setClickedProject(id);
    openModal();
  }

  function openModal() {
    !isOpen && setIsOpen(true);
  }

  function closeModal() {
    isOpen && setIsOpen(false);
  }

  return (
    <div>
      <h2 className="text-5xl lg:text-6xl font-light mb-6 lg:mb-10">
        Personal{" "}
        <span className="bg-gradient-to-t from-side to-light text-transparent bg-clip-text font-medium">
          Projects
        </span>
      </h2>
      <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            quickOverview={project.quickOverview}
            tech={project.tech}
            handleLearnMoreClick={handleLearnMoreClick}
          />
        ))}
      </ul>

      <AnimatePresence>
        {isOpen && (
          <>
            <Modal clickedProject={currentProject} closeModal={closeModal} />
            <Backdrop closeModal={closeModal} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
