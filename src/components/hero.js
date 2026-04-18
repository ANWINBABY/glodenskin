import React from "react";
import "../styles/hero.css";
import girl from "../assets/girl.png";
import starIcon from "../assets/star_16381239.png"; 
import lavender_star  from "../assets/lavender_star.png"
import product from "../assets/toothpaste.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Happy Future <br /> Skincare Shop
        </h1>

        {/* PRODUCT SECTION */}
        <div className="product-card">
          
          {/* ARCH DESIGN */}
          <div className="arch-container">
            <div className="arch-outline"></div>
            <div className="arch-pink"></div>

          {/* TOOTHPASTE IMAGE */} 
          <img src={product} alt="toothpaste" className="toothpaste-icon" />

            {/* STAR */}
            <div className="star-wrapper">
             <img src={starIcon} className="custom-star" alt="star" />
            </div>
          </div> {/* <--- Added missing close for arch-container */}

          {/* PRODUCT INFO */}
          <div className="product-container">
            <div className="product-header">
              <h2 className="product-title">Cream Light</h2>
              <span className="product-price">$20.00</span>
              <div className="vertical-text-container">
                <h2 className="vertical-text">Our Product</h2>
              </div>
            </div>
            <div className="product-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

        </div> {/* <--- Added missing close for product-card */}
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="image-container">
          <img src={girl} alt="model" className="hero-model" />
                  
          <div className="star-wrapper star-main">
            <img src={starIcon} alt="Star Icon" />
          </div>
        </div>
      </div>
      <div className="horizontal-star">
          <img 
            src={lavender_star} 
            alt="Partial Star" 
            />
      </div>
      <div className="half-star">
        <img 
          src={lavender_star} 
          alt="Partial Star" 
        />
      </div>
      <div className="product-description">
        <p className="description-text">
          Li Europan lingues es members del sam</p>
        <p className="description-text-text">
          familie lor separat existentie es un myth. 
        </p>
      </div>
      <button className="shop-now-slanted">
        <span className="shop-now-inner">
          Shop Now
        </span>
      </button>
    </section>
  );
}