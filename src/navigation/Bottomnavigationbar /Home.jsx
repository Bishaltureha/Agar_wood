import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { getName, getTotalPoints, getTreeCount } from '../../mmkv/storage';
import { useFocusEffect } from '@react-navigation/native';

import Homesrc from '../../../Assets/icon/Homesrc';
import HomeTree from '../../../Assets/icon/HomeTree';
import Homegift from '../../../Assets/icon/Homegift';

const Home = () => {
  const [userName, setUserName] = useState('Alex');
  const [totalPoints, setTotalPoints] = useState(0);
  const [treeCount, setTreeCount] = useState(0);

  useEffect(() => {
    const name = getName();
    const points = getTotalPoints();
    const count = getTreeCount();

    if (name) setUserName(name);
    setTotalPoints(points || 1200);
    setTreeCount(count || 5);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const name = getName();
      const points = getTotalPoints();
      const count = getTreeCount();

      if (name) setUserName(name);
      setTotalPoints(points);
      setTreeCount(count);
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.greeting}>Good Morning, {userName}</Text>

        <View style={styles.row}>
          <Homesrc width={16} height={16} />
          <Text style={styles.text}>Greenfield Village</Text>
        </View>

        <View style={styles.cardContainer}>
          <HomeTree width={50} height={50} />
          <Text style={styles.textStyle}>My Trees</Text>
          <Text style={styles.subText}>Total Trees: {treeCount}</Text>
        </View>

        <View style={styles.cardContainer}>
          <Homegift width={50} height={50} />
          <Text style={styles.textStyle}>Rewards</Text>
          <Text style={styles.subText}>Points: {totalPoints}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FAFEFC',
  },
  innerContainer: {
    width: '100%',
    padding: 20,
  },
  greeting: {
    fontFamily: 'PlusJakartaSans',
    fontWeight: '700',
    fontSize: 22,
    color: '#1B2821',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#666E6A',
  },
  cardContainer: {
    marginTop: 10,
    width: '100%',
    height: 149,
    minWidth: 160,
    gap: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#142E2026',
    padding: 20,
    backgroundColor: '#FAFEFC',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 5,
  },
  textStyle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 17,
    color: '#1B2821',
  },
  subText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    color: '#666E6A',
    marginTop: -10,
  },
});
