import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Permissions = () => {
  const navigation = useNavigation();

  const handleEnablePermissions = () => {
    navigation.navigate('Phone_Number');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Pushnotifications.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Let's Get You Set Up</Text>

      <Text style={styles.description}>
        To give you the best experience, we need {'\n'}
        access to your device’s GPS, Wi-Fi, Bluetooth, {'\n'}
        Storage, and Camera. You can manage these {'\n'}
        anytime in your settings.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleEnablePermissions}>
        <Text style={styles.buttonText}>Enable Permissions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Permissions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '50%',
    height: 200,
    marginBottom: 32,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: -0.68,
    textAlign: 'center',
    color: '#1B2821',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.32,
    textAlign: 'center',
    color: '#666E6A',
    marginBottom: 32,
  },
  button: {
    width: '90%',
    height: 50,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 48,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PublicSans-Bold',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 23,
    color: '#fff',
    textAlign: 'center',
  },
});
