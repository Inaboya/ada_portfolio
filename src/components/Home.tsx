import React from "react";
import { useNavigate } from "react-router-dom";

interface HomeInterface {
  workRef: React.RefObject<HTMLDivElement> | null;
}

const Home: React.FC<HomeInterface> = ({ workRef }) => {
  const location = useNavigate();

  const handleClick = () => {
    location("/about");
  };
  return (
    <div className="home-container" ref={workRef}>
      <div className="home-wrapper">
        <p className="job-title">UI / UX Designer</p>
        <h1 className="home-heading">Blessing Onyebuchi</h1>
        <p className="job-paragraph">
          I am UI/UX designer, creating and delivering elegant and meaningful
          user experience and interface design for software product. I am
          passionate about user-centric design that delights users and increase
          thier engagement.
        </p>

        <div className="button-container" onClick={handleClick}>
          <button className="btn">
            GET IN TOUCH{" "}
            <span className="button-img">
              <img
                src={require("../assets/arrow_right.png")}
                className="btn-img-item"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
