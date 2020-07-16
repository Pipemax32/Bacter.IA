import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBorder: {
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    width: 70,
    height: 70,
    backgroundColor: "grey",
  },
});
const ButtonComponent = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <View style={styles.buttonBorder}>
      <MaterialIcons name="close" size={24} />
    </View>
  </TouchableOpacity>
);
export default ButtonComponent;
