// /src/screens/ThirdOwner.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThirdOwner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is 3rd Owner Screen</Text>
    </View>
  );
};

export default ThirdOwner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
