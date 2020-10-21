import React from "react";
import Reviewdisplaypage from "./Reviewdisplaypage";

function Review_component(props) {
  let { review } = props;
  return (
    <div>
      <div className="col s12">
        <div className="review">
          <div className="review_info">
            <div className="product_graphics">
              <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/05/931/524/f35-1-Dvids.jpg?ve=1&tl=1" />
            </div>
            <p classname="user_name">
              {review.review.user_name} Verified:{" "}
              {review.verified ? <span>true</span> : <span>false</span>}
            </p>
            <div className="review_product_rating">
              {Array(review.review.rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <p className="review_product_comments">{review.review.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review_component;
