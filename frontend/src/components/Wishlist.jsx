/* eslint-disable */
import React from "react";
import "./Wishlist.css";
import WishlistProduct from "./WishListProduct";
import { useStateValue } from "../providers/StateProvider";

function Wishlist() {
  const [{ wishlist, basket}] = useStateValue();
    console.log(wishlist)
    console.log(basket)

  return (
    <div className="wishlistt">
      <div className="wishlist_banner">
        <img src="https://www.armytimes.com/resizer/gEARZ6ePQUdz7fs2UUkCDMHSdrI=/1200x630/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/KJVZCJA2C5DZNJXUTKFNE7XQ5I.jpg" />
        <div className="wishlist_banner_heading">
          <h1 id="wishlist_heading">YOUR WISHLIST</h1>
        </div>
        <div class="wishlistscrollbox">
          <span />
          <span />
          <span />
        </div>
        <div className="wishlist_home">
          <div className="row">
            {wishlist.map((item) => (
              <WishlistProduct key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;