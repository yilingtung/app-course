import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { List } from 'react-native-elements';
import Item from './Item';
import albums from '../json/albums.json';

// Make a component
class PageOne extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var albumList = albums.map((album) => {
        return (
          <Item
            key={album.title}
            uid={album.title}
            album={album}
            goToPageTwo={() => this.goToPageTwo(album)}
            onDelete={this.onDelete}
          />
        );
      });
      this.setState({albumList: albumList});
  }

  onDelete = (uid) => {
    var albumList = this.state.albumList;
    var arrayLength = albumList.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log(albumList[i]);
      if (albumList[i].key === uid) {
        albumList.splice(i, 1);
        this.setState({albumList: albumList});
        break;
      }
    }
  }

  goToPageTwo = (album) => {
    this.props.navigation.navigate('Details', { ...album });
  };

  render() {
    return (
      <ScrollView>
        <View>
          {this.state.albumList}
        </View>
      </ScrollView>
    );
  }
}

export default PageOne;
