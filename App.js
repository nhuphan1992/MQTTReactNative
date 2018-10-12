import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <View style={styles} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
