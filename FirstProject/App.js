import React from "react"
import { View, Text, Button,StyleSheet } from 'react-native'

class App extends React.Component {
  buttonKlik = () => {
      alert('tombol ini di klik')
  }

  render() {
      return (
          <View >
              <Text style={styles.teksHallo}>Hallo Kak</Text>
              <Text style={warna.pelangi}>Rais Azaria Aryaguna</Text>
              <Button title='klik' color="blue" onPress={()=>this.buttonKlik()} />
          </View>

      )
  }
}
export default App;

const styles =StyleSheet.create({
  teksHallo:{
      color:'red',
  },
});

const warna=StyleSheet.create({
  pelangi:{
      color:"green",
      fontSize:30,
      fontWeight:"bold"
  }
})
