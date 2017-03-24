
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,StatusBar } from 'react-native';
import SearchBar from './src/components/SearchBar';
import GameList from './src/components/GameList';
import TabBar from './src/components/TabBar';

class Page3 extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
      <StatusBar barStyle="light-content"/>
        <SearchBar />
        <GameList />
        <TabBar style={styles.tabBarStyle}/>
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

export default Page3;
