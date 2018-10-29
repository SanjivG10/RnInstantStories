import React from 'react'
import {Text, Dimensions} from 'react-native'

import {TextInput, Screen, Image, Button,Title, NavigationBar, TouchableOpacity } from '@shoutem/ui'
import {Actions} from 'react-native-router-flux'


// firebase config
import firebase from 'firebase'
import config from './config'

import Home from './HomePage/home'
import Spinner from './spinner'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles= {
  textInputStyle: {
    width: width,
    elevation: 2 ,
    marginTop: 10,
    marginLeft: 10

  },
  screenStyle: {
    backgroundColor: '#FFF'
  },

  imageStyle: {
    marginTop: 85,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginBottom: 30
  },
  loginButtonStyle: {
    alignSelf: 'flex-end',
    marginRight: 20,
    backgroundColor: '#FFF',
    marginTop: 30,
    padding: 10
  },
  loginTextStyle: {
    textSize: 20
  },
  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 16
  },
  signUpTextStyle: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#e5e5e5'
  }
}


class SignUp extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
      re_password: '',
      isLoading: false
    }
  }



  setEmailText(email)
  {
    var oldProperties =  {...this.state}
    oldProperties.email = email
    this.setState(oldProperties)
  }

  setPasswordText(password)
  {
    var oldProperties =  {...this.state}
    oldProperties.password = password
    this.setState(oldProperties)
  }

  setRePasswordText(re_password)
  {
    var oldProperties =  {...this.state}
    oldProperties.re_password = re_password
    this.setState(oldProperties)
  }

  startSignUp()
  {

    var oldProperties =  {...this.state}
    oldProperties.isLoading = true
    this.setState(oldProperties)

    if (this.state.password===this.state.re_password )
    {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
          ()=> Actions.main_home({type: 'reset'})
      ).catch(
        (error)=>{
          var oldProperties =  {...this.state}
          oldProperties.error= error.message
          oldProperties.isLoading = false
          this.setState(oldProperties)
        }
      )
    }
    else
    {
      var oldProperties =  {...this.state}
      oldProperties.isLoading = false
      oldProperties.error= "The password do not match"
      this.setState(oldProperties)
      console.warn('NOT EQUAL')

    }
  }

  render()
  {
    return(

       this.state.isLoading ?
          <Spinner /> :

            <Screen style= {styles.screenStyle}>

              <Image
                styleName="small"
                style= {styles.imageStyle}
                source={require('./boy.png')}
              />

              <TextInput
                style= {styles.textInputStyle}
                placeholder={'Email'}
                onChangeText= { (text)=> { this.setEmailText(text) } }
                value={this.state.email}
              />

              <TextInput
                placeholder={'Password'}
                style= {styles.textInputStyle}
                secureTextEntry
                onChangeText= { (text) =>  {this.setPasswordText(text) } }
                value={this.state.password}
              />

              <TextInput
                placeholder={'Confirm Password'}
                style= {styles.textInputStyle}
                secureTextEntry
                onChangeText= { (text) =>  {this.setRePasswordText(text) } }
                value={this.state.re_password}
              />

              <Button style= {styles.loginButtonStyle} styleName="secondary" onPress = { () => this.startSignUp()}>
                <Text style= {styles.loginTextStyle} >Sign Up</Text>
              </Button>


              {
                this.state.error ?
                <Text style= {styles.errorTextStyle}>
                  {this.state.error}
                </Text>  :
                null

              }

              <TouchableOpacity onPress={() => { Actions.login({type: "reset"}) }} style= {styles.signUpTextStyle}>
                <Text >
                  Already have an account?
                </Text>
              </TouchableOpacity>


            </Screen>
          )
  }
}

export default SignUp
