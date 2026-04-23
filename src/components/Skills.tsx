import { BookOpen, Heart, Code, Users, Brain, Clock, MessageCircle, Lightbulb, Monitor, FileText, Video, PenTool } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Technical Skills",
    items: [
      { name: "Programming Languages : Java, Python, C, PHP", icon: Code },
      { name: "Web Technologies : HTML, CSS, JavaScript", icon: PenTool },
      { name: "Database Management : MySQL, MongoDB", icon: Lightbulb },
      { name: "Tools & Software : VS Code, Git, Android Studio", icon: Users },
      { name: "Operating Systems : Windows, Linux", icon: Monitor },
      { name: "Concepts : OOP, Data Structures,", icon: FileText },
      { name: "Frameworks : React, Node.js", icon: Code },
     { name: "Version Control : Git & GitHub", icon: Code },
     { name: "Problem Solving & Algorithms", icon: Brain },
     { name: "Software Development Lifecycle", icon: FileText },
     { name: "API Integration", icon: Code },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Problem Solving", icon: Brain },
      { name: "Communication", icon: MessageCircle },
      { name: "Adaptability", icon: Brain },
      { name: "Patience & Empathy", icon: Heart },
      { name: "Time Management", icon: Clock },
      { name: "Teamwork & Collaboration", icon: Users },
      { name: "quick Learner", icon: Lightbulb },
      { name: "Attention to Detail", icon: BookOpen },
      { name: "Creativity", icon: Video },
      { name: "Critical Thinking", icon: FileText },
     { name: "Leadership Potential", icon: Users },
     { name: "Positive Attitude", icon: Heart },
     { name: "Resilience", icon: Clock },
     { name: "Open-mindedness", icon: Lightbulb },
    ],
  },
 
];

const Skills = () => (
  <section id="skills" className="bg-secondary">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">My <span className="gold-gradient-text">Skills</span></h2>
        <p className="section-subtitle">What I bring to the table</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <AnimatedSection key={ci}>
             <div className="card-glass p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] border border-yellow-400/40 hover:border-yellow-400">
              <h3 className="font-heading font-semibold text-lg text-primary mb-6">{cat.title}</h3>
              <div className="space-y-4">
                {cat.items.map((skill, si) => (
                  <motion.div
                    key={si}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-foreground/90 group"
                  >
                    <skill.icon size={18} className="text-primary/70 group-hover:text-primary transition-colors shrink-0" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
