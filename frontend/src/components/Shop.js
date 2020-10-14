import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import "./Shop.css"
import ProductList from './ProductList';
import { getProducts } from "../services/productService";
import {
getAircraft,
  getHelicopters,
  getJetLiners,
  getUnmannedAerialSystems,
} from "../services/categoriesService";

class Shop extends Component {
  state = {
    products: [],
    helicopters: [],
    aircrafts: [],
    jetLiners: [],
    unmannedAerialSystems: [],
  };

  async componentDidMount() {
    const { data: products } = await getProducts();
    const { data: helicopters } = await getHelicopters();
    const { data: aircrafts } = await getAircraft();
    const { data: jetLiners } = await getJetLiners();
    const { data: unmannedAerialSystems } = await getUnmannedAerialSystems();

    this.setState({
      products,
      helicopters,
      aircrafts,
      jetLiners,
      unmannedAerialSystems,
    });
    console.log(this.state.products);
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <div className="shop_banner">
        <img src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1804/Sukhoi-Su-30-military-aircraft-man-black-background_1920x1080.jpg" />  
        </div>
        <Container id="content">
          <ProductList
            products={this.state.products} />
        </Container>
      </div>
    );
  }
}


export default Shop;