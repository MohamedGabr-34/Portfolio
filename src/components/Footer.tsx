import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4  w-full bg-bg-secondary border-t border-border  px-15 py-8 text-text-primary ">
      <div className="flex justify-between">
        <h3>My Name</h3>

        <div className="flex gap-6">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-200"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-200"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
        </div>
      </div>
      <p className="text-text-secondary text-sm">
        © 2025 Your Name. All rights reserved.
      </p>
    </footer>
  );
};
