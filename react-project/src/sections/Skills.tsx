
import { RefObject } from "react";
import useInView from "../hooks/useInView";


function Skills() {
  const[ref,inView] = useInView();
  return (
    <section id="Skills"  ref={ref as RefObject<HTMLElement>} style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
      <h2>Technical Skills</h2>

      <p><b>Languages:</b> Python, Java, JavaScript, C#, SQL</p>

      <p>
        <b>Backend / ML:</b> Django, TF-IDF, Word2Vec, Random Forest,
        cosine similarity, pandas, NumPy
      </p>

      <p><b>Game Development:</b> Unity, C#</p>

      <p><b>Tools:</b> Git, FFmpeg, GitHub</p>
    </section>
  );
}

export default Skills;