import { HERO_CONTENT } from "./../constants/index";
import profilePic from "../assets/logo.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  const handleDownloadCV = () => {
    const cvUrl = "/Eda-Nur-Mutlu-CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Eda-Nur-Mutlu-CV.pdf";
    link.click();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pb-4 pt-24 lg:pb-32 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full lg:w-1/2 pt-6 flex justify-center items-center">
          <div className="relative">
            <img
              className="w-[200px] rounded-full mx-auto"
              src={profilePic}
              alt="Eda Nur Profile"
            />
            <motion.a
              href={"https://www.linkedin.com/in/eda-nur-mutlu/"}
              target="_blank"
              className="absolute bottom-8 right-5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <FaLinkedin
                size={28}
                className="media"
                style={{ color: "#d3d3d3" }}
              />
            </motion.a>
            <motion.a
              href={"https://github.com/edamuutlu"}
              target="_blank"
              className="absolute bottom-[72px] right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <FaGithub size={28} className="media" />
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-6 lg:flex lg:justify-center lg:items-center lg:pl-12">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              className="p-6 text-6xl font-medium text-white tracking-tight lg:text-7xl mt-8 lg:mt-0 text-center"
            >
              Eda Nur Mutlu
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              className="font-semibold bg-gradient-to-b from-[#72A0C1] to-[#A3C1AD] bg-clip-text text-3xl tracking-tight text-transparent text-center"
            >
              Senior Computer Engineering Student
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-2xl py-3 font-medium text-white tracking-widest text-center"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="flex gap-5">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-4 pb-24"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white text-black px-6 py-3 rounded-full border border-white hover:bg-gradient-to-b hover:from-[#72A0C1] hover:to-[#A3C1AD] hover:text-white transition duration-300"
                >
                  Contact Me
                </button>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-4 pb-24"
              >
                <button
                  onClick={handleDownloadCV}
                  className="text-white px-6 py-3 rounded-full border border-white hover:bg-gradient-to-b hover:from-[#72A0C1] hover:to-[#A3C1AD] hover:text-white transition duration-300"
                >
                  Download CV
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
