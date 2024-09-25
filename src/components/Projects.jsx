import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 pb-4 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-[#dfd9ff]"
      >
        Projects
      </motion.h2>
      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] flex flex-col"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(project.link, "_blank")}
                  className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <FaGithub className="w-3/4 h-3/4 object-contain text-white"/>
                </div>
              </div>
            </div>
            <div className="mt-5 flex-grow">
              <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
              <p className="mt-2 text-secondary text-[14px] text-justify">{project.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap">
              {project.technologies.map((tag, index) => (
                <p
                  key={`${project.title}-${tag}`}
                  className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-300"
                >
                  {tag}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;