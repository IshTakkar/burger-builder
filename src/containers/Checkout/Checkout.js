import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

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
                    ingredients={this.props.ings}
                    purchaseContinue={this.purchaseContinueHandler}
                    purchaseCancel={this.purchaseCancelHandler}
                />

                <Route path={this.props.match.url + '/data-form'} component={ContactData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    };
}

export default connect(mapStateToProps)(Checkout);