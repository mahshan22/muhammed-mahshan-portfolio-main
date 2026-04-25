import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_63wgoxj",      // your service ID
      "template_et69krc",     // paste your template ID here
      e.target,
      "hMmJMswtEhuZ46o8H"       // paste your public key here
    )
    .then(() => {
      alert("Message sent successfully ✅");
    })
    .catch(() => {
      alert("Failed to send ❌");
    });
  };

  return (
    <form onSubmit={sendEmail}>
      
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required 
      />

      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        required 
      />

      <textarea 
        name="message" 
        placeholder="Your Message" 
        required 
      />

      <button type="submit">
        Send Message
      </button>

    </form>
  );
};

export default Contact;