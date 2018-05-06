import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import { Tabs } from './components/Navigation'



export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
