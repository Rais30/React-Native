import React, {Component} from 'react';
import {Text, View, TextInput, Button, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Login extends Component {
  state = {
    visibel: true,
    email: '',
    password: '',
  };
  lihat = () => {
    this.setState({visibel: !this.state.visibel});
  };
  login = () => {
    
    const {email, password} = this.state;
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
            ToastAndroid.show(
                'Anda Berhasil Login',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
          this.props.navigation.replace('Home');
        } else if (resJson.error) {
          alert(resJson.error);
        } else {
          console.log(error);
        }
      });
  };
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 40}}>Login</Text>
        </View>
        <View style={{flexDirection: 'row', width: '90%',borderWidth:1,marginBottom:5,borderRadius:10,marginHorizontal:10}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '15%',
            }}>
            <Icon name="mail" size={30} />
          </View>
          <View style={{width: '85%'}}>
            <TextInput
              style={{width: '80%', marginHorizontal: '10%'}}
              placeholder="Email"
              value={this.state.email}
              onChangeText={(teks) => this.setState({email: teks})}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '90%',borderWidth:1,marginTop:5,marginBottom:7,borderRadius:10}}>
        <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '15%',
              }}>
              <Icon name="lock" size={30} />
            </View>
          <View style={{width: '70%'}}>
            <TextInput
              style={{width: '70%', marginHorizontal: '10%'}}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(teks) => this.setState({password: teks})}
              secureTextEntry={this.state.visibel}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '15%',
            }}>
            <Icon name="eye" size={30} onPress={() => this.lihat()} />
          </View>
        </View>
        <Button title="Login" onPress={() => this.login()} />
      </View>
    );
  }
}
