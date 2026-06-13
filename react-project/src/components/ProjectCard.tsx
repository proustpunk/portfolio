type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  github: string;
};

function ProjectCard({ title, type, description, github }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-type">{type}</p>
      <p className="project-description">{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;