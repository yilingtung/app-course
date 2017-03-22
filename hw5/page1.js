
import React, { Component } from 'react';
import { AppRegistry, StyleSheet,StatusBar, View, Image } from 'react-native';

export default class hw5 extends Component {
  render() {
    const {
      containerStyle,
      logoStyle,
    } = styles;

    return (
      <View style={containerStyle}>
        <StatusBar hidden={true} barStyle="light-content"/>
        <Image style={logoStyle} source={require('./src/Asset/logo_twitch.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(100,65,165)',
  },
  logoStyle: {
    width: 210,
    height: 100,
  },
});

AppRegistry.registerComponent('hw5', () => hw5);
