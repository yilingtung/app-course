import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {searchText : ''};
  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <View style={styles.searchBGStyle}>
          <Image style={styles.seachStyle} source={require('../Asset/icon_search.png')}/>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.setState({searchText : text})}
            value={this.state.searchText}
            placeholder={'Search'}
            placeholderTextColor={'rgb(185,163,227)'}
          />
        </View>
        <Image style={styles.imageStyle} source={require('../Asset/btn_cast.png')}/>
      </View>
    )
  }
}

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
  textInputStyle: {
    color: 'rgb(185,163,227)',
    fontSize: 15,
    height: 30,
    flex: 1,
  },
  imageStyle: {
    height: 33,
    width: 33,
  },
};

// Make the component available to other parts of the app
export default SearchBar;
