import React from 'react';
import {Card, Text} from 'react-native-elements';

const Shelf = ({text, image}: {text: string; image: string}) => (
  <Card containerStyle={{aspectRatio: 1.5}}>
    <Card.Title>{text}</Card.Title>
    <Card.Image source={{uri: image}} />
  </Card>
);

export default Shelf;
