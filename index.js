import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Textcustom} from './props';

class Login extends React.Component {
  state = {
    visible: true,
    username: '',
    password: '',
    usernamedefault: 'a',
    passworddefault: 'a',
  };
  lihat = () => {
    this.setState({visible: !this.state.visible});
  };
  login = () => {
    if (
      this.state.username == this.state.usernamedefault &&
      this.state.password == this.state.passworddefault
    ) {
      alert('irasai');
    } else {
      alert('gomennasai');
    }
  };
  render() {
    return (
      <View style={stylers.container}>
        <View style={stylers.header}>
          <View alignItems="center">
            <Textcustom title="Login"/>
          </View>
          <View style={stylers.boxInput}>
            <TextInput
              placeholder="Username"
              style={stylers.input}
              value={this.state.username}
              onChangeText={(teks) => this.setState({username: teks})}
            />
            <TextInput
              secureTextEntry={this.state.visible}
              placeholder="Password"
              style={stylers.input}
              value={this.state.password}
              onChangeText={(teks) => this.setState({password: teks})}
            />
          </View>

          <View alignItems="flex-end">
            <Text onPress={() => this.lihat()}>lihat</Text>
          </View>
          <View alignItems="center">
            <Button title="Masuk" onPress={() => this.login()} />
          </View>
        </View>
      </View>
    );
  }
}
export default Login;

const stylers = StyleSheet.create({
  container: {
    backgroundColor: '#9ddcea',
    flex: 1,
    // alignItems:"flex-end",
    // justifyContent:"center"
  },
  header: {
    height: '60%',
    width: '100%',
    backgroundColor: '#9ddcea',
    justifyContent: 'flex-end',
  },
  boxInput: {
    width: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    height: 50,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
