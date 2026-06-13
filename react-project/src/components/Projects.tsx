import { useState, useEffect,RefObject } from "react";
import ProjectCard from "./ProjectCard";
import useInView from "../hooks/useInView";
function Projects() {
  const [filter, setFilter] = useState("All");
  const [ref, inView] = useInView();
  useEffect(() => {
    document.title = filter === "All"
      ? "Sabin Pyakurel"
      : `${filter} Projects — Sabin Pyakurel`;
  }, [filter]);

  const projects = [
    {
      title: "End-to-end complete ATS system",
      type: "Backend",
      description: "AI-assisted ATS system using Django, TF-IDF, Word2Vec and Random Forest.",
      github: "https://github.com/proustpunk/Test-Generation",
    },
    {
      title: "Suspicious Dataset",
      type: "Dataset",
      description: "Structured dataset pipeline for storing and analyzing suspicious scenarios",
      github: "https://github.com/proustpunk/SuspiciousActivityDataset",
    },
    {
      title: "Hopeless",
      type: "Game",
      description: "Experimental Platformer Game",
      github: "https://seeker13.itch.io",
    },
  ];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.type === filter);

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      
      <h2>Projects</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Game")}>Game</button>
        <button onClick={() => setFilter("Dataset")}>Dataset</button>
        <button onClick={() => setFilter("Backend")}>Backend</button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            type={p.type}
            description={p.description}
            github={p.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;