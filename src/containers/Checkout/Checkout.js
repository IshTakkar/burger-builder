import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            meat: 1,
            cheese: 1
        },
        totalPrice: 0
    }

    componentDidMount() {
        let query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let params of query.entries()) {
            if (params[0] === 'price')
                price = params[1];
            else
                ingredients[params[0]] = +params[1];
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    purchaseCancelHandler = () => {
        this.props.history.goBack();
    }

    purchaseContinueHandler = () => {
        this.props.history.replace('/checkout/data-form');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    purchaseContinue={this.purchaseContinueHandler}
                    purchaseCancel={this.purchaseCancelHandler}
                />

                <Route path={this.props.match.url + '/data-form'} render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>)} />
            </div>
        );
    }
}

export default Checkout;