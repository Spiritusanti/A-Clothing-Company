import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hnu8VAwnRvzesw2pH1EZtJcSSbhq2mJ0xERgOuTDEODgjgB9Od3NbAg77g8DzAua5vKVkYKW4AzgSp3rOc93MEW00DOyX91pX';

   const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
                }
        }).then (response => {
            alert('Payment successful!')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please use the provided credit card.'
            );
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='A Clothing Company'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;