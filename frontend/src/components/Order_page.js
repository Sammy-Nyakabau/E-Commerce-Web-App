import React, { useState, useEffect } from "react";
import "./Order_page.css";
import { useStateValue } from "../providers/StateProvider";
import { getMyOrders } from "../services/ordersService";
import Product_component from "./Product_component";

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
          src="https://www.wallpapertip.com/wmimgs/124-1249936_air-strike.jpg"
        />
        <div className="order_banner_heading">
          <h1>YOUR ORDERS</h1>
        </div>
        <div className="order_product">
        <div className="home">
          <div className="row">
            {products.map((product) => (
              <Product_component key={product.id} product={product} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Order_page;
