import { React, useContext,  } from "react";
import CartContex from "../../store/cart-contex";
import CartIcon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";
export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContex);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <div>
      <button className={classes.button} onClick={props.onclick}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </div>
  );
};
