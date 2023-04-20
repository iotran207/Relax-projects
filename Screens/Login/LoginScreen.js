import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/HomeScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    axios.post('https://relax-project.cloud/checkuser', {
        id:608890,
        name:email,
        password: password
    })
    .then(function (response) {
        console.log(response.data);
        navigation.navigate('HomeScreen');
    })
    .catch(function (error) {
        console.log(error);
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
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
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
        options={{headerLeft:null}}/>
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
    marginBottom: 40
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
    color: 'white'
  }
});
