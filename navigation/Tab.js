import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import SettingScreen from "./../Screens/Setting/SettingScreen";
import HomeScreen from "./../Screens/Home/HomeScreen";
import ChatHomeScreen from "./../Screens/Chat/ChatHomeScreen"
import RelaxHomeScreen from "./../Screens/Relax/RelaxHomeScreen"
import LoginScreen from "./../Screens/Login/LoginScreen";

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
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
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Màn hình chính" component={HomeScreen} />
            <Tab.Screen name="Cuộc trò chuyện" component={ChatHomeScreen} />
            <Tab.Screen name="Trợ lý Relax" component={RelaxHomeScreen} />
            <Tab.Screen name="Cài đặt" component={SettingScreen} />
            <Tab.Screen name="Đăng nhập" component={LoginScreen} />
        </Tab.Navigator>
    );
}
