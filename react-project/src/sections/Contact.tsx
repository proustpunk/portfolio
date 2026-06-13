import { RefObject } from "react";
import useInView from "../hooks/useInView";

function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref as RefObject<HTMLElement>}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <h2>Contact</h2>

      <p>
        Feel free to reach out for collaborations, opportunities, or just to say hi.
      </p>

      <p>
        <b>Email:</b> <a href="mailto:sabinpyakurel0054@gmail.com">sabinpyakurel0054@gmail.com</a>
      </p>

      <p>
        <b>GitHub:</b> <a href="https://github.com/proustpunk" target="_blank" rel="noopener noreferrer">github.com/proustpunk</a>
      </p>

      <p>
        <b>LinkedIn:</b> <a href="https://linkedin.com/in/sabin-pyakurel" target="_blank" rel="noopener noreferrer">linkedin.com/in/sabin-pyakurel</a>
      </p>
    </section>
  );
}

export default Contact;