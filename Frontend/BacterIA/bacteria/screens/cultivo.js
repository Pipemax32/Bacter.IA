import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Main from "../src/screens/Main";

export default function Cultivo({ route, navigation }) {
  //Acá hay que anotar todos los valores de los cultivos que se vayan a usar
  const { fecha, colonias, notas } = route.params;

  return (
    //Esto es la plantilla para información de bacterias, que referencia los valores cargados arriba
    <View style={globalStyles.container}>
      <View style={globalStyles.container}>
        <ScrollView style={globalStyles.scrollView}>
          {/*<Text style={globalStyles.titleText}>{title}</Text>*/}
          <Text style={globalStyles.paragraph}>Fecha: {fecha}</Text>
          <Text style={globalStyles.paragraph}>Colonias: {colonias}</Text>
          <Text style={globalStyles.paragraph}>Agrupaciones: No</Text>
          <Text style={globalStyles.paragraph}>Densidad: 12%</Text>
          <Text style={globalStyles.paragraph}>Etiqueta: No</Text>
          <Text style={globalStyles.paragraph}>Notas: {notas}</Text>
        </ScrollView>

        <Main />
      </View>

      <View></View>
    </View>
  );
}
