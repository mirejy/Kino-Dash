import React, { useEffect, useState } from "react";
import "../../style/CSS/Slider.css";
import FirstImgSlider from "../../images/FirstImgSlider.jpg";
import SecondImgSlider from "../../images/SecondImgSlider.jpg";
import ThreeImgSlider from "../../images/ThreeImgSlider.jpg";
import ForImgSlider from "../../images/ForImgSlider.jpg";

function Slider() {
  var counter = 1;

  setInterval(function () {
    document.querySelector("#radio" + counter).checked = true;

    counter++;

    if (counter > 4) {
      counter = 1;
    }
  }, 2500);

  return (
    <div className="Slider">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img src={FirstImgSlider} className="topFilm" alt="" />
          </div>

          <div className="slide">
            <img src={SecondImgSlider} className="topFilm" alt="" />
          </div>

          <div className="slide">
            <img src={ThreeImgSlider} className="topFilm" alt="" />
          </div>

          <div className="slide">
            <img src={ForImgSlider} className="topFilm" alt="" />
          </div>

          <div className="navigator-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>

          <div className="navigator-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
