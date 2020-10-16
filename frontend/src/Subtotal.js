import React from "react";
import "./Subtotal.css";
import _ from "lodash"
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./providers/StateProvider"
import { getBasketTotal } from "./providers/reducer";
import {createOrder} from './services/ordersService'

function Subtotal() {
  const [{ basket, user }] = useStateValue();

    const makeOrder = async () => {
      let newOrders = [];
      let order;
      for (let i = 0; i < basket.length; i++) {
        let qty = 0;
        for (let j = 0; j < basket.length; j++) {
          
          if (basket[i]._id === basket[j]._id) {
            qty += 1
            continue
        }
        
      }
      order = {qty, price : basket[i].price, product: basket[i]._id}
      newOrders.push(order)
    }
    
    console.log(_.uniqBy(newOrders, "product"));
    

    const {data :createdOrder} = await createOrder(user._id ,_.uniqBy(newOrders, "product"), getBasketTotal(basket))
    console.log(createdOrder)
  }

  return (
    <div  className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {basket.length} items  : <strong>{`${value}`}</strong>
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
