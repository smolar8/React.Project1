import React from "react";

export const Offer = () => {
  return (
    <div className="offer">
      <section className="offer" id="offer">
        <div className="container_everything">
          <h2 className="title">Czym zajmuje się nasza firma?</h2>
          <div className="offer_container">
            <div className="square">
              <div className="circle"></div>
              <div className="square_text">
                <h3 className="service">Zabiegi na twarz</h3>
                <h4 className="news">(nowość)</h4>
              </div>
            </div>
            <div className="square">
              <h3 className="service">Manicure</h3>
            </div>
            <div className="square">
              <h3 className="service">Pedicure</h3>
            </div>
            <div className="square">
              <h3 className="service">Masaż</h3>
            </div>
            <div className="square">
              <h3 className="service">Makijaż</h3>
            </div>
            <div className="square">
              <h3 className="service">Promocja</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
