import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { SkillCard } from "../components/SkillCard";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { certificates, experiences } from "../data/about";
import { education } from "../data/about";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
export const Home = () => {
  return (
    <>
      <Hero />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="  px-6 md:px-25 py-20"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=" mt-12  lg:px-30 px-10"
      >
        <h3 className="text-3xl font-bold text-text-primary mb-12">Skills </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.category} />
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="about"
        className="px-6 md:px-25 py-20"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Intro — spans 2 cols */}
          <div className="md:col-span-2 bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
            <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">
              Who I Am
            </p>
            <p className="text-text-primary text-lg font-semibold">
              Frontend Developer based in Alexandria, Egypt
            </p>
            <p className="text-text-secondary leading-relaxed">
              I build clean, responsive web applications with a focus on React
              and TypeScript. I care about code quality, reusable components,
              and creating interfaces that actually feel good to use. Currently
              looking for new opportunities where I can keep growing as a
              developer.
            </p>
            <div className="flex gap-17">
              {" "}
              {[
                { value: "2+", label: "Years Experience" },
                { value: "3+", label: "Projects Built" },
                { value: "5+", label: "Technologies" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-bold text-accent">{value}</p>
                  <p className="text-text-secondary text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats — 1 col */}
          {/* Education — 1 col */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col  gap-6">
            <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">
              Education
            </p>

            {/* Degree */}
            <div className="flex flex-col gap-1">
              <h3 className="text-text-primary font-semibold text-lg">
                {education.degree}
              </h3>
              <p className="text-accent text-md">{education.institution}</p>
              <p className="text-text-secondary text-sm">{education.period}</p>
            </div>
          </div>

          {/* Experience — spans 2 cols */}
          <div className="md:col-span-2 bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-6">
            <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">
              Experience
            </p>
            <div className="flex flex-col md:flex-row gap-8 px-8 ">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative flex flex-col gap-2">
                  <span className="absolute -left-[29px] w-3 h-3 rounded-full bg-accent border-2 border-bg-card top-1" />
                  <h3 className="text-text-primary font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-accent text-sm font-medium">
                    {exp.company}
                  </p>
                  <p className="text-text-secondary text-xs">{exp.period}</p>
                  <ul className="flex flex-col gap-1 mt-1">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm flex gap-2"
                      >
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-6">
            {/* Certificates */}
            <div className="flex flex-col gap-3">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">
                Certificates
              </p>
              {certificates.map((cert) => (
                <div key={cert.name} className="flex flex-col gap-1">
                  <p className="text-text-primary text-sm font-medium">
                    {cert.name}
                  </p>
                  <p className="text-text-secondary text-xs">{cert.issuer}</p>
                </div>
              ))}
            </div>

            {/* LinkedIn link */}
            <a
              href={education.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:underline text-sm mt-auto"
            >
              <FaLinkedin /> View on LinkedIn
            </a>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="contact"
        className="px-6 md:px-25 py-20 flex flex-col  gap-6"
      >
        <h2 className="text-3xl font-bold text-text-primar">Get In Touch</h2>
        <p className="text-text-secondary text-lg max-w-xl">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open
        </p>
        <a
          href="mailto:mohamed.m.gbr@hotmail.com"
          className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 font-medium w-fit"
        >
          your email
        </a>
      </motion.section>
    </>
  );
};
