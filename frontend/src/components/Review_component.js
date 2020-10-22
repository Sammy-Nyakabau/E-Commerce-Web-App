/* eslint-disable */
import React from "react";
import Reviewdisplaypage from "./Reviewdisplaypage";
import "./Review_component.css";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Review_component(props) {
  let { review } = props;
  return (
    <div>
      <div className="col s12">
        <div className="review_comp">
          <div className="review_info">
            <p classname="review_name">
              {review.review.user_name} {" "}
              {review.verified ? <span className="verifiedicon"><VerifiedUserIcon/></span> : <span></span>}
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
