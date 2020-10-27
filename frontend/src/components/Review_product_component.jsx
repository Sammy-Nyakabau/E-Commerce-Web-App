/* eslint-disable */
import React from "react";
import CurrencyFormat from "react-currency-format";
import "../styles/Review_product_component.css";

function Review_product_component(props) {
  let { product } = props;
 
  return (
    <div className="col s12">
      <div className="review_product_comp">
        <div className="product_info">
          <p className="product_name">{product.name}</p>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p className="product_price">
                  <strong>{value}</strong>
                </p>
              </>
            )}
            decimalscale={2}
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <p className="description">{product.description}</p>
          <div className="product_rating">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>

          <div className="product_graphics">
            <img src={product.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review_product_component;
