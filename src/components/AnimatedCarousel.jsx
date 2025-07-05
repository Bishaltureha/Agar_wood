import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SPACING = 20;
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = 410;

const DATA = [
  { id: '1', title: '' },
  { id: '2', title: '' },
  { id: '3', title: '' },
  { id: '4', title: '' },
  { id: '5', title: '' },
  { id: '6', title: '' },
  { id: '7', title: '' },
  { id: '8', title: '' },
];

const AnimatedCard = ({ item, index, scrollX }) => {
  const inputRange = [
    (index - 1) * (ITEM_WIDTH + SPACING),
    index * (ITEM_WIDTH + SPACING),
    (index + 1) * (ITEM_WIDTH + SPACING),
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
      <Text style={styles.cardText}>{item.title}</Text>
    </Animated.View>
  );
};

const AnimatedCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const listener = scrollX.addListener(({ value }) => {
      const currentIndex = Math.round(value / (ITEM_WIDTH + SPACING));
      setIndex(currentIndex);
    });

    return () => {
      scrollX.removeListener(listener);
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Carousel */}
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <AnimatedCard item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        pagingEnabled
        snapToInterval={ITEM_WIDTH + SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - ITEM_WIDTH) / 2,
        }}
        ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      />

      {/* Title & Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Smart Tree Tracking</Text>
        <Text style={styles.subtitle}>সোজা, सुरक्षित, सुलभ.</Text>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {DATA.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};

export default AnimatedCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  card: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: '#EBF8F1',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#000',
  },
  textContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    textAlign: 'center',
    color: '#1B2821',
  },
  subtitle: {
    fontFamily: 'PublicSans-Regular',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 23,
    letterSpacing: -0.085,
    textAlign: 'center',
    color: '#666E6A',
    marginTop: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#22C55E',
    width: 26,
    height: 6,
    borderRadius: 4,
  },
});
