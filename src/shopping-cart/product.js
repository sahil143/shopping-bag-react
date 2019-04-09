import React from 'react';
import {ProductDetail} from './product-detail';

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props.item}
  }

  render() {
    return (
      <div className="row table-body">
        <img className="col-md-2" src={require(`../assets/T${this.state.p_id}.jpg`)} alt="Product"/>
        <ProductDetail variation={this.state.p_variation} name={this.state.p_name} color={this.state.p_selected_color.name} style={this.state.p_style}></ProductDetail>
        <div className="col-md-2 text-center ">{this.state.p_selected_size.code.toUpperCase()}</div>
        <div className="col-md-2 text-center "><span>{this.state.p_quantity}</span></div>
        <div className="col-md-2 text-center ">
          { this.state.p_originalprice !== this.state.p_price ?
            <span><strike>{this.state.c_currency}{this.state.p_originalprice}</strike><br/>{this.state.c_currency}{this.state.p_price}</span> :
            <span>{this.state.c_currency}{this.state.p_price}</span> }
        </div>
      </div>)
  }
}