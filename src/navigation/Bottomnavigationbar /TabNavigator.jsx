import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './Home';
import My_Rewards from './My_Rewards';
import Support from './Support';
import Tree_Details from './Tree_Details';

import Homeblack from '../../../Assets/tab/Homeblack';
import Homegreen from '../../../Assets/tab/Homegreen';
import My_Rewardsblack from '../../../Assets/tab/My_Rewardsblack';
import My_Rewardsgreen from '../../../Assets/tab/My_Rewardsgreen';
import My_Treesblack from '../../../Assets/tab/My_Treesblack';
import My_Treesgreen from '../../../Assets/tab/My_Treesgreen';
import Supportblack from '../../../Assets/tab/Supportblack';
import Supportgreen from '../../../Assets/tab/Supportgreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#22C55E',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            height: 60,
            paddingBottom: 6,
            paddingTop: 6,
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home')
              return focused ? <Homegreen /> : <Homeblack />;
            if (route.name === 'My Trees')
              return focused ? <My_Treesgreen /> : <My_Treesblack />;
            if (route.name === 'My Rewards')
              return focused ? <My_Rewardsgreen /> : <My_Rewardsblack />;
            if (route.name === 'Support')
              return focused ? <Supportgreen /> : <Supportblack />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="My Trees" component={Tree_Details} />
        <Tab.Screen name="My Rewards" component={My_Rewards} />
        <Tab.Screen name="Support" component={Support} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
