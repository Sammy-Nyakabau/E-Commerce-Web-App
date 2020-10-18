import React, { useState, useEffect } from "react";
import "./Order_page.css";
import { useStateValue } from "../providers/StateProvider";
import { getMyOrders } from "../services/ordersService";

function Order_page() {
  const [{ user }] = useStateValue();
  const [products, setproducts] = useState([]) //this stores all ordered products
  let orderedProducts = []

  useEffect(() => {
    async function getOrders() {
      const { data: userOrders } = await getMyOrders(user._id);
      userOrders.forEach(order => {
        order.orderItems.forEach(prod => {
          orderedProducts.push(prod)
        });
      });
      setproducts(orderedProducts)
      }
      getOrders();
    }
  );

  //products array stores all the ordered products by the logged in user


  return (
    <div className="order">
      <div className="order_banner">
        <img
          alt=""
          src="https://i.pinimg.com/originals/0f/0d/58/0f0d5833c0d8aa0d164536e371958c94.jpg"
        />
        <div className="order_banner_heading">
          <h1>YOUR ORDERS</h1>
        </div>
        <div className="order_product"></div>
      </div>
    </div>
  );
}

export default Order_page;
