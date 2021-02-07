import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
            .map(key =>
                <ul key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
                </ul>
            );

    return <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button type="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
        <Button type="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </React.Fragment>
};

export default orderSummary;
