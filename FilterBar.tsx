// FilterBar.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FilterBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Sport</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Electric</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Moving</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Family</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: "#ffff"
  },
  button: {
    padding: 8,
    backgroundColor: '#ffff',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default FilterBar;
