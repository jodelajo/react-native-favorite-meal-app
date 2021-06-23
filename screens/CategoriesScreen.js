import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

function renderGridItem(itemData) {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
}

export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
      flex: 1,
      margin: 15,
      height: 150
  }
});
