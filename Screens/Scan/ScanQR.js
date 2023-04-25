import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';


export default function ScanQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loaded] = useFonts({
    Bungee: require('../../assets/fonts/Bungee-Regular.ttf'),
  });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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
                <Text style={styles.infomationText}>Họ và tên: Lê Trần Hoàng Lân</Text>
                <Text style={styles.infomationText}>Mã định danh: 123456789</Text>
                <Text style={styles.infomationText}>Ngày sinh: 01/01/2001</Text>
                <Text style={styles.infomationText}>Đơn vị:10 tin</Text>
                <Text style={styles.infomationText}>Trường THPT Chuyên Hà Tĩnh</Text>
                <Text style={styles.infomationText}>Tỉnh:Hà Tĩnh</Text>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection:'row',
          }}>
            <View>
              <TouchableOpacity style={{
                marginTop:30,
                marginLeft:55,
                height: 170,
                width: 170,
                backgroundColor:'#5d57ff',
                borderRadius:10,
              }}>
                <Text style={{
                  color:'white',
                  fontSize:20,
                  marginLeft:25,
                  fontFamily:'Bungee',
                  marginTop:65,
                }}>⌚MUỘN GIỜ</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                marginTop:30,
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
                }}>🤬 VI PHẠM</Text>
              </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={{
                marginTop:30,
                marginLeft:55,
                height: 170,
                width: 170,
                backgroundColor:'#EC2654',
                borderRadius:10,
              }}>
                <Text style={{
                  fontSize:20,
                  marginLeft:22,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:65,
                  color:'white',
                  fontFamily: 'Bungee',
                }}>✅ ĐIỂM DANH</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                fontFamily:'Bungee',
                marginTop:30,
                marginLeft:55,
                height: 170,
                width: 170,
                backgroundColor:'#EC2654',
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
