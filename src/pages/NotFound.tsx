import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center bg-bg">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-bold text-accent"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-text-primary text-2xl font-semibold"
      >
        Page not found
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-text-secondary text-lg max-w-md"
      >
        Looks like this page doesn't exist or was moved. Let's get you back on
        track.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <NavLink
          to="/"
          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors duration-200 font-medium"
        >
          Back to Home
        </NavLink>
      </motion.div>
    </div>
  );
};
