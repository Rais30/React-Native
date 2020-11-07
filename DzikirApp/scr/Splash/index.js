import React from 'react';
import {View, Text} from 'react-native';

class Splash extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 2000);
    return (
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            color: '#03297d',
          }}>
          Dzikir
        </Text>
      </View>
    );
  }
}
export default Splash;
