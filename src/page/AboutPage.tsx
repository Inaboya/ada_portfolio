import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => {
  const workRef = React.useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const fileURL = require("../assets/Blessing_Onyebuchi_Resume.pdf");

    const link = document.createElement("a");

    link.href = fileURL;

    link.setAttribute("download", "");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
    <>
      <header className="header-container">
        <Navbar workRef={workRef} />
      </header>
      <div className="work-container">
        <div className="work-wrapper">
          <h1 className="work-title">ABOUT ME</h1>
        </div>

        <div className="about-content-1">
          <div className="about-wrapper-1">
            <div className="about-side-1">
              <div className="photo-container">
                <img
                  src={require("../assets/ada.png")}
                  className="photo-image"
                  alt=""
                />
              </div>

              <p className="paragraph-text-bio">
                “I love finding ways to make things easier fun and beautiful.”
              </p>
            </div>
            <div className="about-side-2">
              <p className="paragraph-text-1">
                My name Blessing Onyebuchi, I am a passionate, creative and
                collaborative UI/UX Designer with a focus on visual and
                interactive design. Passionate about solving users problems
                through creative thinking and developing minimal design
                solutions.
              </p>

              <p className="paragraph-text-1">
                I have learnt a lot of processes, thesis and methodology of
                UI/UX and product design through thorough tutoring, reading
                blogs and applying these projects, web designs, branding and
                identity in my spare time and at work. I am creative thinker and
                enjoy about new tools and approaches to enhance my design
                process on products end to end.
              </p>

              <div className="button-container">
                <button className="btn" onClick={handleDownload}>
                  <span className="btn-image">
                    <img
                      src={require("../assets/download.png")}
                      className="btn-image-item"
                      alt=""
                    />
                  </span>
                  MY RESUME
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content-2">
          <div className="about-content-wrapper">
            <h1 className="work-titles">My Values</h1>

            <ul className="content-items">
              <li className="content-item">
                I love to discover new ideas and opportunities. The main reason
                why I decided to become a UI/UX designer was that I felt that it
                is a part of my personality which will bring up change. In the
                future, I want to work on different projects under different
                conditions and in different industries around the world which is
                challenging yet fun at the same time.
              </li>

              <li className="content-item">
                I believe that good UI can make user experience very easy, and
                better experience will lead to more happy customers. So, I want
                to create a design that is not only beautiful and elegant, but
                also useful for users.
              </li>

              <li className="content-item">
                I believe that professional design is a collaborative process. I
                believe that UX designers must work with others to design the
                best user experience possible. I practice empathy and deep
                understanding of the user's problems and goals when designing a
                product.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
