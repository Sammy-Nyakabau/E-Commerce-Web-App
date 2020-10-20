import React, { useState } from "react";
import "./Reviewpage.css";
import { useHistory } from "react-router-dom";
import { addReview } from "../services/reviewsService";
import { getMyOrders } from "../services/ordersService";
import { useStateValue } from "../providers/StateProvider";

function Reviewpage() {
  const history = useHistory();
  const [{ item, user }] = useStateValue();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  
  const createReview = async (e) => {
    e.preventDefault();
    let orderedProducts = [];
    let verified = false;
    
    const { data: userOrders } = await getMyOrders(user._id);
    userOrders.forEach((order) => {
      order.orderItems.forEach((prod) => {
        orderedProducts.push(prod);
      });
    });
    if (orderedProducts.length > 5) {
      verified = true;
    }

    try {
      const review = { user_name: user.username, rating, comment };
      const { data: createdReview } = await addReview(
        item._id,
        review,
        verified
      );
      console.log(createdReview);
      history.push("/shop")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reviewpage">
      <div className="reviewpage_banner">
        <img alt="" src="https://cdn.wallpapersafari.com/42/0/Np20iI.jpg" />
        <div className="reviewpage_banner_heading">
          <h1>ADD REVIEW</h1>
        </div>
      </div>
      <div className="reviewpage_form">
        <div class="reviewpage_container">
          <form id="contact">
            <fieldset>
              <input
                placeholder={"Product Name"}
                type="text"
                tabindex="1"
                autofocus
                value={item.name}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Rating"}
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Comments..."
                tabindex="5"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </fieldset>

            <fieldset>
              <button onClick={createReview} type="submit">
                Submit Review
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviewpage;
