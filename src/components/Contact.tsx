import React from "react";

interface ContactInterface {
  workRef: React.RefObject<HTMLDivElement> | null;
}

const Contact: React.FC<ContactInterface> = ({ workRef }) => {
  return (
    <div className="work-container" ref={workRef}>
      <div className="work-wrapper">
        <h1 className="work-title">ENQUIRY FORM</h1>
        <p className="work-paragraph">I'm always down for collaborations</p>

        <div className="content-content">
          <form className="contact-content-wrapper">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
              />
            </div>

            <div className="form-text-area">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="button-container">
              <button className="btn">
                GET IN TOUCH{" "}
                <span className="button-img">
                  <img
                    src={require("../assets/carbon_send.png")}
                    className="btn-img-item"
                    alt=""
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
