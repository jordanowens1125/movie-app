"use client";

import { useState } from "react";
import MovieWTitle from "../movie-cards/movie-w-title";
import "./carousel.scss";
export default function Carousel({
  sectionID,
  count = 4,
  showPerSlide = 2,
  right = true,
  height,
  breakpoint = 425,
  cardMargin = 5,
  items,
}) {
  const [mLeft, setMLeft] = useState(0);
  const getTotalCardWith = () => {
    const sect = document.getElementById(sectionID);

    const card = sect.getElementsByClassName("card")[0];

    const cardWidth = card.offsetWidth;
    const style = card.currentStyle || window.getComputedStyle(card);
    const mLeft = parseInt(style.marginLeft);
    const mRight = parseInt(style.marginRight);

    return cardWidth + mLeft + mRight;
  };
  const moveRight = () => {
    const totalCardWidth = getTotalCardWith();
    const sect = document.getElementById(sectionID);
    const wrapper = sect.getElementsByClassName("wrapper")[0];
    const wrapperWidth = wrapper.offsetWidth;
    let newVal = 0;
    let totalSlideWidth = 0;
    if (parseInt(window.innerWidth) >= breakpoint) {
      totalSlideWidth = showPerSlide * totalCardWidth;
      newVal = parseInt(mLeft) - totalSlideWidth;
    } else {
      totalSlideWidth = totalCardWidth;
      newVal = parseInt(mLeft) - totalCardWidth;
    }
    // console.log(newVal, wrapperWidth);

    if (Math.abs(newVal) >= wrapperWidth - totalSlideWidth) {
      // make sure left is showing
      const left = sect.getElementsByClassName("left")[0];
      left.classList.remove("none");
      setMLeft(newVal);
      const right = sect.getElementsByClassName("right")[0];
      right.classList.add("none");
    }
    if (Math.abs(newVal) < wrapperWidth) {
      const left = sect.getElementsByClassName("left")[0];
      left.classList.remove("none");
      setMLeft(newVal);
    } else {
      const right = sect.getElementsByClassName("right")[0];
      right.classList.add("none");
    }
  };

  const moveLeft = () => {
    const totalCardWidth = getTotalCardWith();
    const sect = document.getElementById(sectionID);
    let newVal = 0;
    if (parseInt(window.innerWidth) >= breakpoint) {
      newVal = parseInt(mLeft) + showPerSlide * totalCardWidth;
    } else {
      newVal = parseInt(mLeft) + totalCardWidth;
    }

    if (Math.abs(newVal) === 0) {
      const right = sect.getElementsByClassName("right")[0];
      right.classList.remove("none");
      setMLeft(newVal);
      const left = sect.getElementsByClassName("left")[0];
      left.classList.add("none");
    } else if (Math.abs(newVal) > 0) {
      const right = sect.getElementsByClassName("right")[0];
      right.classList.remove("none");
      setMLeft(newVal);
    } else {
      const left = sect.getElementsByClassName("left")[0];
      left.classList.add("none");
    }
  };

  const wrapperWidth = (100 / showPerSlide) * 1;
  return (
    <div className="container carousel-container">
      <button className="left none" onClick={moveLeft}>
        Left
      </button>

      <div
        className="carousel"
        style={{ "--height": height, "--cardMargin": `${cardMargin}px` }}
      >
        <div
          className="wrapper"
          style={{
            marginLeft: mLeft,
            "--count": count,
            "--wrapperWidth": `${wrapperWidth}%`,
          }}
        >
          {items}
        </div>
      </div>
      <button className={right ? "right" : "right none"} onClick={moveRight}>
        Right
      </button>
    </div>
  );
}
