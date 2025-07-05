import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Phone_Number = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Not_Registered');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Enter Phone Number</Text>
        <Text style={styles.subtitle}>Enter 10-digit mobile number</Text>

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={10}
          placeholder="000 000 0000"
          placeholderTextColor="#A0A0A0"
        />

        <View style={styles.spacer} />

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Phone_Number;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'left',
    color: '#1B2821',
    paddingTop: 20,
    paddingLeft: 20,
  },
  subtitle: {
    paddingTop: 40,
    marginTop: 4,
    fontFamily: 'PlusJakartaSans-Medium',
    fontWeight: '500',
    fontSize: 17,
    color: '#666E6A',
    textAlign: 'left',
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    height: 60,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: '#22C55E',
    marginTop: 24,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#1B2821',
    alignSelf: 'center',
  },
  spacer: {
    flex: 1,
  },
  button: {
    width: '90%',
    height: 50,
    paddingTop: 14.5,
    paddingBottom: 14.5,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 48,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'PublicSans-Bold',
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
  },
});
