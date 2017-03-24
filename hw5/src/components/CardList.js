import React from 'react';
import { ScrollView, View, Image } from 'react-native';

const CardList = (props) => {
  return(
    <ScrollView style={styles.containerStyle}>
      <View style={styles.viewStyle}>
        <Image style={styles.imageStyle1} source={require('../Asset/img_firebat.png')}/>
      </View>
      <View style={styles.viewStyle}>
        <Image style={styles.imageStyle1} source={require('../Asset/img_forsen.png')}/>
      </View>
      <View style={styles.viewStyle}>
        <Image style={styles.imageStyle2} source={require('../Asset/img_kolento.png')}/>
      </View>
    </ScrollView>

  );
};

const styles = {
  containerStyle: {
    paddingTop: 5,
    flex: 1,
  },
  viewStyle: {
    paddingRight: 5.5,
    paddingLeft: 4.5,
    paddingBottom: 5,
    flex: 1,
  },
  imageStyle1: {
    width: 365,
    height: 200,
  },
  imageStyle2: {
    width: 365,
    height: 144,
  },
};

// Make the component available to other parts of the app
export default CardList;
