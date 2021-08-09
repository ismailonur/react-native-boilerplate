import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const Tab = createBottomTabNavigator();

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        // Bottom Tab Bar Özelleştirmesi
                        // tabBarStyle: {
                        //     position: 'absolute',
                        //     height: 70,
                        //     backgroundColor: '#242424',
                        //     // borderTopRightRadius: 50,
                        //     // borderTopLeftRadius: 50,
                        //     // borderTopWidth: 0
                        // }
                    }}
                >
                    <Tab.Screen name="ScreenOne" component={ScreenOne}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <Image
                                        source={CHATS}
                                        resizeMode="contain"
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: focused ? text : text2
                                        }}
                                    /> */}
                                    <Text style={{ top: 5, color: focused ? '#000' : '#3434ff', fontSize: 14 }}>
                                        ONE
                                    </Text>
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen name="ScreenTwo" component={ScreenTwo}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <Image
                                        source={DISCOVERPNG}
                                        resizeMode="contain"
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: focused ? text : text2
                                        }}
                                    /> */}
                                    <Text style={{ top: 5, color: focused ? '#000' : '#3434ff', fontSize: 14 }}>
                                        TWO
                                    </Text>
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen name="ScreenThree" component={ScreenThree}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <Image
                                        source={DISCOVERPNG}
                                        resizeMode="contain"
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: focused ? text : text2
                                        }}
                                    /> */}
                                    <Text style={{ top: 5, color: focused ? '#000' : '#3434ff', fontSize: 14 }}>
                                        THREE
                                    </Text>
                                </View>
                            )
                        }}
                    />
                </Tab.Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export { Home }