
import useInView from "../hooks/useInView";
import { RefObject } from "react";

function About() {
  const [ref, inView] = useInView();

  return (
    
    <section id="about"  ref={ref as RefObject<HTMLElement>} style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
      <h2>About</h2>

      <p>
        Python-focused developer working on backend systems and applied machine learning.
        Builds practical systems using Django and other backend tools, focusing on clear
        data flow and structured problem solving.
      </p>

      <p>
        Interested in resume ranking systems, data pipelines, and building real-world
        applications that combine ML and backend logic.
      </p>
    </section>
  );
}

export default About;