import React, {Component} from 'react';
import {View, Text} from 'react-native';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: [],
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const {docs} = response.data;

    this.setState({products: docs, page});
  };

  render() {
    return (
      <View>
        <Text>Página Main:</Text>
        {this.state.products.map((product) => (
          <Text key={product._id}>{product.title}</Text>
        ))}
      </View>
    );
  }
}
