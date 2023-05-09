import { Button, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg'
import InfoScreen from '../Scan/InfoScreen';

export default InfoScreenHome = () => {

  const [selected, setSelected] = React.useState('');
  const [note, setNote] = React.useState('');

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
          marginLeft: 10,
          marginTop: 20,
        }}>👀 Họ và tên:</Text>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 40,
          marginTop: 20,
        }}>{this.user_name}</Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>📚 Lớp:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 80,
            marginTop: 20,
          }}>
            {this.user_class}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>⚖ Tổ chức:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 60,
            marginTop: 20,
          }}>
            {this.user_org}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>📖ID định danh:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 30,
            marginTop: 20,
          }}>
            {this.user_id}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>🎂 Sinh ngày:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 50,
            marginTop: 20,
          }}>
            {this.user_birthday}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>🎫Quyền hạn:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 50,
            marginTop: 20,
          }}>
            {this.user_role}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>🏙 Thành phố :</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 40,
            marginTop: 20,
          }}>
            {this.user_city}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 430,
          backgroundColor:'white',
          flexDirection: 'column',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 140,
            marginTop: 20,
          }}>🆔 Mã định dạng cá nhân</Text>
        <View style={{
            marginTop: 70,
            height: 200,
            backgroundColor:'white',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <QRCode value={this.user_id.toString()} size={200} />
        </View>
        </View>
      </View>
    </View>
  )

};
