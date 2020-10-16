/* eslint-disable */
import React from "react";
import "./Product_component.css";

function Product_component(props) {
  let { product } = props;
  return (
    <div className="col s6">
      <div className="product">
        <div className="product_info">
          <p className="product_name">{product.name}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <p className="description">{product.description}</p>
          <div className="product_rating">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <div className="buy_button">
            <button>Add to basket</button>
          </div>
          <div className="product_graphics">
            <img src={product.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_component;
