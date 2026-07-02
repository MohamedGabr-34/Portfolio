import { NavLink } from "react-router-dom";
import type { Project } from "../types/projects";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
export const ProjectCard = ({
  id,
  thumbnail,
  github,
  title,
  description,
  techStack,
  liveDemo,
}: Project) => {
  return (
    <div className="bg-bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors duration-300 flex flex-col pb-5">
      <img src={thumbnail} alt="" className="w-full h-48 object-cover" />
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h3 className="text-text-primary font-semibold text-xl">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {" "}
          {techStack.map((skill) => {
            return (
              <span
                key={skill}
                className="px-3 py-1 bg-bg-secondary text-accent text-sm rounded-full border border-border"
              >
                {" "}
                {skill}
              </span>
            );
          })}
        </div>

        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex gap-4 mt-auto pt-4 border-t border-border px-10 ">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
        >
          <HiExternalLink className="text-lg" /> GitHub Live Demo
        </a>
        <NavLink
          to={`/projects/${id}`}
          className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200 text-sm ml-auto"
        >
          Details →
        </NavLink>
      </div>
    </div>
  );
};
