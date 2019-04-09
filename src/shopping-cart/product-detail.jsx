import React from 'react';
export const ProductDetail = (props) => {
  return (
  <div className="col-md-4">
    <b className="float-left">{props.variation.toUpperCase()} {props.name.toUpperCase()}</b>
    <div className="float-left grey">Style #: {props.style}</div>
    <div className="float-left grey">Color: {props.color}</div>
  </div>)
}