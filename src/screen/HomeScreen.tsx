import React from 'react';
import {View} from 'react-native';

import {Card, Text} from 'react-native-elements';
import {NavigationComponent} from 'react-navigation';

import Shelf from '../component/Shelf';

const data = [
  {title: 'Test 1', image: 'https://picsum.photos/300/300?random=1'},
  {title: 'Test 2', image: 'https://picsum.photos/300/300?random=2'},
];

const HomeScreen: NavigationComponent = () => {
  return (
    <View>
      {data.map((shelf) => {
        return <Shelf text={shelf.title} image={shelf.image} />;
      })}
    </View>
  );
};

export default HomeScreen;
