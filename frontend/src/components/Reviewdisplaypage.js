import React, { useState, useEffect } from "react";
import "./Order_page.css";
import { useStateValue } from "../providers/StateProvider";
import { getMyOrders } from "../services/ordersService";
import Review_compnoent from "./Review_component";
import Product_component from "./Product_component";

function Reviewdisplaypage() {
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
    <div className="reviewdisplay">
      <div className="reviewdisplay_banner">
        <img alt="" src="https://wallpapercave.com/wp/rE73Sms.jpg" />
        <div className="reviewdisplay_heading">
          <h1>ORDER REVIEWS</h1>
        </div>
        <div className="reviewdisplay_product">
          <div class="scrollboxreviewr">
            <span />
            <span />
            <span />
          </div>
          <div className="productdisplay_home">
            <div className="row">
              {products.map((product) => (
                <Product_component key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="productdisplay_home">
            <div className="row">
              {products.map((product) => (
                <Product_component key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Reviewdisplaypage;
