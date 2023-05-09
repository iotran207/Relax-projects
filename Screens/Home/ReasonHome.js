import { SelectList } from 'react-native-dropdown-select-list'
import { Button, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';

export default Reason = () => {

  const [selected, setSelected] = React.useState('');
  const [note, setNote] = React.useState('');
  
  const data = [
      {key:'1', value:'chậm'},
      {key:'2', value:'bỏ giờ'},
      {key:'3', value:'đồng phục'},
      {key:'4', value:'phù hiệu'},
      {key:'5', value:'Đồng phục'},
      {key:'6', value:'điện thoại'},
      {key:'7', value:'khác'},
  ]

  return(
    <View style={{
      flex: 1,
    }}>
      <Button title="Gửi báo cáo" onPress={()=>axios.post(url="http://18.141.160.222/ReasonStudent", {
      "org": this.get_org,
      "id": this.get_id,
      "reason": selected, 
      "note": note
    })
    .then(function (response) {   
      alert("Gửi báo cáo thành công")
    })
    .catch(function (error) {
      alert(error)
    })}/>
      <View style={{
      }}>
        {/*thông tin học sinh*/}
        <View style={{
          marginTop: 20,
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
        }}>{this.get_name}</Text>
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
            {this.get_class}
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
            {this.get_org}
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
          }}>🎁Sinh ngày:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 45,
            marginTop: 20,
          }}>
            {this.get_birthday}
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
            {this.get_id}
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
          }}>💼 Thành phố:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 45,
            marginTop: 20,
          }}>
            {this.get_city}
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
          }}>📃Ghi chú:</Text>
          <TextInput 
            onChangeText={(val) => setNote(val)}
            style={{
            fontSize: 20,
            fontWeight: 'bold',
            margin:10,
            borderWidth: 0.5,
            borderColor: 'black',
          } 
          }></TextInput>
        </View>
        <View style={{
          marginTop: 10,
          height: 600,
          backgroundColor:'white',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 150,
            marginTop: 20,
            marginBottom: 20,
          }}>🧨Lý do vi phạm</Text>
          <SelectList
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
            label="Categories"/>
        </View>
      </View>
    </View>
  )

};
