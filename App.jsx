import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Centered_Logo from './src/screens/Centered_Logo';
import Language_Selection from './src/screens/Language_Selection';
import Permissions from './src/screens/Permissions';
import Phone_Number from './src/screens/Phone_Number';
import Not_Registered from './src/screens/Not_Registered';
import OTP_Verification from './src/screens/OTP_Verification';
import Registration from './src/screens/Registration';
import Land_Ownership from './src/screens/Land_Ownership';
import Land_Ownership_Details from './src/screens/Land_Ownership_Details';
import TabNavigator from './src/navigation/Bottomnavigationbar /TabNavigator';
import Tree_DetailsScreen from './src/navigation/Bottomnavigationbar /Tree_DetailsScreen';
import Journal from './src/navigation/Bottomnavigationbar /Journal';

import { storage, initRewardsIfNotExists } from './src/mmkv/storage';
import Tree_Details from './src/navigation/Bottomnavigationbar /Tree_Details';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    // storage.clearAll();
    initRewardsIfNotExists();
    const checkIntro = () => {
      const seen = storage.getString('hasSeenIntro');
      setInitialRoute(seen === 'true' ? 'MainTabs' : 'Centered_Logo');
    };
    checkIntro();
  }, []);

  if (!initialRoute) return null;

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{ headerShown: false }}
        >
          {/* Intro / Login Screens */}
          <Stack.Screen name="Centered_Logo" component={Centered_Logo} />
          <Stack.Screen
            name="Language_Selection"
            component={Language_Selection}
          />
          <Stack.Screen name="Permissions" component={Permissions} />
          <Stack.Screen name="Phone_Number" component={Phone_Number} />
          <Stack.Screen name="Not_Registered" component={Not_Registered} />
          <Stack.Screen name="OTP_Verification" component={OTP_Verification} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Land_Ownership" component={Land_Ownership} />
          <Stack.Screen
            name="Land_Ownership_Details"
            component={Land_Ownership_Details}
          />

          {/* Main App */}
          <Stack.Screen name="MainTabs" component={TabNavigator} />
          <Stack.Screen
            name="Tree_DetailsScreen"
            component={Tree_DetailsScreen}
          />
          <Stack.Screen name="Journal" component={Journal} />
          <Stack.Screen name="Tree_Details" component={Tree_Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
