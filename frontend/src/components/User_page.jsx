import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";   
import { useStateValue } from "../providers/StateProvider";
import { updateUser } from "../services/userService";
import "../styles/User_page.css";

function User_page() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue("");
  const [email, setEmail] = useState(user?.email || "");
  const [username, setUsername] = useState(user?.username || "");
  const [address, setAddress] = useState(user?.shippingAddress.address || "");
  const [city, setCity] = useState(user?.shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    user?.shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(user?.shippingAddress.country || "");

  const updateDetails = async (e) => {
    e.preventDefault();
    try {
      const { data: updated } = await updateUser(user._id, username, email, {
        address,
        city,
        postalCode,
        country,
      });
      console.log(updated);
      toast.success('Your information has been updated!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      history.push("/");
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
        <img alt="" src="https://i.ibb.co/kKf46cy/Form-Background.jpg" />
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
                value={email}
                type="email"
                tabindex="2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Your Address"}
                type="text"
                tabindex="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Your City"}
                type="text"
                tabindex="4"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Postal Code"}
                type="text"
                tabindex="3"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder={"Country"}
                type="text"
                tabindex="4"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <button type="submit" onClick={updateDetails}>
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
