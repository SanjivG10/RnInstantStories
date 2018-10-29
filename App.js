import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import firebase from 'firebase';
import config from './src/config'

import AllRoutes from './src/router'


export default class App extends Component {


  componentWillMount()
  {
    firebase.initializeApp(config)
  }


  render() {
    return (
        <AllRoutes />
    );
  }
}
