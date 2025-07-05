// /src/screens/SecondOwner.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondOwner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is 2nd Owner Screen</Text>
    </View>
  );
};

export default SecondOwner;

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
