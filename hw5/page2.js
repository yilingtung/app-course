
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import SegmentedControl from './src/components/SegmentedControl';
import CardList from './src/components/CardList';
import TabBar from './src/components/TabBar';

export default class hw5 extends Component {
  render() {
    const { containerStyle, tabBarStyle } = styles;

    return (
      <View style={containerStyle}>
        <StatusBar barStyle="light-content"/>
        <Header headerText={'Hearthstone'} />
        <SegmentedControl />
        <CardList />
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
