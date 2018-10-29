import React from 'react'
import {Text, Dimensions,TouchableOpacity} from 'react-native'
import {TextInput, Screen, Image, Button,Title, NavigationBar } from '@shoutem/ui'
import {Actions} from 'react-native-router-flux'

import firebase from 'firebase'

import Home from './HomePage/home'
import config from './config'
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

class Login extends React.Component
{
  constructor(props) {
    super(props)
  }



  state = {
    error: '',
    email: '',
    password: '',
    isLoading: false,
    user:null
  }

  componentWillMount()
  {
    firebase.auth().onAuthStateChanged(user => {
      var oldProperties =  {...this.state}
      oldProperties.user = user
      this.setState(oldProperties)
    })
  }


  startLoggingIn(email, password){

    var oldProperties =  {...this.state}
    oldProperties.isLoading = true
    this.setState(oldProperties)


    if (this.state.password.length > 0)
      {
        console.warn("Inside")
        firebase.auth().signInWithEmailAndPassword (email,password).then(()=>{

        ()=> Actions.main_home({type: 'reset'})

      }).catch((error)=>{
        var oldProperties =  {...this.state}
        oldProperties.error = error.message
        oldProperties.isLoading = false
        this.setState(oldProperties)
      })
    }

    else
    {
      var oldProperties =  {...this.state}
      oldProperties.isLoading = false
      this.setState(oldProperties)
      console.warn('No password?')
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



  render()
  {

    if (this.state.user)
    {
      Actions.home()
    }

    return(

      this.state.isLoading ?
         <Spinner /> :

      <Screen style= {styles.screenStyle}>

        <Image
          styleName="small"
          style= {styles.imageStyle}
          source={require('./lock.png')}
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
          onChangeText= { (text) =>  {this.setPasswordText(text) } }
          value={this.state.password}
          secureTextEntry

        />

        <Button style= {styles.loginButtonStyle} styleName="secondary" onPress = { () => this.startLoggingIn( this.state.email, this.state.password )} >
          <Text style= {styles.loginTextStyle} >Login</Text>
        </Button>


        { this.state.error ?

          <Text style= {styles.errorTextStyle}>
            {this.state.error}
          </Text>: null

        }

        <TouchableOpacity onPress={() => { Actions.signUp() }} style= {styles.signUpTextStyle}>
          <Text >
            Don't have an account?
          </Text>
        </TouchableOpacity>


      </Screen>

    )
  }
}

export default Login
