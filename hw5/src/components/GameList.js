import React from 'react';
import { ScrollView, Image, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const GameList = (props) => {
  const { containerStyle, imageStyle } =styles;

  return(
    <ScrollView contentContainerStyle={containerStyle}>
      <Image style={imageStyle} source={require('../Asset/img_leagueoflegends.png')}/>
      <Image style={imageStyle} source={require('../Asset/img_counterstrike.png')}/>
      <Image style={imageStyle} source={require('../Asset/img_hearthstone.png')}/>
      <Image style={imageStyle} source={require('../Asset/img_dota2.png')}/>
      <Image style={imageStyle} source={require('../Asset/img_h1z1.png')}/>
      <Image style={imageStyle} source={require('../Asset/img_destiny.png')}/>
      <Image style={imageStyle} source={require('../Asset/img_leagueoflegends.png')}/>
      <Image style={imageStyle} source={require('../Asset/img_counterstrike.png')}/>
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
  },
  imageStyle: {
    height: (deviceWidth-15)/2,
    width: (deviceWidth-15)/2,
    marginBottom: 5,
  },
};

// Make the component available to other parts of the app
export default GameList;