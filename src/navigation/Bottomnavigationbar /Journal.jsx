import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

import JournalCamera from '../../../Assets/icon/journalcamera';
import JournalBark from '../../../Assets/icon/journalBark';
import JournalPest from '../../../Assets/icon/journalPest';
import JournalResin from '../../../Assets/icon/journalResin';
import Journalmic from '../../../Assets/icon/journalmic';

const Journal = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (!response.didCancel && !response.errorCode) {
          const uri = response.assets[0].uri;
          setSelectedImage(uri);
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#1B2821" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Photo Journal Upload</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.inner}>
          <View style={styles.imageRow}>
            <Image
              source={require('../../../Assets/journal1.png')}
              style={styles.journalImage}
            />
            <Image
              source={require('../../../Assets/journal2.png')}
              style={styles.journalImage}
            />
          </View>

          <View style={styles.imageRow}>
            <Image
              source={require('../../../Assets/journal3.png')}
              style={styles.journalImage}
            />
            <Image
              source={require('../../../Assets/journal4.png')}
              style={styles.journalImage}
            />
          </View>

          <View style={styles.imageRow}>
            <Image
              source={require('../../../Assets/journal5.png')}
              style={styles.journalImage}
            />
            <Image
              source={require('../../../Assets/journal6.png')}
              style={styles.journalImage}
            />
          </View>

          <View style={styles.imageRow}>
            <Image
              source={require('../../../Assets/journal7.png')}
              style={styles.journalImage}
            />
            <Image
              source={require('../../../Assets/journal8.png')}
              style={styles.journalImage}
            />
          </View>

          <View style={styles.imageRow}>
            <Image
              source={require('../../../Assets/journal9.png')}
              style={styles.journalImage}
            />
            <TouchableOpacity
              style={styles.placeholderBox}
              onPress={handleImagePick}
            >
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.journalImage}
                />
              ) : (
                <JournalCamera />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Select Category</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.selectCategoryBox,
              selectedCategory === 'Bark' && styles.activeBorder,
            ]}
            onPress={() => setSelectedCategory('Bark')}
          >
            <JournalBark />
            <Text style={styles.selectCategoryText}>Bark</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.selectCategoryBox,
              selectedCategory === 'Pest' && styles.activeBorder,
            ]}
            onPress={() => setSelectedCategory('Pest')}
          >
            <JournalPest />
            <Text style={styles.selectCategoryText}>Pest</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.selectCategoryBox,
              selectedCategory === 'Resin' && styles.activeBorder,
            ]}
            onPress={() => setSelectedCategory('Resin')}
          >
            <JournalResin />
            <Text style={styles.selectCategoryText}>Resin</Text>
          </TouchableOpacity>

          <View style={styles.customBox}>
            <Text style={styles.audioNoteText}>Add Audio Notes</Text>
            <Journalmic />
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Journal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  inner: {
    paddingHorizontal: 20,
    gap: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EBF8F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 22,
    color: '#1B2821',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  journalImage: {
    width: '48%',
    height: 132,
    minWidth: 120,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  placeholderBox: {
    width: '48%',
    height: 132,
    borderRadius: 12,
    backgroundColor: '#EBF8F1',
    borderWidth: 1.5,
    borderColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryHeader: {
    marginTop: 20,
  },
  categoryTitle: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0,
    color: '#1B2821',
  },
  selectCategoryBox: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    padding: 12,
    backgroundColor: '#fff',
    gap: 18,
    marginTop: 12,
  },
  activeBorder: {
    borderColor: '#14AE5C',
  },
  selectCategoryText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 17,
    color: '#1B2821',
  },
  saveButton: {
    width: '100%',
    height: 50,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    borderRadius: 48,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  saveButtonText: {
    fontFamily: 'PublicSans-Bold',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FAFEFC',
  },
  customBox: {
    width: '100%',
    height: 51,
    paddingTop: 13.5,
    paddingRight: 13,
    paddingBottom: 13.5,
    paddingLeft: 13,
    marginTop: 30,
    gap: 8,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  audioNoteText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22.95,
    letterSpacing: 0,
    color: '#1B2821',
  },
});
