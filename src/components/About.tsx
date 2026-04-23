import { MapPin, Languages } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => (
  <section id="about" className="bg-secondary">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">About <span className="gold-gradient-text">Me</span></h2>
        <p className="section-subtitle">Get to know me better</p>
      </AnimatedSection>
      <AnimatedSection>
         <div className="card-glass p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] border border-yellow-400/40 hover:border-yellow-400">
          <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-8">
           A motivated and detail-oriented BCA 
graduate with a strong foundation in 
computer applications, programming, 
and software development. Skilled in 
problem-solving, database 
management, and web technologies, 
with a keen interest in learning new 
tools and emerging technologies. 
Eager to apply technical knowledge 
and contribute to innovative IT 
projects while continuously 
developing professional skills.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Kasaragod, Kerala</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Languages className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <p className="text-foreground font-medium">English, Hindi, Malayalam, Arabic</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default About;
