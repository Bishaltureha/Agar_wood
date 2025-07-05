import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { setName } from '../../mmkv/storage';

const MainOwner = () => {
  const [photo, setPhoto] = useState(null);
  const [aadharFrontFile, setAadharFrontFile] = useState('Select file');
  const [aadharBackFile, setAadharBackFile] = useState('Select file');
  const [voterFrontFile, setVoterFrontFile] = useState('Select file');
  const [voterBackFile, setVoterBackFile] = useState('Select file');
  const [panFile, setPanFile] = useState('Select file');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    setName(firstName);
    navigation.navigate('Land_Ownership');
  };

  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
      },
      response => {
        if (response.didCancel) return;
        if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setPhoto(response.assets[0].uri);
        }
      },
    );
  };

  const handleFilePick = setFileFn => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets?.length > 0) {
        const selectedFile = response.assets[0];
        setFileFn(selectedFile.fileName || 'Selected file');
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.row}>
          {photo ? (
            <View style={styles.imageBox}>
              <Image source={{ uri: photo }} style={styles.fullImage} />
            </View>
          ) : (
            <View style={styles.roundBox}>
              <MaterialCommunityIcons
                name="camera-outline"
                size={28.9}
                color="#14AE5C"
              />
            </View>
          )}
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleImagePick}
          >
            <Text style={styles.uploadText}>Upload image</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            placeholder="First name"
            placeholderTextColor="#A0A0A0"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Middle name (Optional)</Text>
          <TextInput
            placeholder="Middle name"
            placeholderTextColor="#A0A0A0"
            style={styles.input}
            value={middleName}
            onChangeText={setMiddleName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            placeholder="Last name"
            placeholderTextColor="#A0A0A0"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
          <View style={styles.divider} />
        </View>

        <Text style={styles.head}>Aadhar Card Front Page</Text>
        <Text style={styles.subtext}>Upload your Aadhar card front page</Text>
        <View style={styles.uploadRow}>
          <View style={styles.selectFileButton}>
            <Text style={styles.selectFileText}>{aadharFrontFile}</Text>
          </View>
          <TouchableOpacity
            style={styles.uploadNextButton}
            onPress={() => handleFilePick(setAadharFrontFile)}
          >
            <Text style={styles.uploadNextText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.head}>Aadhar Card Back Page</Text>
        <Text style={styles.subtext}>Upload your Aadhar card back page</Text>
        <View style={styles.uploadRow}>
          <View style={styles.selectFileButton}>
            <Text style={styles.selectFileText}>{aadharBackFile}</Text>
          </View>
          <TouchableOpacity
            style={styles.uploadNextButton}
            onPress={() => handleFilePick(setAadharBackFile)}
          >
            <Text style={styles.uploadNextText}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <Text style={styles.head}>Voter ID Front Page</Text>
        <Text style={styles.subtext}>Upload your Voter ID front page</Text>
        <View style={styles.uploadRow}>
          <View style={styles.selectFileButton}>
            <Text style={styles.selectFileText}>{voterFrontFile}</Text>
          </View>
          <TouchableOpacity
            style={styles.uploadNextButton}
            onPress={() => handleFilePick(setVoterFrontFile)}
          >
            <Text style={styles.uploadNextText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.head}>Voter ID Back Page</Text>
        <Text style={styles.subtext}>Upload your Voter ID back page</Text>
        <View style={styles.uploadRow}>
          <View style={styles.selectFileButton}>
            <Text style={styles.selectFileText}>{voterBackFile}</Text>
          </View>
          <TouchableOpacity
            style={styles.uploadNextButton}
            onPress={() => handleFilePick(setVoterBackFile)}
          >
            <Text style={styles.uploadNextText}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <Text style={styles.head}>PAN Card Front Page</Text>
        <Text style={styles.subtext}>Upload your PAN card front page</Text>
        <View style={styles.uploadRow}>
          <View style={styles.selectFileButton}>
            <Text style={styles.selectFileText}>{panFile}</Text>
          </View>
          <TouchableOpacity
            style={styles.uploadNextButton}
            onPress={() => handleFilePick(setPanFile)}
          >
            <Text style={styles.uploadNextText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainOwner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  roundBox: {
    width: '28%',
    height: 107,
    backgroundColor: '#EBF8F1',
    borderRadius: 179.83,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  imageBox: {
    width: '28%',
    height: 107,
    borderRadius: 179.83,
    overflow: 'hidden',
    marginRight: 10,
  },
  fullImage: {
    width: '100%',
    height: '100%',
    borderRadius: 179.83,
    resizeMode: 'cover',
  },
  uploadButton: {
    width: '36%',
    height: 33,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 15,
    color: '#1B2821',
    textAlign: 'center',
  },
  inputGroup: {
    marginTop: 20,
    width: '100%',
  },
  label: {
    fontWeight: '500',
    fontSize: 18,
    color: '#1B2821',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 49,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22.95,
    color: '#1B2821',
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#142E204D',
    marginTop: 20,
    marginBottom: 10,
  },
  head: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 18,
    fontWeight: '500',
    color: '#1B2821',
    letterSpacing: -0.36,
    marginTop: 10,
  },
  subtext: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    fontWeight: '400',
    color: '#1B2821',
    marginBottom: 10,
    lineHeight: 20.25,
  },
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  selectFileButton: {
    width: '75%',
    height: 49,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  selectFileText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22.95,
    color: '#1B2821',
  },
  uploadNextButton: {
    alignSelf: 'center',
    width: '25%',
    height: 49,
    borderRadius: 100,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadNextText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 17,
    fontWeight: '400',
    color: '#FAFEFC',
    lineHeight: 22.95,
  },
  submitButton: {
    width: '100%',
    height: 50,
    borderRadius: 48,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  submitText: {
    fontFamily: 'Public Sans',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 22.95,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FAFEFC',
  },
});
