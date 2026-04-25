import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ added
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_63wgoxj",          // ✅ your service ID
      "template_et69krc",         // ⚠️ replace this
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "hMmJMswtEhuZ46o8H"           // ⚠️ replace this
    )
    .then(() => {
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message ❌");
    });
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
                { icon: Phone, label: "Phone", value: "6235504714" },
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
              <div className="flex gap-4 pt-4 flex-wrap">
  <a href="https://wa.me/916235504714" target="_blank" className="social-icon whatsapp" data-tooltip="WhatsApp">
    <FaWhatsapp />
  </a>

  <a href="https://instagram.com/#" target="_blank" className="social-icon instagram" data-tooltip="Instagram">
    <FaInstagram />
  </a>

  <a href="https://facebook.com/YOUR_USERNAME" target="_blank" className="social-icon facebook" data-tooltip="Facebook">
    <FaFacebook />
  </a>

  <a href="https://linkedin.com/in/muhammed-mahshan-29565b393/" target="_blank" className="social-icon linkedin" data-tooltip="LinkedIn">
    <FaLinkedin />
  </a>

  <a href="https://github.com/mahshan22" target="_blank" className="social-icon github" data-tooltip="GitHub">
    <FaGithub />
  </a>
</div>
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