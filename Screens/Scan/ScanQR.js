import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';

export default function ScanQR({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loaded] = useFonts({
    Bungee: require('../../assets/fonts/Bungee-Regular.ttf'),
  });
  
  function OnClickOne(){
    if(data_role.includes("admin")){
      navigation.navigate('Vi phạm')
    }
    else{
      alert("Bạn không có quyền truy cập mục này")
    }
  }
  function OnClickTwo(){
    navigation.navigate('Thông tin chi tiết')
  }

  function OnClickThree(){
    if(this.data_role.includes("driver")){
      navigation.navigate('Xe bus')
    }
    else{
      alert("Bạn không phải là tài xế xe bus")
    }
  }
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    axios.post(url="http://18.141.160.222/GetUserFromID", {
      "id": data
    })
    .then(function (response) {
      data_id=response.data.message.id;
      data_name=response.data.message.name;
      data_birthday=response.data.message.birthday;
      data_role=response.data.message.role;
      data_org=response.data.message.org;
      data_class=response.data.message.class;
      data_city=response.data.message.city;
      data_phone=response.data.message.phone;
      alert("Cập nhật thông tin người dùng thành công")
    })
    .catch(function (error) {
      alert(error)
    });
  };

  if (hasPermission === null) {
    return <Text>Yêu cầu truy cập camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Không có quyền truy cập camera</Text>;
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./theme.png')} style={styles.image}>
      {scanned ? (
        <>
          <Button style={{
            fontFamily: 'Bungee',
            color:'red',
          }} title={'Chạm đây để quét lại mã định danh'} onPress={() => setScanned(false)} />
          <View style={{
            margin:20,
            borderRadius:20,
            width:450,
            height:200,
          }}>
            <Image source={require('./background.png')} style={{
              top:10,
              position: 'absolute',
              width:450,
              height:200,
              borderRadius:10,
            }}></Image>
            <View>

              <View>
                <Image source={require('./avatar.png')} style={{
                  position: 'absolute',
                  width:140,
                  height:180,
                  borderRadius:10,
                  top:20,
                  left:12,


                }}></Image>
              </View>
              <View>
                <Text></Text>
                <View>
                <Text style={styles.infomationText}>Họ và tên: {this.data_name}</Text>
                </View>
                <Text style={styles.infomationText}>Mã định danh: {this.data_id}</Text>
                <Text style={styles.infomationText}>Ngày sinh: {this.data_birthday}</Text>
                <Text style={styles.infomationText}>Đơn vị: {this.data_class}</Text>
                <Text style={styles.infomationText}>Trường: {this.data_org}</Text>
                <Text style={styles.infomationText}>Tỉnh: {this.data_city}</Text>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection:'row',
          }}>
            <View>
              <TouchableOpacity style={{
                marginTop:60,
                marginLeft:55,
                height: 170,
                width: 170,
                backgroundColor:'#5d57ff',
                borderRadius:10,
              }}>
                <Text 
                  onPress={OnClickThree}
                style={{
                  color:'white',
                  fontSize:23,
                  marginLeft:25,
                  fontFamily:'Bungee',
                  marginTop:65,
                }}>🚌 Đi xe</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                marginTop:70,
                marginLeft:55,
                height: 170,
                width: 170,
                backgroundColor:'#ECA0D0',
                borderRadius:10,
              }}>
                <Text style={{
                  fontSize:20,
                  marginLeft:30,
                  fontFamily: 'Bungee',
                  marginTop:70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:65,
                  color:'white',
                }}
                onPress={OnClickOne}
                >🤬 VI PHẠM</Text>
              </TouchableOpacity>
            </View>

            <View>

              <TouchableOpacity 
               onPress={OnClickTwo}
                style={{
                fontFamily:'Bungee',
                marginTop:60,
                marginLeft:55,
                height: 170,
                width: 170,
                backgroundColor:'#FFB94F',
                borderRadius:10,
              }}>
                <Text style={{
                  fontFamily: 'Bungee',
                  fontSize:20,
                  marginLeft:30,
                  marginTop:70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:65,
                  marginTop:70,
                  color:'white',
                }}>🤯 Chi tiết</Text>
              </TouchableOpacity>

          </View>
          </View>

        </>
      ) : (
        <View style={styles.cameraContainer}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={styles.cameraView}
          />
        </View>
      )}
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  infomationText:{
    marginLeft:190,
    fontSize:13,
    marginTop:1,
    color:'white',
    fontFamily: 'Bungee',
  },
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraView: {
    width: 1000,
    height: 1000,
  },
  log: {
    marginTop: 20,
    padding: 10,
    maxHeight: 200,
    overflow: 'scroll',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
