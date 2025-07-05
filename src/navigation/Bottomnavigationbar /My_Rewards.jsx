import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import MyRewardsvg from '../../../Assets/icon/MyRewardsvg';
import {
  getTotalPoints,
  setTotalPoints as storeTotalPoints,
  getRewardTransactions,
  setRewardTransactions,
} from '../../mmkv/storage';

const TransactionRow = ({ date, label }) => (
  <View style={styles.transactionRow}>
    <MyRewardsvg height={24} width={24} />
    <View style={{ paddingLeft: 10 }}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.pointsEarned}>{label}</Text>
    </View>
  </View>
);

const My_Rewards = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [withdrawInput, setWithdrawInput] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    const storedPoints = getTotalPoints();
    const storedTransactions = getRewardTransactions();

    // ✅ Combine stored + default (but remove duplicates)
    const combined = [...storedTransactions];

    setTotalPoints(storedPoints || 0);
    setTransactionList(combined);
  }, []);

  const handleWithdraw = () => {
    const points = parseInt(withdrawInput);
    if (!isNaN(points) && points > 0 && points <= totalPoints) {
      const newTotal = totalPoints - points;
      const newTransaction = {
        date: new Date().toISOString().split('T')[0],
        label: 'Withdrawal',
      };

      const updatedList = [newTransaction, ...transactionList];

      setTotalPoints(newTotal); // UI update
      setTransactionList(updatedList); // UI update
      storeTotalPoints(newTotal); // MMKV update
      setRewardTransactions(updatedList); // ✅ Save new tx to MMKV

      setWithdrawInput('');
      setModalVisible(false);
    } else {
      alert('Enter a valid amount less than or equal to current points');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.title}>Points Wallet</Text>

        <View style={styles.cardContainer}>
          <View style={styles.rowBetween}>
            <Text style={styles.totalPointsText}>Total Points</Text>
            <Text style={styles.totalPointsText}>Lifetime Earned</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.pointsValue}>{totalPoints}</Text>
            <Text style={styles.pointsValue}>9,999</Text>
          </View>

          <TouchableOpacity
            style={styles.withdrawButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.withdrawText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.transactionTitle}>Transaction History</Text>

        {transactionList.length > 0 ? (
          transactionList.map((txn, index) => (
            <TransactionRow key={index} date={txn.date} label={txn.label} />
          ))
        ) : (
          <Text style={styles.noTx}>No transactions yet</Text>
        )}
      </ScrollView>

      {/* Withdraw Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalView}>
            <View style={styles.currentPointsBadge}>
              <Text style={styles.currentPointsText}>
                Current Points {totalPoints}
              </Text>
            </View>

            <Text style={styles.title}>Withdraw Points</Text>
            <Text style={styles.dateText}>
              How many points do you want to withdraw?
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter Points"
              backgroundColor="#EBF8F1"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={withdrawInput}
              onChangeText={setWithdrawInput}
            />

            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: '#F5F5F5',
                    borderColor: '#1B2821',
                    borderWidth: 1,
                  },
                ]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.withdrawText, { color: '#666E6A' }]}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#14AE5C' }]}
                onPress={handleWithdraw}
              >
                <Text style={[styles.withdrawText, { color: '#FAFEFC' }]}>
                  Withdraw
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default My_Rewards;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 22,
    color: '#1B2821',
    textAlign: 'left',
    marginTop: 15,
  },
  cardContainer: {
    width: '100%',
    height: 182,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#666E6A4D',
    backgroundColor: '#FAFEFC',
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 7,
    elevation: 3,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  totalPointsText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 17,
    letterSpacing: -0.425,
    color: '#1B2821',
  },
  pointsValue: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: -0.85,
    color: '#1B281B',
  },
  withdrawButton: {
    width: '100%',
    height: 50,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: '#14AE5C',
    backgroundColor: '#EBF8F1',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  withdrawText: {
    fontFamily: 'PublicSans-Bold',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 22.95,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#14AE5C',
  },
  transactionTitle: {
    marginTop: 15,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.45,
    color: '#1B281B',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dateText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22.95,
    letterSpacing: -0.085,
    color: '#1B281B',
  },
  pointsEarned: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22.95,
    letterSpacing: -0.085,
    color: '#142E14',
    opacity: 0.62,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    height: 320,
    backgroundColor: '#FAFEFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#666E6A4D',
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 22,
    elevation: 10,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#14AE5C',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 16,
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#1B2821',
    marginTop: 20,
  },
  currentPointsBadge: {
    width: '45%',
    height: 29,
    paddingTop: 7,
    paddingRight: 14,
    paddingBottom: 7,
    paddingLeft: 14,
    borderRadius: 16,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  currentPointsText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.3,
    color: '#FAFEFC',
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  modalButton: {
    flex: 0.48,
    height: 50,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
