
import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Navigator,
  TabBarIOS,
 } from 'react-native';
//import Page from './page1';
//import Page from './page2';
import Page from './page3';
import CardList from './src/components/CardList';

export default class App extends Component {
  constructor(){
    super();
    this.state = { selectedTab: 'tabOne' };
  }
  setTab(tabId){
    this.setState({ selectedTab: tabId });
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'Games') {
      return (
        <CardList
          navigator={navigator} />
      );
    }
    if (routeId === 'Channels') {
      return (
        <CardList
          navigator={navigator} />
      );
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <TabBarIOS
          tintColor= "rgb(100,65,165)"
          unselectedTintColor= "rgb(187,187,187)"
          barTintColor= "white"
          >
          <TabBarIOS.Item
            title="Games"
            icon={require('./src/Asset/btn_games_selected.png')}
            selected={this.state.selectedTab==='tabOne'}
            onPress={()=>this.setTab('tabOne')}>

            <Navigator
              initialRoute={{ id: 'Games', index: 0 }}
              renderScene={this.renderScene.bind(this)}
              navigationBar={
                <Navigator.NavigationBar
                  routeMapper={{
                    LeftButton: (route, navigator, index, navState) =>
                      { return (<Image style={{height: 33, width: 33, marginTop: 5, marginLeft: 8.5}} source={require('./src/Asset/btn_back.png')}/>); },
                    RightButton: (route, navigator, index, navState) =>
                      { return (<Image style={{height: 33, width: 33, marginTop: 5, marginRight: 8.5}} source={require('./src/Asset/btn_like.png')}/>); },
                    Title: (route, navigator, index, navState) =>
                      { return (<Text style={{fontSize: 18, color: '#fff', marginTop: 10.5}}>Hearthstone</Text>); },
                  }}
                  style={{backgroundColor: 'rgb(100,65,165)'}}
                />
              }
            >
            </Navigator>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Channels"
            icon={require('./src/Asset/btn_channels.png')}
            selected={this.state.selectedTab==='tabTwo'}
            onPress={()=>this.setTab('tabTwo')}>
            <Navigator
              initialRoute={{ id: 'Channels', index: 0 }}
              renderScene={this.renderScene.bind(this)}
              navigationBar={
                <Navigator.NavigationBar
                  routeMapper={{
                    LeftButton: (route, navigator, index, navState) =>
                      { return (<Image style={{height: 33, width: 33, marginTop: 5, marginLeft: 8.5}} source={require('./src/Asset/btn_back.png')}/>); },
                    RightButton: (route, navigator, index, navState) =>
                      { return (<Image style={{height: 33, width: 33, marginTop: 5, marginRight: 8.5}} source={require('./src/Asset/btn_like.png')}/>); },
                    Title: (route, navigator, index, navState) =>
                      { return (<Text style={{fontSize: 18, color: '#fff', marginTop: 10.5}}>Hearthstone</Text>); },
                  }}
                  style={{backgroundColor: 'rgb(100,65,165)'}}
                />
              }
            >
            </Navigator>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Following"
            icon={require('./src/Asset/btn_following.png')}
            selected={this.state.selectedTab==='tabThree'}
            onPress={()=>this.setTab('tabThree')}>
            <View style={styles.tabView}>
              <Text>Following</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Me"
            icon={require('./src/Asset/btn_me.png')}
            selected={this.state.selectedTab==='tabFour'}
            onPress={()=>this.setTab('tabFour')}>
            <View style={styles.tabView}>
              <Text>Me</Text>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}
const styles = {
  tabView: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarIcon: {
    height: 15,
    width: 15,
  },
};
AppRegistry.registerComponent('hw5', () => App);
