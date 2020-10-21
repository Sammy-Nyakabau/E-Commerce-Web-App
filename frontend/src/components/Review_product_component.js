/* eslint-disable */
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Review_product_component.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../providers/StateProvider";

function Review_product_component(props) {
  const history = useHistory();
  let { product } = props;
  const [{ wishlist, user }, dispatch] = useStateValue();
  const [fav, setFav] = useState(false);
  const [notFav, setNotfav] = useState(true);

  useEffect(() => {
    if (wishlist.some((prod) => prod.name === product.name)) {
      setFav(true);
      setNotfav(false);
    }
  }, []);

  const addToBasket = () => {
    //Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
  };

  

  const seeReviews = () => {
    dispatch({
      type: "SET_ITEM",
      item: product,
    });
    history.push("/reviewdisplay");
  };

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
