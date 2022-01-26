import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51KLiVaSBh8PNvtJA8AhJfw2mJSmt46tdOi3W8nldHcVyrNGBIWMLAJnAD2P8jHz6ZKrUAknIKh3VhNjP1iRmQJh300nwVQmOxP";

    const onToken = token => {
        console.log(token);
        alert("Payment Successfull");
    }

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