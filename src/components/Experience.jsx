import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-[#dfd9ff]"
      >
        Experience
      </motion.h2>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {EXPERIENCES.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  {experience.title}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.company}
                </p>
              </div>

              <div className="mt-5 text-white-100 text-[14px] tracking-wider text-justify">
                {experience.description}
              </div>

              <div className="flex flex-wrap mt-4">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
