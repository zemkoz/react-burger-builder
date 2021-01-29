import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICELIST = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredient = (type) => {
        this.setState((prevState) => {
            const ingredients = { ...prevState.ingredients };
            ingredients[type]++;

            const totalPrice = prevState.totalPrice + INGREDIENT_PRICELIST[type];

            return {
                ingredients: ingredients,
                totalPrice: totalPrice
            };
        });
    };

    removeIngredient = (type) => {
        this.setState((prevState) => {
            const ingredients = { ...prevState.ingredients };
            if (ingredients[type] > 0) {
                ingredients[type]--;
                const totalPrice = prevState.totalPrice - INGREDIENT_PRICELIST[type];
                return {
                    ingredients: ingredients,
                    totalPrice: totalPrice
                };
            }
        });
    };

    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (let key in this.state.ingredients) {
            disabledInfo[key] = this.state.ingredients[key] <= 0;
        }

        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
