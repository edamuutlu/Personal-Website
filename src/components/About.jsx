import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
    const handleDownloadCV = () => {
        const cvUrl = "/Eda-Nur-Mutlu-CV.pdf"; 
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Eda-Nur-Mutlu-CV.pdf";
        link.click();
    };
    

    return (
        <section id="about" className="border-b border-neutral-900 pb-4 pt-10 overflow-hidden">
            <h2 className='my-20 text-center text-4xl text-[#dfd9ff]'>
                About Me
            </h2>

            <div className="flex flex-col items-center">
            <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center text-justify lg:justify-start">
                        <p className="my-2 max-w-3xl">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pt-10 pb-24"
                >
                    <button
                        onClick={handleDownloadCV}
                        className="bg-[#915eff] text-white px-6 py-3 rounded-full hover:bg-[#7c4dff] transition duration-300"
                    >
                        Download CV
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default About