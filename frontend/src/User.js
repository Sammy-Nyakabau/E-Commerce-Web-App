import React from 'react'
import "./User.css"

function User() {
    return (
        <div className="user">
            <div className="user_banner">
        <img src="https://i.pinimg.com/originals/d6/62/34/d662349ca14d7c76a82e11a3be958b25.jpg" />
        <div className="checkout_banner_heading">
          <h1>USER</h1>
        </div>
        <div className="checkout_product">
          <div classname="checkout_subtotal">
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
        
    )
}

export default User
