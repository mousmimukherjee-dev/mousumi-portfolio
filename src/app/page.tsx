import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}
