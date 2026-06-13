import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./components/Projects";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import { useEffect, useState } from "react";
import Contact from "./sections/Contact";

/*type Story = {
  id: number;
  name: string;
  genre: string;
  status: string;
  created_at: string;
  updated_at: string;
  author: string;
};*/

function App() {
  //const [data, setData] = useState<Story[]>([]);

  //useEffect(() => {
    //fetch("http://127.0.0.1:8000/api/stories/")
      //.then(res => res.json())
      //.then((res) => {
        //console.log(res.data);
        //setData(res.data);
      //});
  //}, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
</div>
  //{data.map((singleData) => (
        //<h1 key={singleData.id}>
         // {singleData.author}
        //</h1>
     // ))}
    //</div>
 
  );
}

export default App;