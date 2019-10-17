import React from "react";
import Separator from "./Separator";
import Line from "./Line";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__box box">
          <div className="contact__box title">
            <h1 className="contact__title">CONTACT ME</h1>
            <Separator></Separator>
            <p>I'LL BE GLAD TO ANSWER YOUR QUESTIONS!</p>
          </div>
        </div>
        <div className="contact__box box">
          <form className="contact__form">
            <input className="contact__input" type="text" name="name" placeholder="Name" />
            <input className="contact__input" type="text" name="mail" placeholder="e-mail" />
            <input className="contact__input" type="text" name="subject" placeholder="Subject" />
            <textarea className="contact__textarea" type="text" name="message" placeholder="Message" />
            <button className="contact__btn" type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact__box box">
          <h2>I AM SOCIAL</h2>
          <Line />
          <div className="contact__icons-wrapper">
            <div className="contact__icon">
              <img
                src={require("../assets/img/contact-icons/twitter.png")}
                alt="/"
              />
            </div>
            <div className="contact__icon">
              <img
                src={require("../assets/img/contact-icons/facebook.png")}
                alt="/"
              />
            </div>
            <div className="contact__icon">
              <img
                src={require("../assets/img/contact-icons/google.png")}
                alt="/"
              />
            </div>
            <div className="contact__icon">
              <img
                src={require("../assets/img/contact-icons/media_10.png")}
                alt="/"
              />
            </div>
            <div className="contact__icon">
              <img
                src={require("../assets/img/contact-icons/linkedin.png")}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
