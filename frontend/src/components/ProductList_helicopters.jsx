/* eslint-disable */
import React from "react";
import Product_component from "./Product_component";

class ProductList_helicopters extends React.Component {
  render() {
    return (
      <div className="home">
          <div className="row">
            {this.props.helicopters.map((product) => (
              <Product_component key={product.id} product={product} />
            ))}
          </div>
        </div>
    );
  }
}

export default ProductList_helicopters;
