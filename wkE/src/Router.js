import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, Linking } from 'react-native';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

export const StackRouter = StackNavigator({
  Albums: {
    screen: PageOne,
    navigationOptions: ({navigation})=>({
      title: ('ALBUMS'),
    })
  },
  Details: {
    screen: PageTwo,
    navigationOptions: ({navigation})=>({
      title: `${navigation.state.params.title.toUpperCase()}`,
      headerRight: (
        <Button
          title='Buy'
          onPress={() => Linking.openURL(navigation.state.params.url)}
        />
      ),
    })
  },
});
