import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        isLoading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true });
        //alert('You continue!');
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customer: {
                name: "Ish",
                address: {
                    street: "Street 2",
                    pinCode: "56987",
                    country: "India"
                },
                email: "it@abc.com"
            },
            delivery: "fastest"
        }
        axios.post('/orders.json', order)
            .then(response => {
                //console.log(response);
                this.setState({ isLoading: false });
                console.log("Order Placed!");
                this.props.history.push('/');
            })
            .catch(error => {
                //console.log(error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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

export default ContactData;