export default function Footer() {
  return (
    <section id="contact" className="contact">
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat</p>
        <div className="contact-info">
          <div className="social-links">
            <a href="https://github.com/zmbekdemir" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon">📂</div>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/zeliha-melek-bekdemir-030258256" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon">💼</div>
              <span>LinkedIn</span>
            </a>
          </div>
          <a href="mailto:zelihamelek.2004@gmail.com" className="social-link">
            <div className="contact-icon">📧</div>
            <span className="contact-email">E-mail</span>
          </a>
        </div>
      </div>
    </section>
  );
} 