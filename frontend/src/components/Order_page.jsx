/* eslint-disable */
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "../providers/StateProvider";
import { getMyOrders } from "../services/ordersService";
import Order_component from "./Order_component";
import "../styles/Order_page.css";

function Order_page() {
  const [{ user }] = useStateValue();
  const [products, setproducts] = useState([]); //this stores all ordered products
  let orderedProducts = [];

  useEffect(() => {
    async function fetchOrders() {
      if (user) {
        const { data: userOrders } = await getMyOrders(user._id);
        userOrders.forEach((order) => {
          order.orderItems.forEach((prod) => {
            orderedProducts.push(prod);
          });
        });
        setproducts(orderedProducts);
      } else {
        toast.info("Log in to see your orders!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    fetchOrders();
  }, []);

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
