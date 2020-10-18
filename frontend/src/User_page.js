import React, { useState} from "react";
import "./User_page.css";
import { useStateValue } from "./providers/StateProvider";
import { updateUser } from "./services/userService";
import { useHistory } from "react-router-dom";

function User_page() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const updateDetails = async (e) => {
    e.preventDefault();
    console.log("we're here");
    try {
      const { data: updated } = await updateUser(user._id, username, email, {
        address,
        city,
        postalCode,
        country,
      });
      console.log(updated);
      history.push("/")
      dispatch({
        type: "SET_USER",
        user: updated,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user_page">
      <div className="user_banner">
        <img alt="" src="https://i.pinimg.com/originals/d6/62/34/d662349ca14d7c76a82e11a3be958b25.jpg" />
        <div className="user_banner_heading">
          <h1>USER DETAILS</h1>
        </div>
      </div>
      <div className="user_form">
        <div class="user_container">
          <form id="contact">
            <fieldset>
              <input
                placeholder={"Your name"}
                defaultValue={user?.username || ""}
                value={username}

                type="text"
                tabindex="1"
                autofocus
                onChange={(e) => setUsername(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Your Email Address"}
                defaultValue={user?.email || ""}
                value={email}
                type="email"
                tabindex="2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Your Address"}
                defaultValue={user?.shippingAddress.address || ""}
                type="text"
                tabindex="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Your City"}
                defaultValue={user?.shippingAddress.city || ""}
                type="text"
                tabindex="4"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Postal Code"}
                defaultValue={user?.shippingAddress.postalCode || ""}
                type="text"
                tabindex="3"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Country"}
                defaultValue={user?.shippingAddress.country || ""}
                type="text"
                tabindex="4"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <button
                type="submit"
                onClick={updateDetails}
              >
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User_page;
