import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { CiFilter } from "react-icons/ci";
import { ProjectCard } from "../components/ProjectCard";
import { HiX } from "react-icons/hi";
import clsx from "clsx";
import { createPortal } from "react-dom";
const allTechs = [...new Set(projects.flatMap((p) => p.techStack))];
export const Projects = () => {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [filterOpt, setFilterOpt] = useState<string[]>([]);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const cards =
    filterOpt.length < 1
      ? projects
      : projects.filter((p) =>
          filterOpt.some((opt) => p.techStack.includes(opt)),
        );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!filterMenuRef.current?.contains(e.target as Node)) {
        setFilterMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <section className="flex flex-col gap-3 px-7 py-12 ">
      <div className="flex gap-4 flex-row px-4">
        <h1>Projects </h1>
        <button onClick={() => setFilterMenuOpen(true)}>
          <CiFilter />
        </button>
      </div>

      <div className="">
        {" "}
        {filterMenuOpen &&
          createPortal(
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex items-center justify-center">
              <div
                ref={filterMenuRef}
                className="bg-bg-secondary border border-border rounded-xl p-6 shadow-lg z-50 w-96 flex flex-col gap-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-text-primary font-semibold">
                    Filter by Tech
                  </h3>
                  {filterOpt.length > 0 && (
                    <button
                      onClick={() => setFilterOpt([])}
                      className="text-accent text-sm hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                  <button onClick={() => setFilterMenuOpen(false)}>
                    <HiX className="text-text-secondary hover:text-accent" />
                  </button>{" "}
                </div>
                <div className="flex flex-wrap gap-2">
                  {" "}
                  {allTechs.map((tech) => (
                    <span
                      className={clsx(
                        "px-3 py-1 rounded-full text-sm border cursor-pointer transition-colors duration-200",
                        filterOpt.includes(tech)
                          ? "bg-accent text-white border-accent"
                          : "border-border text-text-secondary hover:border-accent hover:text-accent",
                      )}
                      key={tech}
                      onClick={() => {
                        setFilterOpt((prev) =>
                          prev.includes(tech)
                            ? prev.filter((t) => t !== tech)
                            : [...prev, tech],
                        );
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>,
            document.body,
          )}{" "}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {cards?.map((card) => {
          return <ProjectCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};
