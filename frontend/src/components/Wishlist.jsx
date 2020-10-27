/* eslint-disable */
import React from "react";
import WishlistProduct from "./WishListProduct";
import { useStateValue } from "../providers/StateProvider";
import "../styles/Wishlist.css";

function Wishlist() {
  const [{ wishlist }] = useStateValue();

  return (
    <div className="wishlistt">
      <div className="wishlist_banner">
        <img src="https://i.ibb.co/Gscgqg2/Wishlist-Background.jpg" />
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
