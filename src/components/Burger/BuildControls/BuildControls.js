import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Current price: {props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.type}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
        <button className={classes.OrderButton}
                onClick={props.ordered}
                disabled={!props.purchasable}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;
