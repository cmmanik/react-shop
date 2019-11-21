import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
 
  // ... just testing purpose not complete
 
  render() {
    return (
      // ...
      <StripeCheckout
      billingAddress={false}
      />
    )
  }
}