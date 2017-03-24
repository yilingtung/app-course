
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import Page from './page1';
//import Page from './page2';
import Page from './page3';

export default class App extends Component {
  render() {
    return (
      <Page />
    );
  }
}

AppRegistry.registerComponent('hw5', () => App);
