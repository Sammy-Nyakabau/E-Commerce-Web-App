import React, { useState, useEffect } from "react";
import "./Reviewdisplaypage.css";
import {  getReviews } from "../services/reviewsService";
import { useStateValue } from "../providers/StateProvider";
import Review_component from "./Review_component";
import Product_component from "./Product_component";

function Reviewdisplaypage() {
  const [{ item }] = useStateValue();
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async() => {
      const { data: result } = await getReviews(item._id);
      setReviews(result)
    }
    fetchReviews()
  }, []);
  
  return (
    <div className="reviewdisplay">
      <div className="reviewdisplay_banner">
        <img alt="" src="https://wallpapercave.com/wp/rE73Sms.jpg" />
        <div className="reviewdisplay_heading">
          <h1>PRODUCT REVIEWS</h1>
        </div>
        <div className="reviewdisplay_product">
          <div class="scrollboxreview">
            <span />
            <span />
            <span />
          </div>
          <div className="productdisplay_home">
            <div className="row">
            
                <Product_component key={item.id} product={item} />
            </div>
          </div>
        </div>
        <div className="reviewdisplay_home">
            <div className="row">
              {reviews.map((review) => (
                <Review_component key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
        {reviews.length === 0 && <div>No Reviews</div>}
      </div>
    
  );
}

export default Reviewdisplaypage;
