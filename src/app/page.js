import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return <main>
    
    <Hero/>

   <Projects/>

   <Experience/>

    <Skills/>

    <section id='contact'>
      <Contact/>
    </section>

  </main>;
}
