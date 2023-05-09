import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import axios from 'axios';
import React from 'react';
import { ImageBackground } from 'react-native';

export default function SettingScreen({navigation}) {
  const [searchID, setSearchID] = React.useState('');
  function onPressOne(){
    if(searchID == ''){
      alert("Bạn cần nhập id người dùng cần tìm kiếm")
    }
    else{
      axios.post("http://18.141.160.222/GetUserFromID",{
        id: searchID,
      })
      .then(function (response) {
        if(response.data.status == 'success'){
          get_id = response.data.message.id;
          get_name = response.data.message.name;
          get_birthday = response.data.message.birthday;
          get_role = response.data.message.role;
          get_org = response.data.message.org;
          get_class = response.data.message.class;
          get_city = response.data.message.city;
          get_car = response.data.message.car;
          get_price = response.data.message.price;
          get_phone = response.data.message.phone;
        }
        else{
          alert("Không tìm thấy người dùng này")
        }
      })
      .catch(function (error) {
        alert(error)
        console.log(error);
      });
      navigation.navigate('Tìm kiếm người dùng');
    }
  }
  return (
    <ImageBackground source={require('./theme.png')} style={{
      height:"100%"
    }}>
    <View>
      <View style={{
        flexDirection: 'row',
      }}>
      <TextInput style={{
        width: 380,
        height: 50,
        backgroundColor:'#F1F1F2',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 20,
      }}
        onChangeText={text => setSearchID(text)}
        placeholder='Tra cứu mã số định danh học sinh'></TextInput>
      <TouchableOpacity style={{
        width: 50,
        height: 50,
        backgroundColor:'#F1F1F2',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 20,
      }}
      onPress={onPressOne}
      ><Text style={{
        fontSize: 30,
        marginLeft: -10,
        marginTop: 5,
      }}>🔍</Text></TouchableOpacity>
      </View>
      <View>
        <View style={{
          marginTop: 40,
          width: 450,
          height: 110,
          borderRadius: 10,
          marginLeft: 20,
          backgroundColor:'#0A4D68',
        }}>
          <Text style={{
            fontSize: 16,
            marginLeft: 20,
            marginTop: 1,
            marginLeft: 140,
            margin:1,
            color: 'white',
            fontFamily: 'Bungee',
          }}>Mỗi ngày 1 câu câu nói</Text>
          <Text style={{
            color: 'white',
            fontSize: 16,
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 1,
            marginLeft: 20,
          }}>Cuộc sống đầy ắp những việc không như ý, chúng ta chẳng thể nào né tránh.</Text>
          <Text style={{
            color: 'white',
            fontSize: 16,
            justifyContent: 'center',
            alignContent: 'center',
            marginLeft: 18,
          }}> Điều duy nhất có thể làm là thay đổi góc nhìn về nó. 😉😉😉</Text>
        </View>
        <View style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{
          marginTop: 90,
          width: 170,
          height: 170,
          backgroundColor:'#088395',
          borderRadius: 10,
          marginLeft: 20,
        }}
          onPress={() => {
            alert('Chức năng đang được phát triển')
          }}
        >
        <Text style={{
          fontSize: 20,
          marginLeft: 20,
          marginTop: 60,
          fontFamily: 'Bungee',
          color: 'white',
        }}>😎 Nhận diện khuôn mặt</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{
          marginTop: 90,
          width: 170,
          height: 170,
          backgroundColor:'#FFD95A',
          borderRadius: 10,
          marginLeft: 80,
        }}
          onPress={() => {
            navigation.navigate("Thông tin của tôi")
          }}
        >
        <Text style={{
          fontSize: 20,
          marginLeft: 20,
          marginTop: 60,
          fontFamily: 'Bungee',
          color: 'white',
        }}>🙉 Thông tin cá nhân</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={{
          marginTop: 50,
          width: 170,
          height: 170,
          backgroundColor:'#917FB3',
          borderRadius: 10,
          marginLeft: 20,
        }}
          onPress={() => {
            if(searchID==''){
              alert("Bạn chưa nhập mã số định danh")
            }
            else{
              navigation.navigate("Tạo mã QR", {id: searchID})
            }
          }}
        >
        <Text style={{
          fontSize: 20,
          marginLeft: 25,
          marginTop: 70,
          fontFamily: 'Bungee',
          color: 'white',
        }}>💡 Tạo mã qr</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

