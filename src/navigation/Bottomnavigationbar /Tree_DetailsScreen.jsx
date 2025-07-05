import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { addTree } from '../../mmkv/storage';

import Tree_Detailscalender from '../../../Assets/icon/Tree_Detailscalender';
import Tree_DetailsScreencamera from '../../../Assets/icon/Tree_DetailsScreencamera';
import Tree_DetailsScreen2 from '../../../Assets/icon/Tree_DetailsScreen2';
import Tree_DetailsScreen3 from '../../../Assets/icon/Tree_DetailsScreen3';

const Tree_DetailsScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    treeName: '',
    treeId: '',
    registration: '',
    height: '',
    branches: '',
    notes: '',
    harvestMonth: '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.treeName || !formData.treeId) {
      alert('Please fill all required fields');
      return;
    }

    addTree(formData); // Save to MMKV
    alert('Tree Saved Successfully!');
    navigation.goBack(); // go back to Tree_Details screen
  };

  const journalEntries = [
    {
      id: 1,
      icon: <Tree_DetailsScreencamera />,
      title: 'Entry 1',
      subtitle: 'Photo uploaded',
    },
    {
      id: 2,
      icon: <Tree_DetailsScreen2 />,
      title: 'Entry 2',
      subtitle: 'Audio note added',
    },
    {
      id: 3,
      icon: <Tree_DetailsScreen3 />,
      title: 'New Entry',
      subtitle: 'Add new journal entry',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#1B2821" />
          </TouchableOpacity>
          <Text style={styles.heading}>Tree Details</Text>
        </View>

        <View style={styles.formWrapper}>
          {[
            {
              label: 'Tree Name',
              key: 'treeName',
              placeholder: 'Enter tree name',
            },
            { label: 'Tree ID', key: 'treeId', placeholder: 'Enter tree ID' },
            {
              label: 'Tree Registration Number',
              key: 'registration',
              placeholder: 'Enter registration number',
            },
            {
              label: 'Tree Height',
              key: 'height',
              placeholder: 'Enter tree height',
            },
            {
              label: 'Tree Branches',
              key: 'branches',
              placeholder: 'Enter number of branches',
            },
          ].map(({ label, key, placeholder }) => (
            <React.Fragment key={key}>
              <Text style={styles.label}>{label}</Text>
              <TextInput
                value={formData[key]}
                onChangeText={val => handleChange(key, val)}
                placeholder={placeholder}
                style={styles.inputBox}
                placeholderTextColor="#999"
              />
            </React.Fragment>
          ))}

          <Text style={styles.label}>Tree Notes</Text>
          <TextInput
            value={formData.notes}
            onChangeText={val => handleChange('notes', val)}
            placeholder="Enter notes"
            multiline
            style={styles.notesBox}
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Time to harvest</Text>
          <View style={styles.harvestBox}>
            <View style={styles.harvestLeft}>
              <Tree_Detailscalender />
              <TextInput
                value={formData.harvestMonth}
                onChangeText={val => handleChange('harvestMonth', val)}
                placeholder="0"
                style={[styles.inputText, { color: '#1B2821', width: 40 }]}
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
            <Text style={styles.inputText}>month(s)</Text>
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Agent Approval Status</Text>
            <TouchableOpacity style={styles.approvedBtn}>
              <Text style={styles.approvedText}>Approved</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.statusRow, { marginBottom: 20 }]}>
            <Text style={styles.statusLabel}>Admin Approval Status</Text>
            <TouchableOpacity style={styles.pendingBtn}>
              <Text style={styles.pendingText}>Pending</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={styles.sectionHeading}>Journal Entries</Text>

          {journalEntries.map(({ id, icon, title, subtitle }) => (
            <View key={id} style={styles.cameraRow}>
              {icon}
              <View style={styles.cameraTextWrapper}>
                <Text style={styles.cameraTitle}>{title}</Text>
                <Text style={styles.cameraSubtitle}>{subtitle}</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Add New Journal Entry</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tree_DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  formWrapper: {
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
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
  heading: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 22,
    color: '#1B2821',
  },
  label: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 18,
    fontWeight: '500',
    color: '#1B2821',
    marginTop: 20,
    marginBottom: 10,
  },
  inputBox: {
    width: '100%',
    height: 49,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 100,
    backgroundColor: '#EBF8F1',
    borderWidth: 1,
    borderColor: '#14AE5C',
    justifyContent: 'center',
    fontSize: 16,
    color: '#1B2821',
  },
  inputText: {
    fontFamily: 'Outfit',
    fontWeight: '500',
    fontSize: 17,
    color: '#14AE5C',
  },
  notesBox: {
    width: '100%',
    height: 110,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 20,
    backgroundColor: '#EBF8F1',
    borderWidth: 1,
    borderColor: '#14AE5C',
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#1B2821',
  },
  harvestBox: {
    backgroundColor: '#FAFEFC',
    borderWidth: 1,
    borderColor: '#142E204D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 49,
    paddingHorizontal: 16,
    borderRadius: 100,
    marginTop: 8,
  },
  harvestLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  statusLabel: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.5,
    color: '#1B2821',
  },
  approvedBtn: {
    width: '25%',
    height: 32,
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 100,
    backgroundColor: '#F0FFFD',
    borderWidth: 1.5,
    borderColor: '#13A493',
    justifyContent: 'center',
    alignItems: 'center',
  },
  approvedText: {
    fontFamily: 'Outfit',
    fontSize: 13,
    color: '#13A493',
    fontWeight: '500',
  },
  pendingBtn: {
    width: '25%',
    height: 32,
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 100,
    backgroundColor: '#FF95000D',
    borderWidth: 1.5,
    borderColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingText: {
    fontFamily: 'Outfit',
    fontSize: 13,
    color: '#FF9500',
    fontWeight: '500',
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
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#C0C0C0',
    marginTop: 24,
    marginBottom: 24,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B2821',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  cameraRow: {
    width: '100%',
    height: 89,
    flexDirection: 'row',
    gap: 18,
    paddingRight: 18,
    alignItems: 'center',
  },
  cameraTextWrapper: {
    flexDirection: 'column',
  },
  cameraTitle: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontWeight: '600',
    fontSize: 17,
    color: '#1B2821',
  },
  cameraSubtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    color: '#666E6A',
  },
});
