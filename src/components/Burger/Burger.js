import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css';

const burger = (props) => {
    let burgerIngredients = Object.keys(props.ingredients)
        .map(key => [...Array(props.ingredients[key])].map((_, i) => {
            return <BurgerIngredient key={key + i} type={key} />
        }))
        .reduce((arr, el) => arr.concat(el), []);

    if (burgerIngredients.length === 0) {
        burgerIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
