import { NavLink, useParams } from "react-router-dom";
import type { Project } from "../types/projects";
import { projects } from "../data/projects";
import { useEffect, useRef, useState } from "react";
import { HiExternalLink, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { createPortal } from "react-dom";
export const ProjectDetails = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { projectId } = useParams();
  const galleryRef = useRef<HTMLDivElement>(null);
  const projectDetails = projects.find((p) => p.id === projectId);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!galleryRef.current?.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!projectDetails)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center">
        <h1 className="text-6xl font-bold text-accent">Oops</h1>
        <p className="text-text-primary text-2xl font-semibold">
          Project not found
        </p>
        <p className="text-text-secondary text-lg max-w-md">
          This project doesn't exist or may have been removed.
        </p>
        <NavLink
          to="/projects"
          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors duration-200 font-medium"
        >
          Back to Projects
        </NavLink>
      </div>
    );
  return (
    <section className="flex flex-col md:flex-row gap-12 px-6 md:px-25 py-20">
      <div className="flex flex-col gap-6 md:w-1/2">
        <div>
          <video
            src={projectDetails.video}
            controls
            className="w-full rounded-xl border border-border "
          />
        </div>
        <div>
          <button
            onClick={() => setOpenMenu(true)}
            className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 font-medium w-full"
          >
            view Gallery
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {projectDetails.techStack.map((skill) => {
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
      </div>
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="text-4xl font-bold text-text-primary">
          {projectDetails.title}
        </h1>
        <div className="flex gap-4">
          <HiExternalLink className="text-lg" />
          <a
            href={projectDetails.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4"
          >
            liveDemo
          </a>
          <a
            href={projectDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4"
          >
            <FaGithub className="text-lg" />
            github
          </a>
        </div>

        <div>
          <h4 className="text-accent font-semibold text-lg">description</h4>
          <p className="text-text-secondary leading-relaxed">
            {projectDetails.description}
          </p>
          <h4 className="text-accent font-semibold text-lg">challenges</h4>
          <p className="text-text-secondary leading-relaxed">
            {projectDetails.challenges}
          </p>
          <h4 className="text-accent font-semibold text-lg">what I Learned</h4>
          <p className="text-text-secondary leading-relaxed">
            {projectDetails.whatILearned}
          </p>
        </div>
      </div>
      {openMenu &&
        createPortal(
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex items-center justify-center">
            <div
              ref={galleryRef}
              className="bg-bg-secondary border border-border rounded-xl p-6 z-50 w-3/4 max-h-[80vh] overflow-y-auto flex flex-col gap-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-text-primary font-semibold text-xl">
                  Gallery
                </h3>
                <button
                  onClick={() => setOpenMenu(false)}
                  className="text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <HiX className="text-xl" />
                </button>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1  gap-4">
                {projectDetails.gallery?.map((p) => (
                  <div
                    key={p.image}
                    className="flex flex-col gap-2 bg-bg-card border border-border rounded-lg overflow-hidden  object-cover "
                  >
                    <img
                      src={p.image}
                      alt={p.description}
                      className="w-full  "
                    />
                    <p className="text-text-primary font-medium text-sm px-4 pb-4">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};
