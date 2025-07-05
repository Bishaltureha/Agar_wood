// /src/navigation/TopTabsNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainOwner from './MainOwner';
import SecondOwner from './SecondOwner';
import ThirdOwner from './ThirdOwner';

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#eee' },
        tabBarIndicatorStyle: { backgroundColor: '#000' },
      }}
    >
      <Tab.Screen name="Main Owner" component={MainOwner} />
      <Tab.Screen name="2nd Owner" component={SecondOwner} />
      <Tab.Screen name="3rd Owner" component={ThirdOwner} />
    </Tab.Navigator>
  );
};

export default TopTabsNavigator;
