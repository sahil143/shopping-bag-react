import React from 'react';
import {Product} from './product';
import {CustomerSupport} from './customer-support';
import {CheckoutSummary} from './checkout-summary';
import './index.css';
var data = require('../assets/cart.json');

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getsubTotal = this.getsubTotal.bind(this);
  }

  componentDidMount() {
    // use fetch to get the data from server. I have data locally so using require
    // fetch('')
    //   .then(response => response.json())
    //   .then(data => this.setState({data}))
    this.setState({data});
    console.log(data, this.state);
  }

  getsubTotal() {
    let subtotal = 0;
    data.productsInCart.map(item => subtotal += item.p_price);
    return subtotal;
  }

  render() {
    return (
      <div>
        <div className="row table-heading">
          <div className="col-md-6">{data.productsInCart.length} items</div>
          <div className="col-md-2 text-center">Size</div>
          <div className="col-md-2 text-center">Qty</div>
          <div className="col-md-2 text-center">Price</div>
        </div>
        { data.productsInCart.map(item => <Product key={item.p_id} item={item}></Product> ) }
        <hr/>
        {CustomerSupport}
        <CheckoutSummary subtotal={this.getsubTotal()} promoCode="JF10" promoDiscount="7.00" shippingCost="0" currency="$"></CheckoutSummary>
      </div>);
  }
}