import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

export default function CategoryGridTile({ onSelect, title, color }) {
  let GridComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    GridComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <GridComp style={styles.gridComp} onPress={onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </GridComp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridComp: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 21,
    textAlign: "right",
  },
});
