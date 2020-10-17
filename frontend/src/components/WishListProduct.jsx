/* eslint-disable */
import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product_component.css";
import { useStateValue } from "../providers/StateProvider";

function WishlistProduct(props) {
  let { product } = props;
  const [{}, dispatch] = useStateValue();

  const removefromwishlist = () => {
    //remove item from wishlist...
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: product.id,
    });
  };
  const addtobasket = () => {
    //Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
    removefromwishlist()
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
            <button onClick={removefromwishlist}>Remove from wishlist</button>
          </div>
          <div className="buy_button">
            <button onClick={addtobasket}>Add to Basket</button>
          </div>
          <div className="product_graphics">
            <img src={product.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistProduct;
