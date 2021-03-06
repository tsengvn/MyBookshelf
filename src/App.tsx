import React from 'react';
import {Header, Button, ThemeProvider} from 'react-native-elements';
import Home from './screen/HomeScreen';
import Login from './screen/LoginScreen';

const App: React.FC = () => (
  <ThemeProvider>
    <Header
      placement="left"
      leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
    <Login />
  </ThemeProvider>
);

export default App;
