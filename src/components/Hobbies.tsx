import { BookOpen, Puzzle, Music, Car, Activity, Gamepad2, Code, Laptop} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const hobbies = [
  { name: "Reading", icon: BookOpen },
  { name: "Puzzle Solving", icon: Puzzle },
  { name: "Listening to Music", icon: Music },
  { name: "Traveling", icon: Car },
  { name: "Indoor & Outdoor Activities", icon: Activity },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Coding ", icon: Code },
  { name: "Building Projects", icon: Laptop },
];

const Hobbies = () => (
  <section className="bg-secondary">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">My <span className="gold-gradient-text">Hobbies</span></h2>
        <p className="section-subtitle">What I enjoy in my free time</p>
      </AnimatedSection>

      <div className="flex flex-wrap gap-6 justify-center">
        {hobbies.map((h, i) => (
          <AnimatedSection key={i}>
            <motion.div
              whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
              className="card-glass p-8 flex flex-col items-center gap-4 min-w-[160px]"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <h.icon className="text-primary" size={24} />
              </div>
              <p className="font-heading font-medium text-foreground">{h.name}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Hobbies;
