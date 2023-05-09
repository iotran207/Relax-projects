import { Button, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg'

export default QRgen = () => {
  return(
    <View style={{
      flex: 1,
    }}>
      <View style={{
      }}>
        {/*thông tin học sinh*/}
        <View style={{
          marginTop: 30,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 140,
            marginTop: 20,
          }}>🆔 Tạo mã QR</Text>
        <View style={{
            marginTop: 70,
            height: 200,
            backgroundColor:'white',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <View style={{
            marginTop: 20,
            height: 200,
            backgroundColor:'white',
            marginLeft: -200,
        }}>
            <QRCode value={this.id} size={370} />
        </View>
        </View>
        </View>
      </View>
    </View>
  )

};
