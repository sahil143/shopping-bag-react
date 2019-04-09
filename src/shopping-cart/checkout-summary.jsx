import React from 'react';

export const CheckoutSummary = (props) => {
  return <div>
    <div className="row checkout-summary-margin-bottom">
      <div className="col-md-8">SUBTOTAL</div>
      <div className="col-md-4">${props.subtotal}</div>
    </div>
    <div className="row checkout-summary-margin-bottom">
      <div className="col-md-8">PROMOTION CODE <b>{props.promoCode}</b> APPLIED </div>
      <div className="col-md-4"> -${props.promoDiscount}</div>
    </div>
    <div className="row checkout-summary-margin-bottom">
      <div className="col-md-8">Estimated Shipping* <br/><p className="font-weight-light"> You qualify for free shipping<br/> Because your order is over $50</p></div>
      <div className="col-md-4">{props.shippingCost > 0 ? props.shippingCost : "FREE"}</div>
    </div>
    <div className="row checkout-summary-margin-bottom">
      <div className="col-md-8"><h2>ESTIMATED TOTAL</h2> <br/><p className="font-weight-light">Tax will be applied during Checkout</p></div>
      <div className="col-md-4">${props.subtotal - parseInt(props.promoDiscount) + parseInt(props.shippingCost)}</div>
    </div>
    <div className="row">
      <div className="col-md-9 text-right"><u>Continue Shopping</u></div>
      <button className="col-md-2 btn btn-primary">Checkout</button>
    </div>
  </div>
}