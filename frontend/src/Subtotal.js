import React from "react";
import "./Subtotal.css";
import _ from "lodash";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./providers/StateProvider";
import { getBasketTotal } from "./providers/reducer";
import { createOrder } from "./services/ordersService";

function Subtotal() {
  const [{ basket, user }] = useStateValue();

  const makeOrder = async () => {
    let orders = [];
    basket.forEach((product) => {
      orders.push(
        _.pick(product, [
          "name",
          "description",
          "image",
          "category",
          "price",
          "rating",
        ])
      );
    });

    const { data: createdOrder } = await createOrder(
      user._id,
      orders,
    );
    console.log(createdOrder);
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
      <button onClick={makeOrder}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
