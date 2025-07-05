import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

// ------------------ USER NAME ------------------

export const setName = name => storage.set('user_name', name);
export const getName = () => storage.getString('user_name');

// ------------------ LAND ENTRIES ------------------

const LAND_KEY = 'land_list';

export const getLandList = () => {
  const json = storage.getString(LAND_KEY);
  return json ? JSON.parse(json) : [];
};

export const setLandList = list => {
  storage.set(LAND_KEY, JSON.stringify(list));
};

export const addLand = land => {
  const list = getLandList();
  const updatedList = [...list, land];
  setLandList(updatedList);
};

export const clearLandList = () => {
  storage.delete(LAND_KEY);
};

// ------------------ ONBOARDING / INTRO ------------------

const INTRO_KEY = 'hasSeenIntro';

export const markIntroSeen = () => storage.set(INTRO_KEY, 'true');
export const hasSeenIntro = () => storage.getString(INTRO_KEY) === 'true';
export const resetIntroSeen = () => storage.delete(INTRO_KEY);

// ------------------ REWARDS SYSTEM ------------------

const REWARD_KEY = 'reward_transactions';
const REWARD_POINTS_KEY = 'reward_total_points';

const defaultTransactions = [
  { date: '2023-10-01', label: '+40 points' },
  { date: '2023-09-29', label: 'Withdrawal' },
  { date: '2023-09-28', label: '+50 points' },
  { date: '2023-09-28', label: 'Withdrawal' },
  { date: '2023-09-28', label: '+30 points' },
];

export const initRewardsIfNotExists = () => {
  if (!storage.contains(REWARD_KEY)) {
    storage.set(REWARD_KEY, JSON.stringify(defaultTransactions));
  }
  if (!storage.contains(REWARD_POINTS_KEY)) {
    storage.set(REWARD_POINTS_KEY, 1200);
  }
};

export const getRewardTransactions = () => {
  const json = storage.getString(REWARD_KEY);
  return json ? JSON.parse(json) : [];
};

export const setRewardTransactions = list => {
  storage.set(REWARD_KEY, JSON.stringify(list));
};

export const addRewardTransaction = tx => {
  const list = getRewardTransactions();
  const updatedList = [tx, ...list];
  setRewardTransactions(updatedList);
};

export const getTotalPoints = () => {
  return storage.getNumber(REWARD_POINTS_KEY) ?? 0;
};

export const setTotalPoints = value => {
  storage.set(REWARD_POINTS_KEY, value);
};

// ------------------ TREES SYSTEM ------------------

const TREE_KEY = 'trees';

const defaultTrees = [
  { treeId: '12345', treeName: 'Mango', status: 'Planted' },
  { treeId: '23456', treeName: 'Neem', status: 'Mature' },
  { treeId: '34567', treeName: 'Banyan', status: 'Mature' },
  { treeId: '45678', treeName: 'Peepal', status: 'Mature' },
  { treeId: '56789', treeName: 'Gulmohar', status: 'Mature' },
];

// Initialize default trees if not already saved
export const initTreesIfNotExists = () => {
  if (!storage.contains(TREE_KEY)) {
    storage.set(TREE_KEY, JSON.stringify(defaultTrees));
  }
};

// Get all trees
export const getTrees = () => {
  const json = storage.getString(TREE_KEY);
  return json ? JSON.parse(json) : [];
};

// Add new tree
export const addTree = (tree) => {
  const existing = getTrees();
  const updated = [...existing, tree];
  storage.set(TREE_KEY, JSON.stringify(updated));
};

// Get count of trees
export const getTreeCount = () => {
  return getTrees().length;
};
