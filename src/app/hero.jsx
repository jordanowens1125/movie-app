"use client";
import { useState } from "react";
import MovieWDetails from "./components/movie-cards/movie-w-details";
import "./hero.scss";
export default function Hero() {
  const [bg, setBG] = useState(
    "https://image.tmdb.org/t/p/w1280/uVlUu174iiKhsUGqnOSy46eIIMU.jpg"
  );
  const changeBG = (e) => {
    console.log(e.target.src);
    setBG(e.target.src);
  };
  return (
    <>
      <div className="hero-wrapper">
        <img src={bg} alt="" className="bg" />
        <div className="overlay"></div>
        <section id="hero">
          <div className="container">
            <h1 className="section-h">
              Welcome back <b>Jordan.</b> Here is what people are watching.
            </h1>
            <div className="group">
              <div onMouseEnter={changeBG}>
                <MovieWDetails />
              </div>
              <div>
                <MovieWDetails />
              </div>
              <div>
                <MovieWDetails />
              </div>
              <div>
                <MovieWDetails />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
