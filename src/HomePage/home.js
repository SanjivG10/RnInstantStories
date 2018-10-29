import React from  'react'
import {Text, View} from 'react-native'
import {TextInput, Screen, Image, Button,Title, NavigationBar } from '@shoutem/ui'

import {Actions} from 'react-native-router-flux'

import firebase from 'firebase'

import Login from './../login'
import ListViewDay from './listViewForDay'

class HomePage extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state= {
      user: null,
      data: null
    }
  }

  componentWillMount()
  {
    firebase.auth().onAuthStateChanged(user => {
      var oldProperties =  {...this.state}
      oldProperties.user = user
      console.warn(user)
      this.setState(oldProperties)
    })
  }



  render() {

    if (!this.state.user)
    {
      Actions.login()
    }


    return(
      <View>
        <ListViewDay />
      </View>
    )
  }
}

export default HomePage
