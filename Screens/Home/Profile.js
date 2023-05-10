import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { TEST_ID } from "react-native-gifted-chat";
import { ImageBackground } from "react-native";

export default function Profile({ navigation }) {
    return(
        <ImageBackground source={require('./theme.png')} style={{
            height:"100%"
        }}>
        <View>
            <View style={{
                width: 450,
                height: 180,
                backgroundColor:'#8080ff',
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                <ImageBackground source={require('./background.png')} style={{
                    width: 450,
                    height: 180,
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                    <Image source={require('./avatar.png')} style={{
                        width: 130,
                        height: 140,
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 20,
                    }}></Image>
                    <View style={{
                        marginLeft: 20,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            marginTop: 30,
                            fontFamily: 'Bungee',
                        }}>Họ và tên: {this.get_name}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            marginTop: -5,
                            fontFamily: 'Bungee',
                        }}>Lớp: {this.get_id}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            marginTop: -5,
                            fontFamily: 'Bungee',
                        }}>Đơn vị: {this.get_org}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            marginTop: -5,
                            fontFamily: 'Bungee',
                        }}>Thành phố: {this.get_org}</Text>
                    </View>
                    </View>
                    </ImageBackground> 
                </View>
            </View>
            <View>
                <View style={{
                    flexDirection: 'row',

                }}>
                    <TouchableOpacity style={{
                        width: 170,
                        height: 170,
                        backgroundColor: 'white',
                        marginLeft:40,
                        marginTop:50,
                        borderRadius: 20,
                        backgroundColor:'#5d57ff',
                    }}
                    onPress={() => {if(this.get_role.includes("driver")){
                        navigation.navigate('Đi xe bus')
                    }
                                    else{
                                        alert("Bạn không có quyền truy cập mục này")
                                    }}}
                    ><Text style={{
                        fontSize: 30,
                        color: 'white',
                        marginTop: 50,
                        marginLeft: 20,
                        fontFamily: 'Bungee',
                    }}>🚌 Đi xe</Text></TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 170,
                        height: 170,
                        marginLeft:80,
                        marginTop:50,
                        backgroundColor: 'white',
                        borderRadius: 20,
                        backgroundColor:'#ECA0D0',
                    }}
                    onPress={() => navigation.navigate('Thông tin')}
                    ><Text style={{
                        fontSize: 25,
                        color: 'white',
                        marginTop: 60,
                        marginLeft: 10,
                        fontFamily: 'Bungee',
                    }}> 👑 Chi tiết</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                        width: 170,
                        height: 170,
                        backgroundColor:'#FFB94F',
                        marginLeft:40,
                        marginTop:50,
                        backgroundColor: 'red',
                        borderRadius: 20,
                    }}
                        onPress={() => {
                            if(this.get_role.includes("admin")){
                                navigation.navigate('Báo cáo vi phạm')
                            }
                            else{
                                alert("Bạn không có quyền truy cập mục này")
                            }}}
                    ><Text style={{
                        fontSize: 25,
                        color: 'white',
                        marginTop: 60,
                        marginLeft: 15,
                        fontFamily: 'Bungee',
                    }}>⚡ Vi phạm</Text></TouchableOpacity>
                
            </View>
        </View>
        </ImageBackground>
    )
}