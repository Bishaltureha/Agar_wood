import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import Tree_Detailsmenu from '../../../Assets/icon/Tree_Detailsmenu';
import Tree_Detailsmenu2 from '../../../Assets/icon/Tree_Detailsmenu2';
import Tree_DetailsTree from '../../../Assets/icon/Tree_DetailsTree';
import Tree_Detailsfourbox from '../../../Assets/icon/Tree_Detailsfourbox';
import Tree_Detailsadd from '../../../Assets/icon/Tree_Detailsadd';

import { getTrees, initTreesIfNotExists, storage } from '../../mmkv/storage';

const Tree_Details = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [trees, setTrees] = useState([]);
  // This runs once on mount — to initialize or reset data
  useEffect(() => {
    // storage.delete('trees');
    initTreesIfNotExists();
  }, []);

  // This runs every time the screen is focused — to reload fresh data
  useEffect(() => {
    if (isFocused) {
      const allTrees = getTrees();
      setTrees(allTrees);
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>All Trees</Text>

        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.sortButton}>
            <View style={styles.sortDropdown}>
              <Text style={styles.sortText}>Sort by</Text>
              <Tree_Detailsmenu height={16} width={16} />
            </View>
          </TouchableOpacity>

          <View style={styles.viewToggle}>
            <Tree_Detailsmenu2 height={22} width={32} />
            <Tree_Detailsfourbox height={14} width={14} />
          </View>
        </View>
      </View>

      {/* Tree List */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {trees.map((tree, index) => (
          <View key={index} style={styles.cardContainer}>
            <View style={{ flexDirection: 'column' }}>
              <Tree_DetailsTree height={30} width={30} />
              <Text style={styles.treeId}>Tree ID: {tree.treeId}</Text>
              <Text style={styles.treeStatus}>Name: {tree.treeName}</Text>
              <Text style={styles.treeStatus}>
                Status: {tree.status || 'Planted'}
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
              <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Tree Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Tree_DetailsScreen')}
      >
        <View style={styles.floatingRow}>
          <Tree_Detailsadd height={19.5} width={19.5} />
          <Text style={styles.floatingButtonText}>New Tree</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Tree_Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100,
    alignItems: 'center',
    gap: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 22,
    color: '#1B2821',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortDropdown: {
    width: 86,
    height: 28,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#496E5333',
    backgroundColor: '#FBFEFC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  sortText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 13,
    color: '#1B2821',
    fontWeight: '500',
  },
  viewToggle: {
    marginLeft: 15,
    width: 70,
    height: 28,
    borderRadius: 1000,
    padding: 3,
    backgroundColor: '#EBF8F1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardContainer: {
    width: 353,
    height: 106,
    minWidth: 140,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#EBF8F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  treeId: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18.9,
    color: '#1B2821',
    marginTop: 4,
  },
  treeStatus: {
    fontFamily: 'Outfit',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.2,
    color: '#666E6A',
    marginTop: 2,
  },
  viewDetails: {
    fontFamily: 'Outfit',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 17.55,
    color: '#14AE5C',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 136.5,
    height: 55,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 360,
    backgroundColor: '#14AE5C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 7,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    color: '#FAFEFC',
    fontFamily: 'Outfit',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  floatingRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
