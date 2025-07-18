import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact_main">
      <h1 className="contactUs_text_main">Contact Us</h1>

      <p className="contact_subheading">
        Have questions, want to support our mission, or looking to get involved? We’d love to hear from you.
      </p>

      <div className="contact_info_section">
        <p><strong>Phone:</strong></p>
        <ul>
          <li>+251 934 641 309</li>
          <li>+251 9 34 64 13 10</li>
          <li>+33 66 44 95 674</li>
          <li>+1 425 780 0316</li>
          <li>+1 571 398 9298</li>
        </ul>

        <p><strong>Email:</strong> Mennainfo@gmail.com</p>

        <p><strong>Address:</strong><br />
          Gondar City, Kebele 15,<br />
          Around Stadium, Next to Basketball Court.
        </p>
      </div>

      <p className="contact_note">
        Thank you for your interest in Menna. Together, we can bring hope and dignity to those who need it most.
      </p>
    </div>
  );
}

export default Contact;
