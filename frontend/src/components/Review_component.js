import React from "react";

function Review_component() {
  return (
    <div>
      <div className="col s12">
        <div className="review">
          <div className="review_info">
            <div className="product_graphics">
              <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/05/931/524/f35-1-Dvids.jpg?ve=1&tl=1" />
            </div>
            <p classname="user_name">Sahil Verma</p>
            <p className="review_product_name">F-35</p>
            <div className="review_product_rating">
              {Array(3)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <p className="review_product_comments">A little slower than i had expected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review_component;
