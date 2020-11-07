// import React, {Component} from 'react';
// import {Text, View, TextInput, ToastAndroid, Image} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// export class SignIn extends Component {
//   state = {
//     visibel: true,
//     email: '',
//     password: '',

//   };
//   singUp = () => {
//     const {email, password} = this.state;
//     const url = 'http://restful-api-laravel-7.herokuapp.com/api/login';

//     fetch(url, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((resjson) => {
//         console.log(resjson);
//         if (resjson.token) {
//           this.props.navigation.replace('Home'),{
//             token:resjson.token
//           }
//         } else if (resjson.error) {
//           alert(resjson.error);
//         } else {
//           console.log(error);
//         }
//       });
//   };
//   pindah = () => {
//     this.props.navigation.navigate('SignUp');
//   };
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View
//           style={{
//             backgroundColor: '#087cbf',
//             width: '100%',
//             height: 250,
//           }}>
//           <View
//             style={{
//               backgroundColor: 'white',
//               justifyContent: 'center',
//               alignItems: 'center',
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//               alignSelf: 'center',
//               top: 50,
//             }}>
//             <Image
//               style={{width: 70, height: 70, alignSelf: 'center', padding: 5}}
//               source={{
//                 uri:
//                   'https://pondokit.com/pondokit/img/thumb/pondok-programmer.png',
//               }}
//             />
//           </View>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'white',
//             width: '90%',
//             height: 380,
//             borderRadius: 10,
//             bottom: 70,
//             alignSelf: 'center',
//             elevation: 3,
//           }}>
//           <View>
//             <View style={{justifyContent: 'center', alignItems: 'center'}}>
//               <Text
//                 style={{fontSize: 30, fontWeight: 'bold', color: '#087cbf'}}>
//                 SIGN IN
//               </Text>
//             </View>
//             <View
//               style={{
//                 marginVertical: 10,
//                 marginHorizontal: 20,
//                 marginRight: 5,
//               }}>
//               <Text style={{color: '#b1afaf'}}>email</Text>
//               <View style={{borderBottomWidth: 1, width: '90%'}}>
//                 <TextInput
//                   value={this.state.email}
//                   onChangeText={(text) => this.setState({email: text})}
//                 />
//               </View>
//             </View>
//             <View
//               style={{
//                 marginVertical: 10,
//                 marginHorizontal: 20,
//                 marginRight: 5,
//               }}>
//               <Text style={{color: '#b1afaf'}}>Password</Text>
//               <View style={{borderBottomWidth: 1, width: '90%'}}>
//                 <TextInput
//                   value={this.state.password}
//                   secureTextEntry={this.state.visibel}
//                   onChangeText={(text) => this.setState({password: text})}
//                 />
//               </View>
//             </View>
//           </View>
//           <TouchableOpacity
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: '#2f83f9',
//               borderRadius: 25,
//               width: '90%',
//               alignSelf: 'center',
//               marginTop: 10,
//               height: 40,
//             }}
//             onPress={() => this.singUp()}>
//             <Text
//               style={{
//                 fontSize: 17,
//                 fontWeight: 'bold',
//                 color: '#fcf8f8',
//               }}>
//               Sign In
//             </Text>
//           </TouchableOpacity>
//           <View
//             style={{flexDirection: 'row', marginTop: 30, alignSelf: 'center'}}>
//             <Text>New User?</Text>
//             <Text
//               style={{color: '#65a3fb', marginLeft: 5}}
//               onPress={() => this.pindah()}>
//               Sign Up
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// export default SignIn;

import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';

export default class login extends Component {
  login = () => {
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        email: 'rais@gmail.com',
        password: '12345678',
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
          this.props.navigation.replace('Home', {
            token: resJson.token,
          });
        } else {
          alert('error');
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="login" color="blue" onPress={() => this.login()} />
      </View>
    );
  }
}