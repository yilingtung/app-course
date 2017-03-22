import React from 'react';
import { Text, View, Image } from 'react-native';

const SearchBar = (props) => {
  const { viewStyle, imageStyle, textStyle, searchBGStyle, seachStyle } =styles;
  return(
    <View style={viewStyle}>
      <View style={searchBGStyle}>
        <Image style={seachStyle} source={require('../Asset/icon_search.png')}/>
        <Text style={textStyle}>Search</Text>
      </View>
      <Image style={imageStyle} source={require('../Asset/btn_cast.png')}/>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(100,65,165)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingRight: 8.5,
    paddingLeft: 8.5,
    height: 64,
  },
  searchBGStyle: {
    backgroundColor: 'rgb(49,31,83)',
    height: 30,
    width: 320,
    borderRadius: 5,
    flexDirection: 'row',
  },
  seachStyle: {
    height: 18,
    width: 18,
    marginTop: 6,
    marginLeft: 8.5,
    marginRight: 5.5,
  },
  textStyle: {
    marginTop: 5,
    fontSize: 15,
    color: 'rgb(185,163,227)',
  },
  imageStyle: {
    height: 33,
    width: 33,
  },
};

// Make the component available to other parts of the app
export default SearchBar;
