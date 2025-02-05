import React from "react";
import img1 from "../../static/img1.jpg";
import img2 from "../../static/img2.jpg";
import "./Hero.css";




function Hero() {
  return (
    <>
      <div>
        <div className="overlay" id="overlay">
          <img src={img1} alt="Hero img" className="heroimg" />
          <div className="content">
            <div className="detail">
              Hi I am Akash Kr
              <br />A Passionate Software Developer
              <br /> from india
            </div>
            <img src={img2} className="secondimg" alt="secondary image" />
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;
