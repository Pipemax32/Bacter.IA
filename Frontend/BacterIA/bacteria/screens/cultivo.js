import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import PhotoComponent from "../shared/photoComponent";

export default function Cultivo({ route, navigation }) {
  //Acá hay que anotar todos los valores de los cultivos que se vayan a usar
  const { fecha, colonias, notas, key } = route.params;
  const [titulo, setTitulo] = useState(route.params.titulo);
  //fix this pls :)
  const handlerOfPress = () => route.params.handlerOfPress;

  //const [value, onChangeText] = React.useState("Useless Placeholder");

  return (
    //Esto es la plantilla para información de bacterias, que referencia los valores cargados arriba
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback
        /*onPress={handlerOfPress}*/ onPress={Keyboard.dismiss}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <PhotoComponent />
          {/*<Image
            style={{ height: 250, width: 250 }}
            source={require("../assets/TheAgar.jpg")}
          />*/}
        </View>
      </TouchableWithoutFeedback>
      <Card>
        <TextInput
          maxLength={16}
          style={globalStyles.titleMiddle}
          //onChangeText={(text) => onChangeText(titulo)}
          onChangeText={(val) => setTitulo(val)}
          value={titulo}
        />
        {/*<Text style={globalStyles.titleMiddle}>{titulo}</Text>*/}
        <ScrollView style={globalStyles.scrollView}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 10, flexDirection: "column" }}>
              <Text style={globalStyles.paragraphTitle}>Fecha:</Text>
              <Text style={globalStyles.paragraphTitle}>Colonias:</Text>
              <Text style={globalStyles.paragraphTitle}>Agrupaciones:</Text>
              <Text style={globalStyles.paragraphTitle}>Densidad:</Text>
              <Text style={globalStyles.paragraphTitle}>Etiqueta:</Text>
              <Text style={globalStyles.paragraphTitle}>Notas:</Text>

              <Text style={globalStyles.blankLine}> </Text>
            </View>

            <View
              style={{
                flex: 9,
                flexDirection: "column",
                //alignItems: "flex-end",
              }}
            >
              <Text style={globalStyles.paragraph}>{fecha}</Text>
              <Text style={globalStyles.paragraph}>{colonias}</Text>
              <Text style={globalStyles.paragraph}>Nunca</Text>
              <Text style={globalStyles.paragraph}>12%</Text>
              <Text style={globalStyles.paragraph}>No</Text>
              <Text style={globalStyles.paragraph}>{notas}</Text>

              <Text style={globalStyles.blankLine}> </Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </ScrollView>
      </Card>
    </View>
  );
}
