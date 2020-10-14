import React from 'react';
import { Col, Card } from 'react-bootstrap';
import '../styles/Product.css'


function Product(props) {
  let {
    product
  } = props;

  return (
    <Col
      lg={3}
      md={4}
      sm={6}>
      <Card className="product">
        <div className="product-img-wrapper">
          <a href="#">
            <img
              alt={product.name}
              className="img-responsive product-img"
              src={product.image} />
          </a>
        </div>

        <h4
          className="ellipsis"
          title={product.name}>
          <a href="#">
            {product.name}
          </a>
        </h4>

        <h5
          className="ellipsis product-brand-name"
          title={product.category}>
          {`by ${product.category}`}
        </h5>

        <div className="pull-right h4 product-price">
          {`${product.price}$`}
        </div>
      </Card>
    </Col>
  );
}



export default Product;