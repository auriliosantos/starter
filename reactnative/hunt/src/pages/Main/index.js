import React, {Component} from 'react';
import {View, Text} from 'react-native';

import api from '../../services/api';

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const {docs} = response.data;
  };

  render() {
    return (
      <View>
        <Text>Página Main</Text>
      </View>
    );
  }
}
