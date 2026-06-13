import { RefObject } from "react";
import useInView from "../hooks/useInView";



function Education() {
  const[ref,inView] = useInView();
  return (
    <section id="education"  ref={ref as RefObject<HTMLElement>} style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
      <h2>Education</h2>

      <div>
        <h3>Bachelor's Degree in Computer Engineering</h3>
        <p>Tribhuvan University — Final semester result pending</p>
      </div>

      <div>
        <h3>Intermediate Education</h3>
        <p>Pinnacle College</p>
      </div>
    </section>
  );
}

export default Education;