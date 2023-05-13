import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';

export default function Picture1({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#2c7ef4',
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity 
                style={{
                    width: 100,
                    height: 50,
                    borderRadius: 10,
                    marginTop: 50,
                    marginLeft: 300,
                }}
            onPress={() => navigation.navigate('Thông tin2')}>
                <Text style={{
                    color: 'white',
                }}>
                    Xem tiếp
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{
                    width: 100,
                    height: 50,
                    borderRadius: 10,
                    marginTop: 50,
                    marginLeft: 1,
                }}
            onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={{
                    color: 'white',
                }}>
                    Bỏ qua
                </Text>
            </TouchableOpacity>
            </View>
            <Image source={require('./2.png')} style={{
                width: 490,
                height: 950,
                resizeMode: 'contain',
            }}/>
        </View>
    );
}