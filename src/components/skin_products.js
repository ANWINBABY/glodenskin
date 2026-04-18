import React from "react";
import "../styles/skin_products.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import star from "../assets/star_16381239.png";
import stars from "../assets/lavender_star.png";
import sunscreen from "../assets/Sunscreen.png";
import antiAging from "../assets/Anti-Aging.webp";
import cleansers from "../assets/Cleansers.webp";
import moisturizers from "../assets/Moisturizers.webp";
import starIcon from "../assets/star_16381239.png";

export default function Testimonials() {
  const products = [
    { name: "Sunscreen", price: "$55.00", className: "card-1", img: sunscreen },
    { name: "Anti-Aging", price: "$75.00", className: "card-2", img: antiAging },
    { name: "Cleansers", price: "$10.00", className: "card-3", img: cleansers },
    { name: "Moisturizers", price: "$15.00", className: "card-4", img: moisturizers },
  ];

  return (
    <>
      <section className="products-section">
        {/* ============ TOP PRODUCTS ROW ============ */}
        <div className="products-container">
          <div className="page-wrapper">
            <img src={starIcon} alt="decoration" className="decor-star-icon" />
          </div>
          <div className="left-content">
            <h1>Our Best<br />Skin Product</h1>
            <p>
              Li Europan lingues es membres del sam familie.
              <br /> Lor separat existentie es un myth.
              <br /> Li Europan lingues es membres del
            </p>
          </div>

          <div className="cards-container">
            {products.map((item, index) => (
              <div className={`product-card ${item.className}`} key={index}>
                <div className="image-placeholder">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="product-info">
                  <span className="product-name">{item.name}</span>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ NAVIGATION ARROWS ============ */}
        <div className="arrows-wrap">
          <button className="arrow-btn slanted"><FaArrowLeft /></button>
          <button className="arrow-btn slanted"><FaArrowRight /></button>
        </div>

        {/* ============ TESTIMONIAL SECTION ============ */}
        <div className="testimonial-section">
          <div className="testimonial-header">
            <div className="testimonial-accent-mist"></div>
            <h1>Our Clients Say</h1>
            <img src={star} alt="star" className="title-star-below" />
          </div>

          <div className="testimonial-cards-grid">
            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="round-avatar-box">
                 {/* Image can be added here: <img src={user1} alt="user" /> */}
                 <div className="placeholder-lines"></div>
              </div>
              <p>“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”</p>
              <div className="card-footer">
                <h4>Dandi Samibu</h4>
                <div className="star-row">★★★★★</div>
              </div>
            </div>

            {/* Card 2 - ACTIVE/CORAL */}
            <div className="testimonial-card active-card">
              <div className="round-avatar-box">
                 <div className="placeholder-lines"></div>
              </div>
              <p>“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”</p>
              <div className="card-footer">
                <h4>Siska Khuly</h4>
                <div className="star-row">★★★★★</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="round-avatar-box">
                 <div className="placeholder-lines"></div>
              </div>
              <p>“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”</p>
              <div className="card-footer">
                <h4>Marisa Osewa</h4>
                <div className="star-row">★★★★★</div>
              </div>
            </div>
          </div>

          <img src={stars} alt="decorative stars" className="title-star-lower" />

          {/* PAGINATION DOTS */}
          <div className="pagination-dots">
            <span className="dot"></span>
            <span className="dot active-dot"></span>
            <span className="dot"></span>
          </div>
        </div>  
      </section>
    </>
  );
}