import React from "react";
import "./Reviewpage.css";

function Reviewpage() {
  return (
    <div className="reviewpage">
      <div className="reviewpage_banner">
        <img
          alt=""
          src="https://cdn.wallpapersafari.com/42/0/Np20iI.jpg"
        />
        <div className="reviewpage_banner_heading">
          <h1>YOUR REVIEWS</h1>
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
              />
            </fieldset>
            <fieldset>
              <input placeholder={"Rating"} type="text" />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Comments..."
                tabindex="5"
                required
              ></textarea>
            </fieldset>

            <fieldset>
              <button type="submit">Submit Review</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviewpage;
