import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState } from 'react';

export default function SettingScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  function handleLogout() {
    try {
      alert("Đăng xuất thành công! (￣▽￣)ノ");
      navigation.navigate('LoginScreen');
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View>
      <Button title="Nhấn đây để đăng xuất" onPress={() => handleLogout()} />
      <View style={{
        backgroundColor: 'white',
        height: 150,
        borderBottomRightRadius: 20,
        marginRight: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
      }}>
        <Image source={require('./logo-full.png')}></Image>
      </View>
      <View>
        <Text style={{
          fontSize: 20,
          marginTop: 30,
          color: 'gray',
        }}>
          CÀI ĐẶT
        </Text>
        <TouchableOpacity 
        style={{
          height: 50,
          backgroundColor: 'white',
          marginTop: 10,
          borderWidth:1,
        }}>
            <Text 
              onPress={() => handleLogout()}
              style={{
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>Nhấn đây để xin quyền thông báo                                           >>></Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{
          height: 50,
          backgroundColor: 'white',
          marginTop: 10,
          borderWidth:1,
        }}>
            <Text 
              onPress={() => useEffect()}
              style={{
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>Nhấn đây để xin quyền truy cập camera                                >>></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
