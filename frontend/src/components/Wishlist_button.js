import React, { useState } from "react";
import Heart from "react-animated-heart";
import "./Wishlist_button.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
 
export default function Wishlist_button() {
  const [isClick, setClick] = useState(false);
  return (
    <div className="Wishlist_button">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}