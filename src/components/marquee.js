import React from "react";
import "../styles/marquee.css";
import star from "../assets/darker_lavender_star.png";
import product from "../assets/toothpaste.png";
import shapedImage from "../assets/shaped_image.png";
import starIcon from "../assets/star_16381239.png";
import lavender from "../assets/lavender_star.png";
import startTwoIcons from "../assets/start_two_icons.png";

export default function PageWithMarquee() {
  const items = ["Skincare Product", "Cream", "Moisturizer", "Toner"];

  return (
    <div className="page-wrapper">
      {/* ============ MARQUEE SECTION ============ */}
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map((text, i) => (
            <div className="marquee-item" key={i}>
              <span>{text}</span>
              <img src={star} alt="icon" />
            </div>
          ))}
        </div>
      </div>

      {/* ============ PAGE SECTION ============ */}
      <div className="container">
        {/* LEFT SIDE */}
        <div className="left">
          <h1>Every Woman <br /> Deserves Beauty</h1>

          {/* New Parent Wrapper to move everything at once */}
          <div className="arch-wrapper">
            <div className="outline"></div>
            <div className="pink"></div>
            
            {/* The toothpaste and star are already inside in your previous code, 
                keep them here if they should move with the box */}
            <img src={product} alt="toothpaste" className="icon" />
            <div className="star-wrapper">
              <img src={starIcon} className="custom-stars" alt="star" />
            </div>
          </div>

          <div className="content">
            <h3>The Simplified Skincare Routine Fits Perfectly</h3>
            <p>
              Li Europan lingues es membres del sam familie. 
              <br />Lor separat existentie es un myth.
              <br />Li Europan lingues es membres del sam familie.
              <br />Lor separat existentie es un myth.
              <br />Li Europan lingues es membres del sam familie
            </p>
          </div>

          <div className="h2-wrapper">
            <h2>Get to Your Goals, Fast Skincare</h2>
            <div className="spray-glow h2-spray"></div>
          </div>
        </div> {/* Closed Left Side */}

        <img src={lavender} alt="lavender" className="lavender" />

        {/* RIGHT SIDE */}
        <div className="right">
          <p className="top-text">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
          </p>

          <div className="page-section">
            <div className="shop-btn">
              <img src={starIcon} alt="star" className="shop-star" />
              <div className="discount-text">
                Up to Discount <span>25%</span>
              </div>
              <svg className="shop-oval-svg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M40,100 C40,30 360,30 360,100 C360,170 40,170 40,100 Z" />
              </svg>
            </div>
          </div>

          {/* IMAGE & SPRAY GROUP */}
          <div className="image-rel-wrapper">
            <div className="spray-glow right-spray"></div>
            <div className="big">
              <img 
                src={shapedImage} 
                alt="skincare product" 
                className="shaped-image" 
              />
            </div>
          </div>

          <img src={startTwoIcons} alt="icons" className="shop-star-two" />
        </div> {/* Closed Right Side */}
      </div> {/* Closed Container */}
    </div>
  );
}