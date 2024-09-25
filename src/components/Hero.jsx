import { HERO_CONTENT } from './../constants/index';
import profilePic from "../assets/edaNurProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
});

function Hero() {
    return (
        <div className='border-b border-neutral-900 pb-4 pt-24 lg:pb-32 overflow-hidden'>
            <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8 lg:flex lg:justify-center lg:items-center lg:pl-12'>
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            whileInView="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>
                            Eda Nur Mutlu
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        bg-clip-text text-3xl tracking-tight text-transparent'>
                            Senior Computer Engineering Student
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            whileInView="visible"
                            className='my-2 max-w-2xl py-6 font-light tracking-widest text-justify'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 lg:flex lg:justify-center lg:items-center'>
                    <div className='flex justify-center items-center'>
                        <motion.img
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            className='w-[70%] rounded-lg'
                            src={profilePic}
                            alt="Eda Nur Profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero