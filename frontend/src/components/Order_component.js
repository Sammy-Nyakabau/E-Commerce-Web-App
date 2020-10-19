/* eslint-disable */
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Order_component.css";
import { useStateValue } from "../providers/StateProvider";

function Order_component(props) {
  let { product } = props;
  const [{ wishlist }, dispatch] = useStateValue();
  const [fav, setFav] = useState(false);
  const [notFav, setNotfav] = useState(true);

  useEffect(() => {
    if (wishlist.some(prod => prod._id === product._id)) {
      setFav(true);
      setNotfav(false);
    }
  },[]);


  const addToBasket = () => {
    //Add item to basket...
    dispatch({
      type: "Buy Again",
      item: product,
    });
  };

  
  return (
    <div className="col s6">
      <div className="product">
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
          <div className="buy_button">
            <button onClick={addToBasket}>Buy Again</button>
          </div>
          <div className="product_graphics">
            <img src={product.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order_component;
