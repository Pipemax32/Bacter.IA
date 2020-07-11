import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Cultivo({ route, navigation }) {
  //Acá hay que anotar todos los valores de los cultivos que se vayan a usar
  const { title, date, body } = route.params;

  return (
    //Esto es la plantilla para información de bacterias, que referencia los valores cargados arriba
    <View style={globalStyles.container}>
      {/*<Text style={globalStyles.titleText}>{title}</Text>*/}
      <Text style={globalStyles.paragraph}>Fecha: {date}</Text>
      <Text style={globalStyles.paragraph}>Descripción: {body}</Text>
    </View>
  );
}
