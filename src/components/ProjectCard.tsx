import TechIcon from "./TechIcon";

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
      <div className="h-56 relative overflow-hidden group">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-code-md text-[10px] uppercase">
            {project.category}
          </span>
        </div>
        <h3 className="font-headline-lg text-xl text-on-surface mb-3 font-semibold">
          {project.title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
          {project.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex -space-x-2">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center"
              >
                <TechIcon icon={tech} />
              </div>
            ))}
          </div>
          {project.link && (
            <a
              className="text-primary hover:text-secondary transition-colors"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
