/* eslint-disable */
import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product_component.css";
import { toast } from "react-toastify";   
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
    toast.warn('Removed from wishlist!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  const addtobasket = () => {
    //Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: product.id,
    });
    toast.info('Added to basket!', {
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
