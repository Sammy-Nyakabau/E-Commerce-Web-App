import React from "react";
import "./User_page.css";

function User_page() {
  return (
    <div className="user_page">
      <div className="user_banner">
        <img src="https://i.pinimg.com/originals/d6/62/34/d662349ca14d7c76a82e11a3be958b25.jpg" />
        <div className="user_banner_heading">
          <h1>USER</h1>
        </div>
      </div>
      <div className="user_form">
        <div class="user_container">
          <form id="contact" action="" method="post">
            <fieldset>
              <input
                placeholder="Sahil Verma"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="sahil@gamil.com"
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="938898472"
                type="tel"
                tabindex="3"
                required
              />
            </fieldset>
            <fieldset>
              <input placeholder="India" type="url" tabindex="4" required />
            </fieldset>
            <fieldset>
              <input placeholder="2/28 New Delhi" type="url" tabindex="4" required />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User_page;
