import React from "react";
import { View, ScrollView, Text } from "react-native";
import { globalStyles } from "../styles/global";
//import PhotoMain from "../shared/photoMain";
import Card from "../shared/card";

export default function Cultivo({ route, navigation }) {
  //Acá hay que anotar todos los valores de los cultivos que se vayan a usar
  const { titulo, fecha, colonias, notas, key } = route.params;

  return (
    //Esto es la plantilla para información de bacterias, que referencia los valores cargados arriba
    <View style={globalStyles.container}>
      <View style={{ flex: 1 }}></View>
      <Card>
        <Text style={globalStyles.titleMiddle}>{titulo}</Text>
        <ScrollView style={globalStyles.scrollView}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 2, flexDirection: "column" }}>
                <Text style={globalStyles.paragraphTitle}>Fecha:</Text>
                <Text style={globalStyles.paragraphTitle}>Colonias:</Text>
                <Text style={globalStyles.paragraphTitle}>Agrupaciones:</Text>
                <Text style={globalStyles.paragraphTitle}>Densidad:</Text>
                <Text style={globalStyles.paragraphTitle}>Etiqueta:</Text>
                <Text style={globalStyles.paragraphTitle}>Notas:</Text>

                <Text style={globalStyles.blankLine}> </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <Text style={globalStyles.paragraph}>{fecha}</Text>
                <Text style={globalStyles.paragraph}>{colonias}</Text>
                <Text style={globalStyles.paragraph}>Nunca</Text>
                <Text style={globalStyles.paragraph}>12%</Text>
                <Text style={globalStyles.paragraph}>No</Text>
                <Text style={globalStyles.paragraph}>{notas}</Text>

                <Text style={globalStyles.blankLine}> </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Card>
      {/*<PhotoMain/>*/}
    </View>
  );
}
