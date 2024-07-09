import React from "react";
import "../styles/service.css";

export const Service = () => {
  return (
    <>
      <div className="Service">
      <h1 className="Service__header">Our Service</h1>
        <div className="Service__grid">
          <div className="Services__left">
            <h1 className="Service__title">Architectural Designs</h1>
            <p>
              {" "}
              We design spaces that blend functionality with aesthetics,
              including{" "}
            </p>
            <div className="img__con">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278165/picture_1_wqmmkw.png"
                alt=""
                style={{ width: '30%'}}

              />
            </div>
          </div>
          <div className="Services__right">
            <div className="img__cons">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278165/picture_1_wqmmkw.png"
                alt=""
                style={{ width: '30%'}}

              />
              <ul class="icon-text-list">
                <li class="icon-text-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Interior Designs</span>
                </li>
                <li class="icon-text-item">
                  <i class="fas fa-info-circle"></i>
                  <span>Exterior Designs</span>
                </li>
                <li class="icon-text-item">
                  <i class="fas fa-info-circle"></i>
                  <span>3D rendering </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
