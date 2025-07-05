import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LANGUAGES = [
  {
    id: 'assamese',
    name: 'Assamese',
    flag: require('../../Assets/flag-india.png'),
  },
  {
    id: 'hindi',
    name: 'Hindi',
    flag: require('../../Assets/flag-india.png'),
  },
  {
    id: 'english',
    name: 'English',
    flag: require('../../Assets/flag-united-kingdom.png'),
  },
];

const Language_Selection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('assamese');
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Permissions');
  };

  const renderLanguageButton = (language, index) => {
    const isSelected = selectedLanguage === language.id;

    return (
      <TouchableOpacity
        key={language.id}
        style={[
          styles.languageButton,
          {
            backgroundColor: isSelected ? '#EBF8F1' : '#ffffff',
            marginTop: index === 0 ? 0 : 16,
          },
        ]}
        onPress={() => setSelectedLanguage(language.id)}
      >
        <Image source={language.flag} style={styles.flagImage} />
        <Text style={styles.languageText}>{language.name}</Text>
        <Ionicons
          name={isSelected ? 'radio-button-on' : 'radio-button-off'}
          size={24}
          color={isSelected ? '#22C55E' : '#A0A0A0'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Select Your Language</Text>
        <View style={styles.body}>
          {LANGUAGES.map((lang, index) => renderLanguageButton(lang, index))}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Language_Selection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 0,
    paddingTop: 24,
    paddingHorizontal: 26,
  },
  body: {
    marginTop: 16,
  },
  languageButton: {
    width: '90%',
    height: 60,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: '#22C55E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  flagImage: {
    width: 34,
    height: 22,
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: 16,
  },
  languageText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
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
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontFamily: 'PublicSans-Bold',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
    color: '#ffffff',
  },
});
