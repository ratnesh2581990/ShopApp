import React from 'react';
import { View , Text, Button } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { Ionicon } from "react-native-vector-icons/Ionicons";

import { Main } from './Main';
import { Setting } from './Setting';

const SettingScreen = new createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions : ({navigation}) =>{
            return {
                headerLeft: (
                    <View style={{ padding: 10 }} >
                        <Button title='menu' onPress={() => navigation.openDrawer()} />
                    </View>
                )
            }
        }
    },
});
const MainScreen = new createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions : ({navigation}) =>{
            return {
                headerLeft: (
                    <View style={{ padding: 10 }} >
                        <Button title='menu' onPress={() => navigation.openDrawer()} />
                    </View>
                )
            }
        }
    },
});
export { SettingScreen, MainScreen };