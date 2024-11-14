import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="pb-4 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-b from-[#72A0C1] to-[#A3C1AD] bg-clip-text tracking-tight text-transparent"
      >
        Projects
      </motion.h2>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="bg-[#2A2A2A] p-5 rounded-2xl w-full flex flex-col"
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
                  <FaGithub className="w-3/4 h-3/4 object-contain text-white" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex-grow">
              <h3 className="text-white font-bold text-[24px]">
                {project.title}
              </h3>
              <p className="mt-2 text-[#d3d3d3] text-[14px] text-justify">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap">
              {project.technologies.map((tag, index) => (
                <p
                  key={`${project.title}-${tag}`}
                  className="mr-2 mb-2 rounded  bg-gradient-to-b from-[#72A0C1] to-[#A3C1AD] bg-clip-text tracking-tight text-transparent px-2 py-1 text-sm font-medium text-gray-300"
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
