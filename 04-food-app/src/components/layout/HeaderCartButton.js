import React from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  return (
    <button>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
