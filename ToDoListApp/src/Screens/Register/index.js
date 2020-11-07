import React from 'react';
import {View, Text, Button, TextInput, _Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    kunci:false
  };
  registrasi = () => {
    const {name, email, password, password_confirmation} = this.state;
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/register';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }),
    })
      .then((respon) => respon.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
          this.props.navigation.replace('Login');
          ToastAndroid.show(
            'Register Berhasil',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        } else {
          alert('err');
        }
      })
      .catch((error) => {
        console.log('errror is ' + error);
      });
  };
  lihat=()=>{
this.setState({kunci:!this.state.kunci})

  }
  render() {
    return (
      <View style={{flex: 1,borderRadius:5}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>Registrasi</Text>
          </View>
          <View style={{width: '95%', marginTop: 50,}}>
            <View style={{flexDirection: 'row', width: '100%',borderWidth:1,borderRadius:10,marginVertical:5}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '15%',
                }}>
                <Icon name="user" size={30} />
              </View>
              <View style={{width: '85%'}}>
                <TextInput
                  placeholder="Name"
                  value={this.state.name}
                  onChangeText={(teks) => this.setState({name: teks})}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', width: '100%',borderWidth:1,borderRadius:10,marginVertical:5}}>
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
                  style={{justifyContent: 'center', alignItems: 'center'}}
                  placeholder="Email"
                  value={this.state.email}
                  onChangeText={(teks) => this.setState({email: teks})}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', width: '100%',borderWidth:1,borderRadius:10,marginVertical:5}}>
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
                  style={{justifyContent: 'center', alignItems: 'center'}}
                  placeholder="Password"
                  value={this.state.password}
                  onChangeText={(teks) => this.setState({password: teks})}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '15%',
                }}>
                <Icon name="eye" size={30} onPress={()=>this.lihat()}/>
              </View>
            </View>
            <View style={{flexDirection: 'row', width: '100%',borderWidth:1,borderRadius:10,marginVertical:5}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '15%',
                }}>
                <Icon name="lock" size={30} />
              </View>
              <View style={{width: '85%'}}>
                <TextInput
                  style={{justifyContent: 'center', alignItems: 'center'}}
                  placeholder="Confirm Password"
                  value={this.state.password_confirmation}
                  onChangeText={(teks) =>
                    this.setState({
                      password_confirmation: teks,
                    })
                  }
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>
          <Button title="Register" onPress={() => this.registrasi()}/>
          <View style={{alignItems:'center',marginVertical:10}}>
          <Icon name="log-in" size={30} onPress={()=>this.props.navigation.replace('Login')}/>
          <Text>Login</Text>
        </View>
        </View>
      </View>
    );
  }
}
export default Register;
