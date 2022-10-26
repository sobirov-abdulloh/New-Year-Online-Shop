import React from "react";
import { useSelector } from "react-redux";
import ChosenPro from "../../components/chosenPro/ChosenPro";
import Component from "../../assets/image/Component 108.png";
import "./Basket.css";
import {useNavigate} from "react-router-dom"
function Basket() {
  const products = useSelector((state) => state.products.products);
  const naviget=useNavigate()
  const btn_zakas=()=>{
    naviget("/order")
  }
  return (
    <div className="grid">
      <div className="baket">
        {products.length > 0 ? (
          products.map((product) => (
            <ChosenPro key={product.id} product={product} />
          ))
        ) : (
          <h1>Basket Empty</h1>
        )}
      </div>
      <div className="bas_right">
        <div className="top">
          <div className="itogo">
            <h1>Итого:</h1>
            <h2>45 980₽</h2>
            <p>430 руб</p>
            <img src={Component} alt="" />
          </div>
          <h3>Ваш заказ</h3>
          <div className="flex">
            <h4>Всего товаров</h4>
            <h5>20</h5>
          </div>
          <div className="flex">
            <h4>Сумма</h4>
            <h5>45 980 ₽</h5>
          </div>
          <h4>От 3000 рублей бесплатная доставка по украине</h4>
        </div>
        <button onClick={btn_zakas}>Оформить заказ</button>
      </div>
    </div>
  );
}

export default Basket;
