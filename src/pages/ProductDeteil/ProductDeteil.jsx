
import React, { useState } from "react";

import "./ProductDeteil.css";
import Vector from "../../assets/image/Vector.png";
import Group from "../../assets/image/Group 55791.png";
import korzina from "../../assets/image/korzina.png";
import tochka from "../../assets/image/tochka.png";
import info from "../../assets/image/info.png";
import comp from "../../assets/image/Component 108.png";
import gruz from "../../assets/image/gruz.png";
import visa from "../../assets/image/visa-mastercard 1.png";
import visa2 from "../../assets/image/visa-mastercard-mir 1.png";
import paypal from "../../assets/image/paypal 1.png";
import tink from "../../assets/image/tinkoff 1.png";
import sber from "../../assets/image/sberbank 1.png";
import yandex from "../../assets/image/yandexmoney 1.png";

import { useParams } from "react-router-dom";

import { Data } from "../../data/data";

function ProductDeteil() {
  const [soni, useSoni] = useState(0);
  const { id } = useParams();
  const finded = Data.find((item) => item.id === id);
  const Plus = () => {
    useSoni(soni + 1);
  };
  const Minus = () => {
    useSoni(soni - 1);
  };
  return (
    <div className="ProductDetail">

      <h1>{finded.title}</h1>
      <div className="images">
        <div className="image">
          <img src={finded.image} alt="" />

        </div>
        <div className="image2">
          <div className="money">
            <div className="price">
              <h1>{finded.price}</h1>
              <p>5000 руб</p>

              <img src={comp} alt="" />
            </div>
            <b>
              В наличии: <span>264 шт.</span>
            </b>
          </div>
          <div className="cm">
            <h1>Выберите размер</h1>
            <div className="sm">
              <b>20,5 см</b>
              <b>20,5 см</b>
              <b>20,5 см</b>
              <b>20,5 см</b>
              <b>20,5 см</b>
            </div>
          </div>
          <div className="minuspl">
            <h1>
              Выберите количество <img src={korzina} alt="" />
            </h1>
            <div className="btns">

              <button onClick={Minus}>-</button>
              <span>{soni}</span>
              <button onClick={Plus}>+</button>

            </div>
          </div>

          <button>В корзину </button>

          <div className="descript">
            <div className="dast">
              <h1>
                {" "}
                <img src={gruz} alt="" /> Оплата и доставка
              </h1>
            </div>
            <div className="des">
              <h1>
                {" "}
                <img src={info} alt="" /> Описание
              </h1>
            </div>
            <div className="harak">
              <h1>
                {" "}
                <img src={tochka} alt="" /> Характеристики
              </h1>
            </div>
          </div>
          <div className="cards">
            <img src={visa} alt="" />
            <img src={visa2} alt="" />
            <img src={paypal} alt="" />
            <img src={tink} alt="" />
            <img src={sber} alt="" />
            <img src={yandex} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeteil;
