import React, { Component } from 'react'
import {View , Text} from 'react-native'
import Navigation from './scr/Navigation'
import SignIn from './scr/Sign in'
import SignUp from './scr/Sign Up'


export class App extends Component {
  render() {
    return (
      <Navigation/>
    )
  }
}

export default App
