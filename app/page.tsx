"use client"
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/workExperience";
//import Portfolio from "@/components/portfolio";
//import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Projects from "@/components/projects";
import "./globals.css";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Projects />
      <Services />
      {/*<Portfolio />*/}
      
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
      <SpeedInsights />
    </main>
  );
}
