import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Gpscircular from '../../Assets/icon/Gpscircular';
import { getLandList, clearLandList } from '../mmkv/storage';

const Land_Ownership = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [landList, setLandList] = useState([]);

  useEffect(() => {
    const list = getLandList();
    setLandList(list);
    // clearLandList(); // This will remove all saved land entries
  }, [isFocused]);

  const handleGetStarted = () => {
    navigation.navigate('Land_Ownership_Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollViewstyle}>
        <Text style={styles.heading}>Land Ownership Documents</Text>

        {landList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => navigation.navigate('MainTabs')}
          >
            <View style={styles.row}>
              <View style={styles.gap10}>
                <View style={styles.iconCircle}>
                  <Gpscircular width={20} height={20} />
                </View>
                <View style={styles.gap5}>
                  <Text style={styles.landName}>{item.name}</Text>
                  <Text style={styles.gpsText}>{item.gps}</Text>
                </View>
              </View>
              <Text style={styles.viewDetails}>View Details</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.ownershipBox}>
          <View style={styles.addRow}>
            <MaterialIcons name="add" size={19.5} color="#14AE5C" />
            <Text style={styles.addText}>Add Land Ownership</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomRightWrapper}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={handleGetStarted}
        >
          <MaterialIcons name="add" size={20} color="#FAFEFC" />
          <Text style={styles.bottomButtonText}>Add Land Ownership</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Land_Ownership;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  ScrollViewstyle: { padding: 20 },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B2821',
    marginBottom: 10,
  },
  cardContainer: {
    width: '100%',
    height: 106,
    backgroundColor: '#EBF8F1',
    alignSelf: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#14AE5C',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap10: { gap: 8 },
  gap5: { gap: 3 },
  landName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#1B2821',
  },
  gpsText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#666E6A',
  },
  viewDetails: {
    fontWeight: '500',
    fontSize: 13,
    color: '#14AE5C',
  },
  ownershipBox: {
    marginTop: 20,
    width: '100%',
    height: 106,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addRow: { flexDirection: 'row', alignItems: 'center' },
  addText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#14AE5C',
    marginLeft: 8,
  },
  bottomRightWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 20,
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 217,
    height: 54,
    borderRadius: 360,
    backgroundColor: '#14AE5C',
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FAFEFC',
    marginLeft: 8,
  },
});
