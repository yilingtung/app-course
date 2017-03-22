
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,StatusBar } from 'react-native';
import SearchBar from './src/components/SearchBar';
import GameList from './src/components/GameList';
import TabBar from './src/components/TabBar';

export default class hw5 extends Component {
  render() {
    const { containerStyle, tabBarStyle } = styles;

    return (
      <View style={containerStyle}>
      <StatusBar barStyle="light-content"/>
        <SearchBar />
        <GameList />
        <TabBar style={tabBarStyle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(241,241,241)',
  },
});

AppRegistry.registerComponent('hw5', () => hw5);
