import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchInput: () => Node = ({ searchQuery, setSearchQuery }) => (
  <View>
    <TextInput
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchInput}
      placeholder="Search"
      placeholderTextColor={{ semantic: 'secondaryLabelColor' }}
      clearButtonMode="while-editing"
      blurOnSubmit={true}
    />
    <Text style={[styles.searchInputIcon, styles.searchInputSearchIcon]}>􀊫</Text>
    {searchQuery !== '' ? (
      <TouchableOpacity
        onPress={() => setSearchQuery('')}
        style={[styles.searchInputIcon, styles.searchInputClearIcon]}>
        <Text style={styles.searchInputClearIconText}>􀁑</Text>
      </TouchableOpacity>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  searchInput: {
    height: 28,
    lineHeight: 21,
    fontSize: 13,
    backgroundColor: { semantic: 'disabledControlTextColor' },
    marginHorizontal: 12,
    paddingLeft: 24,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#8c8c8c80',
    color: { semantic: 'labelColor' },
  },
  searchInputIcon: {
    position: 'absolute',
    fontSize: 14,
    top: 6,
    color: { semantic: 'labelColor' },
  },
  searchInputSearchIcon: {
    left: 18,
  },
  searchInputClearIcon: {
    right: 20,
  },
  searchInputClearIconText: {
    color: { semantic: 'labelColor' },
  },
});

export default SearchInput;
