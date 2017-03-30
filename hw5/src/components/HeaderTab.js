import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Content, Tab, Tabs } from 'native-base';

const HeaderTab = (props) => {
  return(
    <View >
      <Tabs style={{flex:1,flexDirection:'row'}}>
        <Tab heading="Tab1">
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle, styles.activeStyle}>LIVE</Text>
            <View style={styles.indicatorStyle}>
            </View>
          </View>
        </Tab>
          <Tab heading="Tab2">
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>RECENT</Text>
          </View>
        </Tab>
      </Tabs>
    </View>

  );
};

const styles = {
  containerStyle: {
    flexDirection:'row',
    flex:1
  },
  viewStyle: {
    backgroundColor: '#fff',
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 33,
    width: 33
  },
  textStyle: {
    fontSize: 13,
    color: 'rgb(187,187,187)',
  },
  activeStyle: {
    color: 'rgb(100,65,165)',
  },
  indicatorStyle: {
    backgroundColor: 'rgb(100,65,165)',
    height: 5,
    width: 187.5,
    position: 'absolute',
    bottom: 0
  },
};

// Make the component available to other parts of the app
export default HeaderTab;
