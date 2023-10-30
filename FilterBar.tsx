// FilterBar.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterBar = () => {
  return (
    <View style={styles.container}>
      <Text>All</Text>
      <Text>Sport</Text>
      <Text>Electric</Text>
      <Text>Moving</Text>
      <Text>Family</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default FilterBar;
