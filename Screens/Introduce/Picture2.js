import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';

export default function Picture1({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fed487',
        }}>
            <TouchableOpacity 
                style={{
                    width: 100,
                    height: 50,
                    borderRadius: 10,
                    marginTop: 50,
                    marginLeft: 400,
                }}
            onPress={() => navigation.navigate('Thông tin3')}>
                <Text style={{
                    underline: true,
                    color: 'white',
                }}>
                    Xem tiếp
                </Text>
            </TouchableOpacity>
            <Image source={require('./3.png')} style={{
                width: 490,
                height: 950,
                resizeMode: 'contain',
            }}/>
        </View>
    );
}