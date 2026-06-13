import { useState, useEffect,RefObject } from "react";
import profileImg from "../assets/profile.jpg";
import useInView from "../hooks/useInView";

function Hero() {
  const [visible, setVisible] = useState(false);
  const[ref,inView] = useInView();

 // useEffect(() => {
   // const timer = setTimeout(() => setVisible(true), 50);
    //return () => clearTimeout(timer); 
  //}, []);

  return (
    <section id="hero" className="hero"  ref={ref as RefObject<HTMLElement>} style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
      
      
    
      <h1 className="hero-title">Sabin Pyakurel </h1>
      <div className="hero-image">
        <img src={profileImg} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;