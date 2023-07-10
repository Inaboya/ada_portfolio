import React from "react";

interface WorkInterface {
  workRef: React.RefObject<HTMLDivElement> | null;
}

const Work: React.FC<WorkInterface> = ({workRef}) => {
  // const workRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="work-container" ref={workRef}>
      <div className="work-wrapper">
        <h1 className="work-title">MY WORK</h1>
        <p className="work-paragraph">Selected Recent Work</p>

        <div className="work-content">
          <div className="work-content-wrapper">
            <div className="work-image-container">
              <img
                src={require("../assets/work1.png")}
                className="work-image-item"
                alt=""
              />
              {/* <div className="work-image-text">
                <h1 className="work-image-title">Project 1</h1>
                <p className="work-image-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                </p>
              </div> */}
            </div>

            <div className="work-image-container">
              <img
                src={require("../assets/work2.png")}
                className="work-image-item"
                alt=""
              />
            </div>

            <div className="work-image-container">
              <img
                src={require("../assets/work3.png")}
                className="work-image-item"
                alt=""
              />
            </div>

            <div className="work-image-container">
              <img
                src={require("../assets/work4.png")}
                className="work-image-item"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
