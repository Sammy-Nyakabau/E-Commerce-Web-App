/* eslint-disable */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";   
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { addReview, getReviews } from "../services/reviewsService";
import { getMyOrders } from "../services/ordersService";
import { updateProduct } from "../services/productService";
import { useStateValue } from "../providers/StateProvider";
import "../styles/Reviewpage.css";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

function Reviewpage() {
  const history = useHistory();
  const [{ item, user }] = useStateValue();
  const [comment, setComment] = useState("");


  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

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

      const review = { user_name: user.username, rating: value, comment };
      await addReview(
        item.product,
        review,
        verified
      );

      let ratings = [];
      const { data: reviews } = await getReviews(item.product);
      let numberOfReviews = reviews.length;
        
      reviews.forEach((review) => {
        ratings.push(review.review.rating);
      });

      let averageRatings = Math.floor(ratings.reduce((a, b) => a + b) / ratings.length);

      await updateProduct(
        item.product,
        numberOfReviews,
        averageRatings
      );

      toast.success('Your review has been saved!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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
            <div className="ratingpart">
            <div className={classes.root}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}/>          
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </div>
            </div>
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
