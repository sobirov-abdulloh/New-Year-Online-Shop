import React from "react";
import "./Products.css";

import sale from "../../assets/img/sale.png";
import fire from "../../assets/img/fire.png";

import { Data } from "../../data/data";
import Product from "../Product/Product";

function Products() {
  const ForGift = Data.filter((item) => item.category === "ForGift");
  const Sale = Data.filter((item) => item.category === "Sale");
  const New = Data.filter((item) => item.category === "New");
  return (
    <div className="products">
      <div className="images">
        {ForGift.map((item,index) => (
          <div key={index} className="image">
            <img src={item.image} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="sale">
        <h1>Акции</h1>
        <img src={sale} alt="" />
      </div>
      <div className="products_list">
        {Sale.map((product) => (
          <Product key={product.id} {...product} product={product} />
        ))}
      </div>
      <div className="sale">
        <h1>Новинки</h1>
        <div className="new">
          <p>NEW</p>
          <img src={fire} alt="" />
        </div>
      </div>
      <div className="products_list">
        {New.map((product) => (
          <Product key={product.id}  product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
