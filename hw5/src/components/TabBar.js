import React from 'react';
import { Text, View, Image } from 'react-native';

const TabBar = (props) => {
  const { containerStyle, lineStyle, viewStyle, imageStyle, textStyle, activeStyle, indicatorStyle } =styles;
  return(
    <View>
      <View style={lineStyle}>
      </View>
      <View style={containerStyle}>
        <View style={viewStyle}>
          <Image style={imageStyle} source={require('../Asset/btn_games_selected.png')}/>
          <Text style={activeStyle}>Games</Text>
        </View>
        <View style={viewStyle}>
          <Image style={imageStyle} source={require('../Asset/btn_channels.png')}/>
          <Text style={textStyle}>Channels</Text>
        </View>
        <View style={viewStyle}>
          <Image style={imageStyle} source={require('../Asset/btn_following.png')}/>
          <Text style={textStyle}>Following</Text>
        </View>
        <View style={viewStyle}>
          <Image style={imageStyle} source={require('../Asset/btn_me.png')}/>
          <Text style={textStyle}>Me</Text>
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
