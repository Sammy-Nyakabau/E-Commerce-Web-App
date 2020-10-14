import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
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
        <Header />
        <Container id="content">
          <ProductList
            products={this.state.products} />
        </Container>
        <Footer />
      </div>
    );
  }
}


export default Shop;
