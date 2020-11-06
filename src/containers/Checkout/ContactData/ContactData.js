import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    formFillerHelper(elType, type, placeholder, value) {
        return {
            elementType: `${elType}`,
            elementConfig: {
                type: `${type}`,
                placeholder: `${placeholder}`
            },
            value: `${value}`,
            validation: {
                required: true
            },
            valid: false,
            touched: false,
            minLength: 1
        }
    }

    state = {
        orderForm: {
            name: this.formFillerHelper('input', 'text', 'Your Name', ''),
            street: this.formFillerHelper('input', 'text', 'Street', ''),
            pinCode: this.formFillerHelper('input', 'text', 'PIN Code', ''),
            country: this.formFillerHelper('input', 'text', 'Country', ''),
            email: this.formFillerHelper('input', 'email', 'Your Email', ''),
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                valid: true,
            }
        },
        formIsValid: false,
        isLoading: false
    }

    checkValidity(value, rules) {

        if (!rules)
            return true;

        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier];
        }
        //alert('You continue!');
        const order = {
            ingredients: this.props.ings,
            totalPrice: this.props.totPrice,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => {
                //console.log(response);
                this.setState({ isLoading: false });
                console.log(order);
                this.props.history.push('/');
            })
            .catch(error => {
                //console.log(error);
                this.setState({ isLoading: false });
            });
    }

    inputChangedHandler = (event, formIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[formIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[formIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let id in updatedOrderForm) {
            formIsValid = updatedOrderForm[id].valid && formIsValid;
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {

        let orderFormArray = [];

        for (let key in this.state.orderForm) {
            orderFormArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {orderFormArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        value={formElement.config.value}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if (this.state.isLoading)
            form = <Spinner />
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totPrice: state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);