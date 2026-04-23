import { Briefcase, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Experience = () => (
  <section id="experience">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">My <span className="gold-gradient-text">Experience</span></h2>
        <p className="section-subtitle">Professional journey</p>
      </AnimatedSection>

      <AnimatedSection>
          <div className="card-glass p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] border border-yellow-400/40 hover:border-yellow-400">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground">Business executive, VE Overseas 
2024 – Present</h3>
              
            </div>
          </div>
          <ul className="space-y-3 mt-6">
            {["Teaching students across various subjects", "Clearing doubts with patience and clarity", "Managing structured learning sessions"].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85">
                <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Experience;
