import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import SupportImage from '../../../Assets/icon/supportimg';
import Newspaper from '../../../Assets/icon/newspaper';
import Supportlocation from '../../../Assets/icon/supportlocation';
import Supportphone from '../../../Assets/icon/supportphone';
import Supportcall from '../../../Assets/icon/supportcall';
import Supportwhatsapp from '../../../Assets/icon/supportwhatsapp';

const Support = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.heading}>Need Help? Contact Your Agent</Text>
      <View style={styles.card}>
        <View style={[styles.iconWrapper, { margin: 20 }]}>
          <SupportImage height="64" width="64" />
          <View style={{ flexDirection: 'column', marginLeft: 12 }}>
            <View style={styles.rowItem}>
              <Newspaper width={12.83} height={10.5} />
              <Text style={styles.nameText}>Mr. Pradip Boro</Text>
            </View>
            <View style={styles.rowItem}>
              <Supportlocation width={14} height={14} />
              <Text style={styles.subText}>Barpeta District</Text>
            </View>
            <View style={styles.rowItem}>
              <Supportphone width={9.33} height={12.83} />
              <Text style={styles.subText}>+91 91234 56789</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.callButton}>
            <View style={styles.innerRow}>
              <Supportcall width={19.5} height={19.5} />
              <Text style={styles.callButtonText}>Call Agent</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageButton}>
            <View style={styles.innerRow}>
              <Supportwhatsapp width={20} height={20} />
              <Text style={styles.messageButtonText}>WhatsApp</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
);

export default Support;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0,
    color: '#1B2821',
    textAlign: 'left',
  },
  card: {
    marginTop: 24,
    width: '100%',
    height: 210,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#666E6A4D',
    backgroundColor: '#FAFEFC',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 7,
    elevation: 3,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 20,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    gap: 10,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  nameText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: '#1B281B',
  },
  subText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17.55,
    letterSpacing: 0,
    color: '#1B281B',
  },
  callButton: {
    width: '48%',
    height: 50,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    borderRadius: 48,
    backgroundColor: '#EBF8F1',
    borderWidth: 1,
    borderColor: '#666E6A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButtonText: {
    fontFamily: 'Public Sans',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22.95,
    letterSpacing: 0,
    color: '#1B2821',
  },
  messageButton: {
    width: '48%',
    height: 50,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    borderRadius: 48,
    backgroundColor: '#EBF8F1',
    borderWidth: 1,
    borderColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageButtonText: {
    fontFamily: 'Public Sans',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 22.95,
    letterSpacing: 0,
    color: '#14AE5C',
  },
});
