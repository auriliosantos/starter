import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

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

  renderItem = ({item}) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.products}
          keyExtractor={(item) => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
