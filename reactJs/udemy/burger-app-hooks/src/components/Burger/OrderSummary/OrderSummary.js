import React from 'react';

import Aux from '../../../hoc/Auxi/Aux';
import Button from '../../UI/Button/Button';
    
const orderSummary = props => {

    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransfrom: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Yummy Burger just waiting foy you:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>TOTAL PRICE: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}
    
export default orderSummary;