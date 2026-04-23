import { motion } from "framer-motion";

const AnimatedSection = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;