import React from 'react'
import "./Katalig_map.css"
function Katalig_map({image, title, type, price}) {
  return (
    <div>
         <div className="product_sale">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{type}</p>
      <div className="price">
        <h1>{price}</h1>
        <button>В корзину</button>
      </div>
    </div>
    </div>
  )
}

export default Katalig_map  