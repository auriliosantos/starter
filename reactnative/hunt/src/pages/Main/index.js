import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import api from '../../services/api';

import styles from './styles';

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
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.products}
          keyExtractor={(item) => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
