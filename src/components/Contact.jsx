import useScrollAnimation from "../hooks/useScrollAnimation";

const socials = [
  { name: "GitHub", url: "https://github.com/nisaladineth", icon: "GH" },
  { name: "Behance", url: "https://behance.net/nisaladineth", icon: "Be" },
  { name: "LinkedIn", url: "https://linkedin.com/in/nisaladineth", icon: "Li" },
  { name: "Instagram", url: "https://instagram.com/nisaladineth", icon: "Ig" },
];

export default function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simple mailto fallback
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=nisaladineth2001%40gmail.com&su=Hello%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact section ${isVisible ? "section--visible" : ""}`}
    >
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <h2 className="section__label">Get in Touch</h2>
            <h3 className="section__title">Let's Create Together</h3>
            <p className="contact__text">
              Have a project in mind? I'd love to hear about it. Whether it's a
              brand identity, a photoshoot, a video project, or a custom web
              application — let's make something remarkable.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">Email</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nisaladineth2001%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail-value"
                >
                  nisaladineth2001@gmail.com
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">WhatsApp</span>
                <a
                  href="https://wa.me/94781279894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail-value"
                >
                  0781279894
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Based in</span>
                <span className="contact__detail-value">
                  Colombo, Sri Lanka
                </span>
              </div>
            </div>

            <div className="contact__socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__input"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary contact__submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
