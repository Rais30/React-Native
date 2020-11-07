import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
class Home extends React.Component {
  state = {
    data: [],
    input: '',
    saveButton: false,
  };
  componentDidMount() {
    AsyncStorage.getItem('data')
      .then((value) => {
        if (value != null) {
          this.setState({data: JSON.parse(value)});
        }
      })
      .catch((er) => console.log(er));
  }

  addData = () => {
    const data = this.state.input;
    this.state.data.push(data);
    this.setState({data: this.state.data, input: '', saveButton: true});
  };

  deleteData = (element) => {
    const item = element;
    // console.log(item)

    const dataFilter = this.state.data.filter((value, key) => {
      return item != key;
    });
    // console.log(dataFilter)
    this.setState({data: dataFilter, saveButton: true});
  };
  saveData = () => {
    AsyncStorage.setItem('data', JSON.stringify(this.state.data));
    ToastAndroid.show(
      'Data berhasil disimpan',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    this.setState({saveButton: false});
  };
  konfirmasiSimpan = () => {
    Alert.alert(
      'Simpan Data',
      'Yakin ingin menyimpan ?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Simpan', onPress: () => this.saveData()},
      ],
      {cancelable: false},
    );
  };
  saveButton = () => {
    if (this.state.saveButton == true) {
      return (
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={() => this.konfirmasiSimpan()}>
          <Icon name="save" size={30} color="white" />
        </TouchableOpacity>
      );
    } else {
      return false;
    }
  };
  render() {
    console.log(this.state.data);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}> To Do List</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {this.state.data.map((value, key) => {
            return (
              <View style={styles.boxApp} key={key}>
                <View style={{width: '5%', backgroundColor: '#0A9EBE'}} />
                <View style={styles.content}>
                  <Text>{value}</Text>
                </View>
                <View style={styles.delete}>
                  <Icon
                    name="trash-2"
                    size={25}
                    color="#FFFFFF"
                    onPress={() => this.deleteData(key)}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            marginTop: 5,
            width: '100%',
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            elevation: 5,
            marginTop: 5,
          }}>
          <View
            style={{
              width: '85%',
              borderWidth: 1.4,
              borderRadius: 4,
              borderColor: '#A3A3A3',
              margin: 8,
            }}>
            <TextInput
              placeholder="Tulis Kegiatan"
              backgroundColor="white"
              value={this.state.input}
              onChangeText={(text) => this.setState({input: text})}
            />
          </View>
          <View style={{width: '15%', justifyContent: 'center'}}>
            <Icon
              name="plus-square"
              color="#0A9EBE"
              size={30}
              backgroundColor="#00121a"
              onPress={() => this.addData()}
            />
          </View>
        </View>
        {this.saveButton()}
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginBottom: 5,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444444',
  },
  scroll: {
    flex: 1,
    // backgroundColor: 'red',
  },
  boxApp: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    elevation: 5,
    marginBottom: 5,
  },
  content: {
    height: 50,
    width: '80%',
    // backgroundColor: 'red',
    padding: 5,
  },
  delete: {
    height: 50,
    width: '15%',
    backgroundColor: '#A90101',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input2: {
    backgroundColor: '#00121a',
  },
  buttonSave: {
    height: 50,
    width: 50,
    backgroundColor: '#0A9EBE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    right: 30,
    zIndex: 100,
  },
});

