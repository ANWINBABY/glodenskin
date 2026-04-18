import React from "react";
import { GiGasMask, GiMicroscope, GiHealthNormal } from "react-icons/gi";
import "../styles/services.css";

import star from "../assets/star.png";
import lavenderStar from "../assets/star (1).png"; 

export default function Services() {
  return (
    <div className="services-section">
      <h1>Our Service Skincare</h1>
      <br />

      <div className="services-image">
        <img src={star} alt="services" />
      </div>

              <div className="service-grid">
                {/* Card 1 */}
                <div className="service-item">
                  <div className="service-icon-box">
                    <GiGasMask />
                  </div>
                  <h3>Facial Wash</h3>
                  <p>
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="service-item">
                  <div className="service-icon-box">
                    <GiMicroscope />
                  </div>
                  <h3>Microneedling</h3>
                  <p>
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="service-item highlighted-service">
                  <div className="service-icon-box">
                    <GiHealthNormal />
                  </div>
                  <h3>HydraFacial</h3>
                  <p>
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
                  </p>
                </div>
              </div>                
              <img src={lavenderStar} alt="lavender" className="hydra-star" />

    </div>
    
  );
}