/* eslint-disable */
import React from "react";
import "./Subtotal.css";
import _ from "lodash";
import { toast } from "react-toastify";   
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./providers/StateProvider";
import { getBasketTotal } from "./providers/reducer";
import { createOrder } from "./services/ordersService";
import { deleteBasket } from "./services/basketService";
import { useHistory } from "react-router-dom";


function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const makeOrder = async () => {
    let orders = [];
    toast.success('Order Has been placed!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    basket.forEach((product) => {

      orders.push(
        {
          product: product._id,
          name: product.name,
          description: product.description,
          image: product.image,
          category: product.category,
          price: product.price,
          rating: product.rating,
        }
      );
    });

    await createOrder(user._id, orders);
    await deleteBasket(user._id)
    dispatch({
      type: "EMPTY_BASKET",
    });
    history.push("/Order_page");
  };

  return (
    <div className="subtotal_page">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {basket.length} items : <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalscale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {basket.length > 0 && <button onClick={makeOrder}>Proceed to checkout</button>}
    </div>
  );
}

export default Subtotal;
