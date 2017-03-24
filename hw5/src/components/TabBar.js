import React from 'react';
import { Text, View, Image } from 'react-native';

const TabBar = (props) => {
  return(
    <View>
      <View style={styles.lineStyle}>
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.viewStyle}>
          <Image style={styles.imageStyle} source={require('../Asset/btn_games_selected.png')}/>
          <Text style={styles.activeStyle}>Games</Text>
        </View>
        <View style={styles.viewStyle}>
          <Image style={styles.imageStyle} source={require('../Asset/btn_channels.png')}/>
          <Text style={styles.textStyle}>Channels</Text>
        </View>
        <View style={styles.viewStyle}>
          <Image style={styles.imageStyle} source={require('../Asset/btn_following.png')}/>
          <Text style={styles.textStyle}>Following</Text>
        </View>
        <View style={styles.viewStyle}>
          <Image style={styles.imageStyle} source={require('../Asset/btn_me.png')}/>
          <Text style={styles.textStyle}>Me</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  lineStyle: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.20)',
  },
  viewStyle: {
    backgroundColor: '#fff',
    flex: 1/2,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height:49,
    width: 49,
  },
  textStyle: {
    fontSize: 10,
    color: 'rgb(187,187,187)',
    position: 'absolute',
    bottom: 1
  },
  activeStyle: {
    fontSize: 10,
    color: 'rgb(100,65,165)',
    position: 'absolute',
    bottom: 1
  },
};

// Make the component available to other parts of the app
export default TabBar;
