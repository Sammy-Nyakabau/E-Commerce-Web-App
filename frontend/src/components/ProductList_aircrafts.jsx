/* eslint-disable */
import React from "react";
import Product_component from "./Product_component";

class ProductList_aircrafts extends React.Component {
  render() {
    return (
      <div className="home">
          <div className="row">
            {this.props.aircrafts.map((product) => (
              <Product_component key={product.id} product={product} />
            ))}
          </div>
        </div>
    );
  }
}


export default ProductList_aircrafts;
