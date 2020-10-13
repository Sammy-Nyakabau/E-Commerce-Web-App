import React from "react";
import "./Block.css"

function Block(props) {
  return (
    <div className="block">
      <img src={props.imgUrl} />
      <div className="block__description">
        <h1 className="block__name">{props.Name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Block;