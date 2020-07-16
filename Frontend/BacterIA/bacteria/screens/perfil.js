import React from "react";
import { StyleSheet, View, Text, Button, _Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Perfil({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Mi Perfil</Text>
      {/*<Text>Número de DNI: {nombre2}</Text>*/}
    </View>
  );
}
