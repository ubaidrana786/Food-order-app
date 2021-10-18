import React from 'react'
import CartIcon from '../Cart/Carticon'
import classes from "./HeaderCartButton.module.css"
export const HeaderCartButton = (props) => {
    return (
        <div>
            <button className={classes.button} onClick={props.onclick}>
                <span>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>3</span>
            </button>
        </div>
    )
}
