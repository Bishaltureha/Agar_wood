import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OTP_Verification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const navigation = useNavigation();

  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) inputs.current[index + 1].focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.topSection}>
          <Text style={styles.title}>Enter OTP</Text>
          <Text style={styles.subtitle}>
            Enter 6-digit OTP sent to your phone
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputs.current[index] = ref)}
                style={styles.otpBox}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (
                    nativeEvent.key === 'Backspace' &&
                    otp[index] === '' &&
                    index > 0
                  ) {
                    inputs.current[index - 1].focus();
                  }
                }}
              />
            ))}
          </View>

          <TouchableOpacity>
            <Text style={styles.resendText}>Resend code</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTP_Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flexShrink: 1,
  },
  innerContainer: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 22,
    fontWeight: '700',
    color: '#1B2821',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: '#4F5E5C',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  otpBox: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#1B2821',
  },
  resendText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 18,
    color: '#14AE5C',
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  verifyButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#14AE5C',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  verifyText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    fontWeight: '700',
  },
});
