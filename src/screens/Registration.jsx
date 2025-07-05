import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainOwner from '../navigation/TopNavigationbar/MainOwner';
import SecondOwner from '../navigation/TopNavigationbar/SecondOwner';
import ThirdOwner from '../navigation/TopNavigationbar/ThirdOwner';

const Tab = createMaterialTopTabNavigator();

const Registration = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Register your Profile</Text>
      </View>
      <MainOwner />
      {/* <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'PlusJakartaSans-Medium',
            lineHeight: 16,
            letterSpacing: -0.32,
            textTransform: 'none',
            color: '#1B2821',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#14AE5C',
            height: 3,
            borderRadius: 2,
            top: 0, // ✅ move indicator to top of the tab bar
            position: 'absolute', // ✅ necessary to override default
          },
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderColor: '#E0E0E0',
          },
          tabBarActiveTintColor: '#1B2821',
          tabBarInactiveTintColor: '#A5A5A5',
        }}
      >
        <Tab.Screen name="Main Owner" component={MainOwner} />
        <Tab.Screen name="2nd Owner" component={SecondOwner} />
        <Tab.Screen name="3rd Owner" component={ThirdOwner} />
      </Tab.Navigator> */}
    </SafeAreaView>
  );
};

export default Registration;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 22,
    fontWeight: '700',
    color: '#1B2821',
    lineHeight: 22,
    letterSpacing: 0,
  },
});
