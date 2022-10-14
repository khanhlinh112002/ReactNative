/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Direction from './components/Direction';
import JustifyContent from './components/justifyContent';
import Position from './components/Position';






const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="direction" component={Direction} />
      <Tab.Screen name="position" component={Position} />
      <Tab.Screen name="justContent" component={JustifyContent} />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
