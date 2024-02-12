import React from "react";
import "./Breadcrum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";

export const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrowIcon} alt="The Arrow Icon" /> Shop{" "}
      <img src={arrowIcon} alt="The Arrow Icon" /> {product.category}{" "}
      <img src={arrowIcon} alt="The Arrow Icon" /> {product.name}
    </div>
  );
};
