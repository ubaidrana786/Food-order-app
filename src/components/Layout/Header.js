import React from 'react'
import mealsImage from "../../assests/meals.jpg"
import classes from "./Header.module.css"
import { HeaderCartButton } from './HeaderCartButton'
export const Header = (props) => {
    return (
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
          <HeaderCartButton onclick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="this is a delicious food " />
        </div>
        </>
    )
}
