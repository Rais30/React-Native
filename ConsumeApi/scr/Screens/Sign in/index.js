import React, {Component} from 'react';
import {Text, View, TextInput, ToastAndroid, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class SignIn extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#087cbf',
            width: '100%',
            height: 250,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
              top: 50,
            }}>
            <Image
              style={{width: 70, height: 70, alignSelf: 'center', padding: 5}}
              source={{
                uri:
                  'https://pondokit.com/pondokit/img/thumb/pondok-programmer.png',
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 380,
            borderRadius: 10,
            bottom: 70,
            alignSelf: 'center',
            elevation: 3,
          }}>
          <View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontSize: 30, fontWeight: 'bold', color: '#087cbf'}}>
                SIGN IN
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 20,
                marginRight: 5,
              }}>
              <Text style={{color: '#b1afaf'}}>email</Text>
              <View style={{borderBottomWidth: 1, width: '90%'}}>
                <TextInput/>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 20,
                marginRight: 5,
              }}>
              <Text style={{color: '#b1afaf'}}>Password</Text>
              <View style={{borderBottomWidth: 1, width: '90%'}}>
                <TextInput/>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2f83f9',
              borderRadius: 25,
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
              height: 40,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fcf8f8',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', marginTop: 30, alignSelf: 'center'}}>
            <Text>New User?</Text>
            <Text
              style={{color: '#65a3fb', marginLeft: 5}}
              onPress={() => this.props.navigation.naviget('SignUp')}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SignIn;
