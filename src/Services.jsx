import React from "react";
import "./App.css";
import { Box } from "./Box";

export const Services = () => {
  const services = [
    {
      name: "Zabiegi na twarz",
      isNew: true,
    },
    {
      name: "Manicure",
      isNew: false,
    },
    {
      name: "Pedicure",
      isNew: false,
    },
    {
      name: "Masaż",
      isNew: false,
    },
    {
      name: "Makijaż",
      isNew: false,
    },
    {
      name: "Promocja",
      isNew: false,
    },
  ];
  return (
    <div className="offer">
      <section className="offer" id="offer">
        <div className="container_everything">
          <h2 className="title">Czym zajmuje się nasza firma?</h2>
          <div className="offer_container">
            {services.map((service, index) => {
              return (
                <Box
                  text={service.name}
                  isNew={service.isNew}
                  key={index}
                ></Box>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
