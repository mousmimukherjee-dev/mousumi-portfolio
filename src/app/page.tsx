"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{

    history.scrollRestoration="manual"
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Hero/>
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
}
