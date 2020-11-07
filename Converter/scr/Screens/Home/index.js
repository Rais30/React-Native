import React from 'react';
import {View, Text, Modal, TextInput, Button} from 'react-native';

class App extends React.Component {
  state = {
    modalViible: false,
    modalVisible2: false,
    from: 'pilih mata uang 1',
    to: 'pilih mata uang 2',
    input: '',
    hasil: '0',
    mataUang: ['Rupiah', 'Dolar', 'Ringgit'],
  };
  submitConverter = () => {
    const from = this.state.from;
    const to = this.state.to;
    const input = parseInt(this.state.input);

    if (from == 'Dolar' && to == 'Rupiah') {
      const hasil = input * 15000;
      this.setState({hasil: hasil});
    }else if (from == 'Dolar' && to == 'Ringgit') {
      const hasil = input * 15000;
      this.setState({hasil: hasil});
    }else if (from == 'Rupiah' && to == 'Dolar') {
      const hasil = input * 15000;
      this.setState({hasil: hasil});
    }else if (from == 'Rupiah' && to == 'Ringgit') {
      const hasil = input * 15000;
      this.setState({hasil: hasil});
    }else if (from == 'Ringgit' && to == 'Rupiah') {
      const hasil = input * 15000;
      this.setState({hasil: hasil});
    }else if (from == 'Ringgit' && to == 'Dolar') {
      const hasil = input * 15000;
      this.setState({hasil: hasil});
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalViible}
          onRequestClose={() => this.setState({modalViible: false})}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{width: '70%', backgroundColor: 'white', borderRadius: 5}}>
              {this.state.mataUang.map((value, key) => {
                return (
                  <Text
                    key={key}
                    onPress={() => {
                      this.setState({from: value, modalViible: false});
                    }}>
                    {value}
                  </Text>
                );
              })}
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible2}
          onRequestClose={() => this.setState({modalVisible2: false})}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{width: '70%', backgroundColor: 'white', borderRadius: 5}}>
              {this.state.mataUang.map((value, key) => {
                return (
                  <Text
                    key={key}
                    onPress={() => {
                      this.setState({to: value, modalVisible2: false});
                    }}>
                    {value}
                  </Text>
                );
              })}
            </View>
          </View>
        </Modal>
        <View style={{width: '100%', paddingVertical: 10,flexDirection:'row'}}>
          <View style={{width: '50%'}}>
            <View style={{marginBottom: 5, marginHorizontal: 5}}>
              <Text>From</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 50,
                  width: '70%',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{this.state.from}</Text>
              </View>
              <Text onPress={() => this.setState({modalViible: true})}>
                Pilih
              </Text>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <View style={{marginBottom: 5, marginHorizontal: 5}}>
              <Text>To</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 50,
                  width: '70%',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{this.state.to}</Text>
              </View>
              <Text onPress={() => this.setState({modalVisible2: true})}>
                Pilih
              </Text>
            </View>
          </View>
        </View>
        <TextInput
          value={this.state.input}
          placeholder="Ketik nilai"
          onChangeText={(text) => this.setState({input: text})}
        />
        <Button
          title="submit"
          color="green"
          onPress={() => this.submitConverter()}
        />
        <Text>{this.state.hasil}</Text>
      </View>
    );
  }
}
export default App;