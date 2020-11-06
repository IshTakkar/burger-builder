import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        isLoading: false,
        error: false
    };

    componentDidMount () {
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //     })
        //     .catch(error => {
        //         this.setState({ error: true });
        //     });
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        this.props.history.push({
            pathname: '/checkout',
        });
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        
        return sum > 0;
    };

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const newCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = newCount;

    //     const oldPrice = this.state.totalPrice;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const newPrice = priceAddition + oldPrice;

    //     this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

    //     this.updatePurchaseState(updatedIngredients);
    // };

    // deleteIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const newCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = newCount;

    //     const oldPrice = this.state.totalPrice;
    //     const priceSub = INGREDIENT_PRICES[type];
    //     const newPrice = oldPrice - priceSub;

    //     this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

    //     this.updatePurchaseState(updatedIngredients);
    // };

 
    render() {

        let orderSummary = null;

        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.state.error ? <p>Couldn't load ingredients! Please refresh.</p> : <Spinner />;
        if(this.props.ings) 
        {
            burger = (
                <Aux>
                    <Burger
                        ingredients={this.props.ings}
                    />
                    <BuildControls
                        price={this.props.totPrice}
                        ingredientDeleted={this.props.onIngredientRemoved}
                        ingredientAdded={this.props.onIngredientAdded}
                        purchaseable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        disabled={disabledInfo}
                    />
                </Aux>
            );

            orderSummary = <OrderSummary
                    continue={this.purchaseContinueHandler}
                    price={this.props.totPrice}
                    cancel={this.purchaseCancelHandler}
                    ingredients={this.props.ings}
                />
        }

        if (this.state.isLoading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalCancel={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totPrice: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: name }),
        onIngredientRemoved: (name) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: name })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));