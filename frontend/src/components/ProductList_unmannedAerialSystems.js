import React from "react";
import Product_component from "./Product_component";

class ProductList_unmannedAerialSystems extends React.Component {
  render() {
    return (
      <div className="home">
          <div className="row">
            {this.props.unmannedAerialSystems.map((product) => (
              <Product_component key={product.id} product={product} />
            ))}
          </div>
        </div>
    );
  }
}

// ProductList.defaultProps = {
//   products: []
// };

export default ProductList_unmannedAerialSystems;
