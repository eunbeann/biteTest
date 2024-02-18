import React from "react";

function Item({ name, phoneNumber }) {
  return (
    <div>
      <span className="phoneNumber"> {name} </span>
      <span className="phoneNumber">{phoneNumber}</span>
    </div>
  );
}

export default Item;
