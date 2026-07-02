import type { Skill } from "../types/skills";

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300">
      <h3 className="text-accent font-semibold text-lg">{skill.category}</h3>
      <ul className="flex flex-col gap-2">
        {skill.items.map((item) => (
          <li
            key={item}
            className="text-text-secondary text-sm flex items-center gap-2"
          >
            {" "}
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
