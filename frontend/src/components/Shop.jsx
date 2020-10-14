import React, { Component } from "react";
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
    return <h1>Shop</h1>;
  }
}

export default Shop;
