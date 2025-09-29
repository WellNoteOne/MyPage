import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h3 className="contact-title">Contact Me</h3>
      <p className="contact-text">
        You can contact me on social media or by email
      </p>
      <div className="contact-links">
        <a href="mailto:you@example.com" className="contact-link">
          Email
        </a>
        <a href="https://github.com/WellNoteOne" className="contact-link">
          GitHub
        </a>
        <a href="https://t.me/username" className="contact-link">
          Telegram
        </a>
      </div>
    </section>
  );
}
