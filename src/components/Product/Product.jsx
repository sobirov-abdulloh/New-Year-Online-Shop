import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/ProductSlice";

function Product_Sale({ product }) {
  const { image, title, type, price,id } = product;
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AddToBasket = () => {
    const check = products.some((item) => item.id === id);
    if (check) {
      alert("Mahsulot qōshilgan");
    } else {
      dispatch(addProduct(product));
    }
  };
  const goToDEtail = () => {
    navigate(`/productDeteil/${id}`);
  };

  return (
    <div className="product_sale">
      <img onClick={goToDEtail} src={image} alt={title} />

      <h2>{title}</h2>
      <p>{type}</p>
      <div className="price">
        <h1>{price}</h1>
        <button onClick={AddToBasket}>В корзину</button>
      </div>
    </div>
  );
}

export default Product_Sale;
