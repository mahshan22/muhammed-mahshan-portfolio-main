import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Experience />
    <Hobbies />
    <Contact />
    <Footer />
  </div>
);

export default Index;
