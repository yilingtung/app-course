
import React, { Component } from 'react';
import { AppRegistry, StyleSheet,StatusBar, View, Image } from 'react-native';

class Page1 extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar hidden={true} barStyle="light-content"/>
        <Image style={styles.logoStyle} source={require('./src/Asset/logo_twitch.png')}/>
      </View>
    );
  }
}

const styles = {
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
}

export default Page1;
