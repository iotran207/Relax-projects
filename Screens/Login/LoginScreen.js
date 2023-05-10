import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import ScanQR from '../Scan/ScanQR';
import ReasonScreen from '../Scan/Reason';
import InfoScreen from '../Scan/InfoScreen';
import * as Font from 'expo-font';
import BusScreen from '../Scan/BusScreen';
import ProfileScreen from '../Setting/Profile';
import Profile from '../Home/Profile';
import BusHome from '../Home/BusHome';
import ProfileHome from '../Home/ProfileHome';
import Reason from '../Home/ReasonHome';
import QRgen from '../Home/QRgen';
import InfoScreenHome from '../Home/InfoScreen';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const[fontLoaded, setFontLoaded] = React.useState(false);

  const handleLogin = () => {
    axios.post("http://18.141.160.222/Login", {
        id:email,
        password: password
    },)
    .then(function (response) {
         if(response.data.status == 'success'){
        user_id = response.data.message.id;
        user_name = response.data.message.name;
        user_birthday = response.data.message.birthday;
        user_role = response.data.message.role;
        user_org = response.data.message.org;
        user_class = response.data.message.class;
        user_city = response.data.message.city;
        user_car = response.data.message.car;
        user_price = response.data.message.price;
        user_phone = response.data.message.phone;
        alert("Đăng nhập thành công! ╰(*°▽°*)╯");
        console.log(user_id)
          navigation.navigate('HomeScreen');
        }
        else{
          alert("Đừng cố hack hệ thống!Vui lòng nhập cho đúng tên và mật khẩu trước đã 🤨🤨🤨");
        }
    })
    .catch(function (error) {
        console.log(email,password)
        console.log(error);
        alert(error)
    });
  }

  React.useEffect(() => {
    Font.loadAsync({
      "Bungee": require("./../../assets/fonts/Bungee-Regular.ttf"),
    })
    .then(() => {
     setFontLoaded(true)
    }) 
  }, [])

  if (!fontLoaded) return null
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#088395',
    }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image source={require('./Logo.png')} style={styles.logoImage} />
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Tên Đăng Nhập..." 
            placeholderTextColor="#18587A"
            onChangeText={text => setEmail( text)}/>
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
      <Stack.Navigator initialRouteName="Đăng nhập">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen"
        component={HomeScreen} 
        options={{headerLeft:null,headerShown:false}}/>
        <Stack.Screen name="Vi phạm"
        component={ReasonScreen}
        />
        <Stack.Screen name="ScanScreen"
        component={ScanQR}
        options={{headerLeft:null,headerShown:false}}/>
        <Stack.Screen name="Thông tin chi tiết"
        component={InfoScreen}/>
        <Stack.Screen name="Xe bus"
        component={BusScreen}/>
        <Stack.Screen name="ProfileScreen"
        component={ProfileScreen}/>
        <Stack.Screen name="Tìm kiếm người dùng"
        component={Profile}/>
        <Stack.Screen name="Đi xe bus"
        component={BusHome}/>
        <Stack.Screen name="Thông tin"
        component={ProfileHome}/>
        <Stack.Screen name="Báo cáo vi phạm"
        component={Reason}/>
        <Stack.Screen name="Tạo mã QR"
        component={QRgen}/>
        <Stack.Screen name="Thông tin của tôi"
        component={InfoScreenHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
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
