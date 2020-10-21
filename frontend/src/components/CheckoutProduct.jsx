/* eslint-disable */
import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product_component.css";
import { useStateValue } from "../providers/StateProvider";

function CheckoutProduct(props) {
  let { product } = props;
  const [{ wishlist }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //Add item to basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: product.id,
    });
  };
  const saveForLater = () => {
    //Add item to wishlist...
    if (wishlist.some((prod) => prod.name === product.name)) {
      removeFromBasket();
    } else {
      dispatch({
        type: "ADD_TO_WISHLIST",
        item: product,
      });
      removeFromBasket();
    }
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
          <div className="product_rating">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <div className="buy_button">
            <button onClick={removeFromBasket}>Remove from basket</button>
          </div>
          <div className="buy_button">
            <button onClick={saveForLater}>Save for later</button>
          </div>
          <div className="product_graphics">
            <img src={product.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
