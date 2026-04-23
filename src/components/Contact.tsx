import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with backend
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Get In <span className="gold-gradient-text">Touch</span></h2>
          <p className="section-subtitle">Feel free to reach out</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatedSection>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "623554714" },
                { icon: Mail, label: "Email", value: "mohammedshaan068@gmail.com" },
                { icon: MapPin, label: "Address", value: "Kasaragod, Kerala" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <form onSubmit={handleSubmit} className="card-glass p-6 md:p-8 space-y-5">
              {[
                { key: "name" as const, placeholder: "Your Name", type: "text" },
                { key: "email" as const, placeholder: "Your Email", type: "email" },
              ].map((field) => (
                <input
                  key={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              ))}
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
              />
              <button type="submit" className="btn-gold inline-flex items-center gap-2 w-full justify-center">
                <Send size={16} /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
