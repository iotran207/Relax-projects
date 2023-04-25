import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loaded] = useFonts({
    Bungee: require('../../assets/fonts/Bungee-Regular.ttf'),
  });

  const handleLogin = () => {

    axios.post('https://relax-project.cloud/GetUser', {
        id:email,
        password: password
    })
    .then(function (response) {
        {/*if(response.data.status == 'success'){*/}
        const iduser = String(response.data.id);
        storeData(iduser,email,password);
        alert("Đăng nhập thành công! ╰(*°▽°*)╯");
        navigation.navigate('HomeScreen');
        {/*}
        else{
          alert("Đừng cố hack hệ thống!Vui lòng nhập cho đúng tên và mật khẩu trước đã 🤨🤨🤨");
        }
        */}
    })
    .catch(function (error) {
        console.log(error);
        alert(error)
    });
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#0086b3',
    }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image source={require('./Logo.png')} style={styles.logoImage} />
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Tên Đăng Nhập..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Mật Khẩu" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen"
        component={HomeScreen} 
        options={{headerLeft:null,headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

async function storeData(id,name,password) {
  try {
    AsyncStorage.setItem('id',id)
    AsyncStorage.setItem('name',name)
    AsyncStorage.setItem('password',password)
  } catch (e) {
    print(e)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
  },
  logoImage: {
    width: 400,
    height: 400,
    marginBottom: 17,
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
    fontFamily: 'Bungee'
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    fontFamily: 'Bungee',
    height: 50,
    color: 'black'
  },
  forgot: {
    color: '#000000',
    fontSize: 11
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    fontFamily: 'Bungee',
    color: 'white'
  }
});
