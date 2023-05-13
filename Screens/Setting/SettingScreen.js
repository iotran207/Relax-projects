import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState } from 'react';
import { Image } from 'react-native';

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
        <View style={{
          flexDirection: 'row',
        }}>
        <Image source={require('./avatar.png')} style={{
          width: 100,
          height: 100,
          marginTop: 20,
          marginLeft: 20,
          borderRadius: 20,
        }}></Image>
        <View style={{
          marginTop: 25,
          marginLeft: 20,
        }}>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 5,
          }}>Họ và tên: {this.user_name}</Text>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 5,
          }}>Mã định danh cá nhân: {this.user_id}</Text>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 5,
          }}>Lớp: {this.user_class}</Text>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 5,
          }}>Tổ Chức: {this.user_org}</Text>
        </View>
        </View>
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
              onPress={() => navigation.navigate('Thông tin cá nhân của tôi')}
              style={{
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>Nhấn đây để xem thông tin cá nhân chi tiết                         >>></Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{
          height: 50,
          backgroundColor: 'white',
          marginTop: 10,
          borderWidth:1,
        }}>
            <Text 
              onPress={() => navigation.navigate('Đổi mật khẩu')}
              style={{
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>Nhấn đây để đổi mật khẩu                                                        >>></Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
