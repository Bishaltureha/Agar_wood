import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  Platform,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Icon from '../../Assets/icon/Icon';

const Not_Registered = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('OTP_Verification');
  };
  const handleCloseApp = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      Alert.alert(
        'Notice',
        'Please close the app manually by swiping up from the home bar.',
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.alertText}>Alert</Text>
          <View style={styles.row}>
            <MaterialIcons
              name="error"
              size={16}
              color="#DD5F62"
              style={styles.icon}
            />
            <Text style={styles.messageText}>
              Phone number not registered. Please contact Support.
            </Text>
          </View>
        </View>

        <View style={styles.imageWrapper}>
          <Image
            source={require('../../Assets/Service.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.supportButton}
            onPress={handleGetStarted}
          >
            <View style={styles.buttonContent}>
              <Icon width={20} height={20} />
              <Text style={styles.supportButtonText}>Contact Support</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.closeAppButton}
          onPress={handleCloseApp}
        >
          <View style={styles.closeButtonContent}>
            <MaterialIcons
              name="close"
              size={20}
              color="#FAFEFC"
              style={styles.closeIcon}
            />
            <Text style={styles.closeAppButtonText}>Close App</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Not_Registered;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  alertText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B2821',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 6,
    marginTop: 2,
  },
  messageText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1B2821',
    flex: 1,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 210,
  },
  supportButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#14AE5C',
    borderRadius: 48,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  supportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  closeAppButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#DD5F62',
    borderRadius: 48,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  closeButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    marginRight: 8,
  },
  closeAppButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});
