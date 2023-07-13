import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
interface ContactInterface {
  workRef: React.RefObject<HTMLDivElement> | null;
}

const Contact: React.FC<ContactInterface> = ({ workRef }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const form = React.useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("All fields are required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }

    try {
      const form = e.currentTarget;
    
      const response = await emailjs.sendForm(
        "service_5z9rhij",
        "template_b4g6ecu",
        form,
        "rBFVWS5DalD5UXrBD"
      );

      if (response.text) {
        toast.success("Message sent successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error: any) {
      console.log(error.text);
      toast.error("Something was wrong", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };
  return (
    <div className="contact-container" ref={workRef}>
      <div className="work-wrapper">
        <h1 className="work-title">ENQUIRY FORM</h1>
        <p className="work-paragraph">I'm always down for collaborations</p>

        <div className="content-content">
          <form className="contact-content-wrapper" onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                onChange={handleChange}
                value={formData.subject}
                required
              />
            </div>

            <div className="form-text-area">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
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
