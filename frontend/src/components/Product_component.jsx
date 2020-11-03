/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { toast } from "react-toastify";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useStateValue } from "../providers/StateProvider";
import { updateInterested } from "../services/productService";
import "../styles/Product_component.css";

function Product_component(props) {
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
    toast.success("Item added to basket!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addToWishList = async () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: product,
    });
    await updateInterested(product._id, {
      user: user.name,
    });
    setFav(true);
    setNotfav(false);
    toast.info("Item added to wishlist!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const seeReviews = () => {
    dispatch({
      type: "SET_ITEM",
      item: product,
    });
    history.push("/reviewdisplay");
  };

  const removeFromWishList = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: product.id,
    });
    setNotfav(true);
    setFav(false);
    toast.info("Item removed from wishlist!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
            <div
              onClick={seeReviews}
              style={{ cursor: "pointer" }}
              className="reviewpart"
            >
              <div className="see_reviews">View Reviews</div>{" "}
              <div className="review_arrow">
                <ArrowRightAltIcon />
              </div>
            </div>
            {user && (
              <div className="buy_button">
                <button onClick={addToBasket}>Add to basket</button>
              </div>
            )}
          </div>
          <div className="wish_component">
            {user && (
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
            )}
            {product.admirers?.length > 1 && (
              <div className="interest">
                {product.admirers?.length || 0} People are interested in this
              </div>
            )}
            {product.admirers.length === 1 && (
              <div className="interest">
                {product.admirers?.length} Person is interested in this
              </div>
            )}
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
