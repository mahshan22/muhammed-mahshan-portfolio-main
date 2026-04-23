import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import HeroImage from "./HeroImage";

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center relative overflow-hidden"
    style={{ background: "var(--gradient-hero)" }}
  >
    {/* Decorative circles */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />

    <div className="section-container relative z-10 w-full">
      
      {/* 🔥 MAIN FLEX */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* ✅ LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-heading font-medium text-lg mb-4"
          >
            Hello, I'm
          </motion.p>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl text-foreground mb-4 leading-tight">
            Muhammed <span className="gold-gradient-text">Mahshan</span>
          </h1>

          <h2 className="font-heading font-semibold text-xl md:text-2xl text-muted-foreground mb-6">
            Web Developer & BCA Student
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            A motivated and detail-oriented BCA graduate with a strong foundation in 
            computer applications, programming, and software development.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume/Mahshan_Resume.pdf"
              download="Mahshan_Resume.pdf"
              className="btn-gold inline-flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </a>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline-gold inline-flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </button>
          </div>
        </motion.div>
        {/* ✅ RIGHT SIDE */}
        <HeroImage />
      </div>
    </div>
  </section>
);

export default Hero;