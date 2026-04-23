import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const timeline = [
  { period: "2011 – 2021", school: "Kunil Educational Institution", detail: "Primary & Secondary Education" },
  { period: "2021 – 2023", school: "Dhakeerath English Higher Secondary School", detail: "Biology Science" },
  { period: "2023 – 2026", school: "Srinivas Institute of computer Science and Informative Science ", detail: "BCA (Full-Stack web development, cloud Computing, Artificial Intelligence)" },
];

const Education = () => (
  <section id="education">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">My <span className="gold-gradient-text">Education</span></h2>
        <p className="section-subtitle">Academic journey so far</p>
      </AnimatedSection>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <AnimatedSection key={i}>
              <div className={`relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400 z-10 mt-8 animate-pulse" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="card-glass p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] border border-yellow-400/40 hover:border-yellow-400"> 
                    <div className="flex items-center gap-2 mb-2 text-primary text-sm font-medium">
                      <GraduationCap size={16} />
                      {item.period}
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">{item.school}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
