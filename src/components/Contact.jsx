import "./styles/contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-info">
        <h1>Contact</h1>

        <p>Email: akilapeiris92@gmail.com</p>
        <p>Phone: +94 71 586 74 57</p>
      </div>

      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
