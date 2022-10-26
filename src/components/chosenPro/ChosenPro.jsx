import React, { useState } from "react";
import "./ChosenPro.css";

function ChosenPro({ product }) {
  const { image, title, type, price, id } = product;
  const [soni, useSoni] = useState(0);
  const Plus = () => {
    useSoni(soni + 1);
  };
  const Minus = () => {
    useSoni(soni - 1);
  };
  return (
    <div className="chosenPro">
      <img src={image} alt="" />
      <div className="text">
        {/* ///////// */}
        <div className="top">
          <h1>{title}</h1>
          <p>x</p>
        </div>
        {/* /////////// */}
        <div className="shtuk">
          <h1>
            <span>В наличии:</span> 264 шт.
          </h1>
          <h1>
            <span>В наличии:</span> 264 шт.
          </h1>
        </div>
        {/* ////// */}
        <div className="buttom">
          <div className="btns">
            <button onClick={Minus}>-</button>
            <span>{soni} шт </span>
            <button onClick={Plus}>+</button>
          </div>
          <div className="right">
            <h1> 123 900₽/шт</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChosenPro;
