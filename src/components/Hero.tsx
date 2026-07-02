import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20  px-6 md:px-25 gap-12">
      {" "}
      <div className="flex flex-col gap-6 max-w-xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-accent text-lg font-medium"
        >
          Hi, I'm Mohamed
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-text-primary"
        >
          Front-End Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-text-secondary text-lg leading-relaxed"
        >
          I build modern, responsive web applications using React and
          TypeScript.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-text-secondary text-sm"
        >
          React · TypeScript · Tailwind · Vite
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4 flex-wrap"
        >
          <NavLink
            to={"/projects"}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors duration-200 font-medium"
          >
            {" "}
            View Projects
          </NavLink>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 font-medium"
          >
            {" "}
            Contact Me
          </a>
        </motion.div>
      </div>
      <div className="flex justify-center items-center  relative">
        <div className="absolute inset-0 rounded-full bg-accent opacity-10 blur-2xl scale-110" />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src="/images/profilePic.jpeg"
          alt=""
          className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-accent"
        />
      </div>
    </section>
  );
};
