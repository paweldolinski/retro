import React from "react";
import Separator from "./Separator";
import Line from "./Line";
import Constants from "../data/Constants"

const Contact = () => {
  const { contactIcons } = Constants
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__box box">
          <div className="contact__box title">
            <h1 className="contact__title">CONTACT ME</h1>
            <Separator></Separator>
            <p className="title__subtitle">I'LL BE GLAD TO ANSWER YOUR QUESTIONS!</p>
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
          <Line className={"line"} />
          <div className="contact__icons-wrapper">
            {contactIcons.map((contact, index) => {
              return <div className="contact__icon" key={index}>
                <img
                  src={contact.img}
                  alt={contact.alt}
                />
              </div>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
