import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import GPSIcon from '../../Assets/icon/GPSIcon';
import { addLand } from '../mmkv/storage';

const Land_Ownership_Details = () => {
  const navigation = useNavigation();
  const [landName, setLandName] = useState('');
  const [treeCount, setTreeCount] = useState('');
  const [gpsLocation, setGpsLocation] = useState('');
  const [ownershipFiles, setOwnershipFiles] = useState('Select multiple files');
  const [revenueFiles, setRevenueFiles] = useState('Select multiple files');

  const pickFiles = setter => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 0 }, response => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets?.length > 0) {
        const names = response.assets.map(file => file.fileName).join(', ');
        setter(names);
      }
    });
  };

  const handleSubmit = () => {
    if (!landName || !gpsLocation) {
      Alert.alert('Please fill required fields');
      return;
    }

    const newLand = {
      name: landName,
      gps: gpsLocation,
      treeCount,
      ownershipFiles,
      revenueFiles,
      timestamp: Date.now(),
    };

    addLand(newLand);
    navigation.goBack();
  };

  const requestLocation = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Location permission is required.');
          return;
        }
      }

      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const coords = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setGpsLocation(coords); // ✅ Auto-fill the TextInput here
        },
        error => {
          Alert.alert('Error', error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    } catch (err) {
      Alert.alert('Error', 'Unable to fetch location.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#1B2821" />
          </TouchableOpacity>
          <Text style={styles.heading}>Add Land Ownership Documents</Text>
        </View>

        <Text style={styles.label}>Land name / Area</Text>
        <TextInput
          style={styles.input}
          placeholder="First name"
          placeholderTextColor="#666E6A"
          value={landName}
          onChangeText={setLandName}
        />

        <Text style={styles.docLabel}>Land Ownership Document</Text>
        <View style={styles.row}>
          <View style={styles.fileContainer}>
            <Text style={styles.fileText} numberOfLines={1}>
              {ownershipFiles}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => pickFiles(setOwnershipFiles)}
          >
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.docLabel}>Land Revenue Map</Text>
        <View style={styles.row}>
          <View style={styles.fileContainer}>
            <Text style={styles.fileText} numberOfLines={1}>
              {revenueFiles}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => pickFiles(setRevenueFiles)}
          >
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Number of Trees</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter tree count"
          placeholderTextColor="#666E6A"
          value={treeCount}
          onChangeText={setTreeCount}
          keyboardType="numeric"
        />

        <Text style={styles.label}>GPS Location</Text>
        <TextInput
          style={styles.input}
          placeholder="GPS location"
          placeholderTextColor="#666E6A"
          value={gpsLocation}
          onChangeText={setGpsLocation}
        />

        <View style={styles.gpsButtonWrapper}>
          <TouchableOpacity style={styles.gpsButton} onPress={requestLocation}>
            <View style={styles.gpsRow}>
              <GPSIcon />
              <Text style={styles.gpsText}>Add GPS location</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.submitWrapper}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Land_Ownership_Details;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { padding: 20 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 40,
    padding: 10,
    backgroundColor: '#EBF8F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: { fontSize: 22, fontWeight: '500', color: '#1B2821', flexShrink: 1 },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1B2821',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 49,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    fontSize: 17,
    color: '#666E6A',
  },
  docLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1B2821',
    marginTop: 20,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 },
  fileContainer: {
    flex: 1,
    height: 49,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    justifyContent: 'center',
  },
  fileText: { fontSize: 17, color: '#666E6A' },
  uploadButton: {
    width: 87,
    height: 49,
    borderRadius: 100,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: { fontSize: 17, color: '#FAFEFC' },
  gpsButtonWrapper: { marginTop: 20, alignItems: 'flex-start' },
  gpsButton: {
    width: 180,
    height: 46,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1B2821',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gpsRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  gpsText: { fontSize: 16, color: '#1B2821' },
  submitWrapper: { marginTop: 60, alignItems: 'center' },
  submitButton: {
    width: 353,
    height: 50,
    borderRadius: 48,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FAFEFC',
  },
});
