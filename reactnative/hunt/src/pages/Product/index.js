import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation, route}) => {
  const {product} = route.params;
  return <WebView source={{uri: product.url}} />;
};

export default Product;
