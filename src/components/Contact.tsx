import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Build Something</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:dakshamalseda@gmail.com"
                data-cursor="disable"
              >
                dakshamalseda@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919601483320"
                data-cursor="disable"
              >
                +91-9601483320
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech CSE, IIIT Vadodara (Gandhinagar Campus) — 2024–2028
            </p>
            <p>
              12th & 10th, BAPS Swaminarayan Gurukul, Gondal — 2022–2024
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/HITMAN5050"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/daksh-amalseda-879b7934a/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/daksh_runss"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Whether it's a product, a collaboration, or just a conversation
              <br /> — <span>I'm always open.</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Daksh Amalseda
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
