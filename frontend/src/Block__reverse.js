import React from "react";
import "./Block__reverse.css"

function Block__reverse(props) {
  return (
    <div className="block__reverse">
      <img src={props.imgUrl} />
      <div className="block__description">
        <h1 className="block__name">{props.Name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Block__reverse;
