import React, { useState, useEffect } from "react";
import "./Order_page.css";
import { useStateValue } from "../providers/StateProvider";
import { getMyOrders } from "../services/ordersService";
import Order_component from "./Order_component";

function Order_page() {
  const [{ user }, dispatch] = useStateValue();
  const [products, setproducts] = useState([]); //this stores all ordered products
  let orderedProducts = [];

  useEffect(() => {
    async function getOrders() {
      const { data: userOrders } = await getMyOrders(user._id);
      userOrders.forEach((order) => {
        order.orderItems.forEach((prod) => {
          orderedProducts.push(prod);
        });
      });
      setproducts(orderedProducts);
      dispatch({
        type: "ADD_ORDERS",
        item: products,
      });
    }
    getOrders();
  });

  //products array stores all the ordered products by the logged in user

  return (
    <div className="order">
      <div className="order_banner">
        <img alt="" src="https://wallpapercave.com/wp/rE73Sms.jpg" />
        <div className="order_banner_heading">
          <h1>YOUR ORDERS</h1>
        </div>
        <div className="order_product">
          <div class="scrollboxorder">
            <span />
            <span />
            <span />
          </div>
          <div className="order_home">
            <div className="row">
              {products.map((product) => (
                <Order_component key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order_page;
