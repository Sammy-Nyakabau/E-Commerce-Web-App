/* eslint-disable */
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Product_component.css";
import { useStateValue } from "../providers/StateProvider";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Product_component(props) {
  let { product } = props;
  const [{ wishlist }, dispatch] = useStateValue();
  const [fav, setFav] = useState(false);
  const [notFav, setNotfav] = useState(true);

  useEffect(() => {
    if (
      wishlist.some((prod) => prod.product === product._id) ||
      wishlist.some((prod) => prod._id === product._id)
    ) {
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

  const addToWishList = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: product,
    });
    setFav(true);
    setNotfav(false);
  };

  const removeFromWishList = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: product.id,
    });
    setNotfav(true);
    setFav(false);
  };
  return (
    <div className="col s6">
      <div className="product_comp">
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
          <div className="button_parts">
            <div className="reviewpart">
              <div className="see_reviews">View Reviews</div>{" "}
              <div className="review_arrow">
                <ArrowRightAltIcon />
              </div>
            </div>
            <div className="buy_button">
              <button onClick={addToBasket}>Add to basket</button>
            </div>
          </div>
          <div className="wish_component">
            <div className="heart_button">
              {fav && (
                <i
                  onClick={removeFromWishList}
                  style={{ cursor: "pointer" }}
                  className="fa fa-heart"
                  aria-hidden="true"
                />
              )}
              {notFav && (
                <i
                  onClick={addToWishList}
                  style={{ cursor: "pointer" }}
                  className="fa fa-heart-o"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="interest">0 People are interested</div>
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
