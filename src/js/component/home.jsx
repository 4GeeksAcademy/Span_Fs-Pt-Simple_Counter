import React from "react";
import { Contador } from "./digit";

export const Home = ({ counter }) => {
  const formatDigits = (counter) => {
    return String(counter).padStart(6, "0").split("").map(Number);
  };

  const digitsArray = formatDigits(counter);

  return (
    <div className="container d-flex justify-content-center align-items-center display-2">
      <Contador digitos={<i className="fa-solid fa-clock"></i>} />
      {digitsArray.map((digit, index) => (
      <Contador key={index} digitos={digit} />
      ))}
    </div>
  );
};
