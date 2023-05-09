import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import SettingScreen from "./../Setting/SettingScreen";
import ChatHomeScreen from "./../Chat/ChatHomeScreen";
import ScanQRscreen from "../Scan/ScanQR";
import RelaxHomeScreen from "./../Relax/RelaxHomeScreen"
import MenuScreen from "./MenuScreen";
import { ImageBackground, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={ ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Màn hình chính') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Cài đặt') {
                        iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                    } else if (route.name === 'Trợ lý Relax') {
                        iconName = focused ? 'ios-mic' : 'ios-mic-outline';
                    }
                    else if (route.name === 'Cuộc trò chuyện') {
                        iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
                    }
                    else if (route.name === 'Màn hình chính') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    }
                    else if (route.name === 'Quét mã QR') {
                        iconName = focused ? 'qr-code' : 'qr-code-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Màn hình chính" component={MenuScreen} />
            <Tab.Screen name="Quét mã QR" component={ScanQRscreen} />
            <Tab.Screen name="Trợ lý Relax" component={RelaxHomeScreen} />
            <Tab.Screen name="Cài đặt" component={SettingScreen} />
        </Tab.Navigator>
    );
}
