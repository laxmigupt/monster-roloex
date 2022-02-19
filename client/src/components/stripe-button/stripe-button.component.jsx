import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
// import { response } from "express";

const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51KLiVaSBh8PNvtJA8AhJfw2mJSmt46tdOi3W8nldHcVyrNGBIWMLAJnAD2P8jHz6ZKrUAknIKh3VhNjP1iRmQJh300nwVQmOxP";

    const onToken = token => {
      axios({
          url: 'payment',
          method: 'post',
          data: {
              amount: priceForStripe,
              token: token
          }
      }).then(response => {
          alert('succesful payment')
      }).catch(error => {
          console.log('Payment Error: ', error);
          alert(
              'There was an issue with your payment. Please sure you use the provided credit cart.'
          );
      });
    };

    return (
        <StripeCheckout 
            label="Pay Now"
            name="LP Clothing"
            billingAddress
            shippingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;