import React from 'react'
import { View } from 'react-native'
import Navigation from './src/Navigation'
import Splash from './src/Scrian/Splash'

export class App extends React.Component {
  render() {
    return (
      <View>
        <Splash/>
      </View>
    )
  }
}

export default App
