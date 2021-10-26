import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JosFeJ3UIzUYBA3f1PRyH4RRUS5dSMwO4OJCcBhpQMz2mHIC3wqv6DxIJV7eakc3LdP1jeirbTXN7BRHcjYO8rl00XSiJfGog';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      lable="Pay now"
      name="Home-In-Style Ltd."
      billingAddress
      shippingAdrees
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLable="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="EUR"
    />
  );
};

export default StripeCheckoutButton;
