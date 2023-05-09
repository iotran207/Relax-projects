import React  from "react";
import { Button } from "react-native";
import {Text,View} from "react-native";
import QRCode from 'react-native-qrcode-svg'
import axios from 'axios';

export default function BusHome(){
    return(
        <View style={{
            backgroundColor: 'gray',
            flex: 1,
        }}>
            <Button title="Nhấn đây để xác nhận đặt vé" onPress={()=>{
                axios.post('http://18.141.160.222/CheckBus',{
                    org: this.get_org,
                    get_id: this.get_id,
                    bus_id:this.get_id,
                })
                .then(res=>{
                    alert("Đặt vé thành công")
                })
                .catch(err=>{
                    alert("Đặt vé thất bại")
                })
            }}></Button>
            <View style={{
                height: 800,
                backgroundColor:'white',
                marginTop: 70,
                marginLeft: 40,
                marginRight: 40,
                borderRadius:15,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 100,
                    marginTop: 20,
                }}>Thông tin phương tiện</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 20,
                    marginTop: 20,
                }}>Tài xế : {this.get_name}</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 20,
                    marginTop: 10,
                }}>Mã số xe : {this.get_car}</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 20,
                    marginTop:10,
                }}>Số điện thoại: {this.get_phone}</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 40,
                    marginTop: 10,
                }}>--------------------------------------------------</Text>
            <View style={{
                left: -20,
                top: -30,
                height: 40,
                width: 40,
                borderRadius: 30,
                backgroundColor: 'gray',
            }}></View>
            <View style={{
                right: -385,
                top: -70,
                height: 40,
                width: 40,
                borderRadius: 30,
                backgroundColor: 'gray',
            }}></View>
            <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 100,
                    top: -60,
                }}>Thông tin người dùng</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                top:-50,
            }}>Mã định danh: {this.get_id}</Text>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                top:-40,
            }}>Họ và tên: {this.get_name}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                top:-30,
            }}>Lớp: {this.get_class}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                top:-20,
            }}>Tổ chức: {this.get_org}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                top:-10,
            }}>Thành phố: {this.get_city}</Text>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                top:0,
            }}>Giá niêm yết: {this.get_price} VNĐ</Text>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 40,
                top:50,
            }}>--------------------------------------------------</Text>
            
            <View style={{
                left: -20,
                top: 20,
                height: 40,
                width: 40,
                borderRadius: 30,
                backgroundColor: 'gray',
            }}></View>

            <View style={{
                right: -385,
                top: -20,
                height: 40,
                width: 40,
                borderRadius: 30,
                backgroundColor: 'gray',
            }}></View>
            <View style={{
                marginLeft: 100,
            }}>
                <QRCode value={this.get_id.toString()} size={200} />
            </View>
            </View>
        </View>
    )
}