import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancel = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinue = () => {
        alert('You continue');
    }

    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (let key in this.state.ingredients) {
            disabledInfo[key] = this.state.ingredients[key] <= 0;
        }

        const isPurchasable = Object.keys(this.state.ingredients)
            .some((key) => this.state.ingredients[key] !== 0)

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancel}
                        purchaseContinue={this.purchaseContinue}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={isPurchasable}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
