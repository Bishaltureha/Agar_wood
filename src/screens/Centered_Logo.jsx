import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import AnimatedCarousel from '../components/AnimatedCarousel';
import { useNavigation } from '@react-navigation/native';
import { hasSeenIntro, markIntroSeen } from '../mmkv/storage';

const { width } = Dimensions.get('window');

const Centered_Logo = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (hasSeenIntro()) {
      navigation.replace('Language_Selection');
    }
  }, []);

  const handleGetStarted = () => {
    markIntroSeen();
    navigation.navigate('Language_Selection');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../Assets/Frame36.png')}
          style={styles.logo}
        />

        <AnimatedCarousel />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Centered_Logo;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: '90%',
    height: (width * 0.9 * 63) / 353,
    resizeMode: 'contain',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '90%',
    height: 50,
    paddingTop: 14.5,
    paddingBottom: 14.5,
    paddingHorizontal: 16,
    borderRadius: 48,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PublicSans-Bold',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
    color: '#ffffff',
  },
});
