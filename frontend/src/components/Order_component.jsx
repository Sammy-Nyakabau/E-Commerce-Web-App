/* eslint-disable */
import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { toast } from "react-toastify";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useStateValue } from "../providers/StateProvider";
import "../styles/Order_component.css";

function Order_component(props) {
  const history = useHistory();
  let { product } = props;
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    //Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
    toast.info("Item added to basket!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addReview = () => {
    dispatch({
      type: "SET_ITEM",
      item: product,
    });
    history.push("/reviewpage");
  };

  return (
    <div className="col s6">
      <div className="product">
        <div className="product_info">
          <p className="product_name">{product.name}</p>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p className="product_price">
                  <strong>{value}</strong>
                </p>
              </>
            )}
            decimalscale={2}
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <p className="description">{product.description}</p>
          <div className="buy_button">
            <button onClick={addToBasket}>Buy Again</button>
          </div>
          <div
            onClick={addReview}
            style={{ cursor: "pointer" }}
            className="reviewpart"
          >
            <div className="see_reviews">Add Review</div>{" "}
            <div className="review_arrow">
              <ArrowRightAltIcon />
            </div>
          </div>
          <div className="product_graphics">
            <img src={product.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order_component;
