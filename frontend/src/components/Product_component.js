import React from "react";
import "./Product_component.css";

function Product_component(props) {
    let {
      product
    } = props;
  return (
    <div className="product">
      <div className="product_info">
        <p>{product.name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="product_rating">
            {Array(product.rating).fill().map((_,i)=>(<p>⭐</p>))}
        </div>
      </div>

      <img
        src={product.image}
      />

      <button>Add to basket</button>
    </div>
  );
}

export default Product_component;