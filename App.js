import React, { Component } from 'react';
import Bilal from './src/Bilal'
import SignIn from './src/Component/SignIn'
import Profile from './src/Component/Profile'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class App extends Component<{}> {
    
  render() {
    return (
       <Bilal /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
