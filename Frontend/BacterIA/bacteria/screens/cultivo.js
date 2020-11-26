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
  const { fecha, colonias, notas, key, densidad, cantidad, imgEdit, imgNoEdit, } = route.params;
  const [titulo, setTitulo] = useState(route.params.titulo);

  const [noEdit, setNoEdit] = useState(false)

  //const [value, onChangeText] = React.useState("Useless Placeholder");


  return (
    //Esto es la plantilla para información de bacterias, que referencia los valores cargados arriba
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback
        /*onPress={handlerOfPress}*/
        onPress={() => {
          setNoEdit(noEdit == true ? false : true)
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>

          {noEdit == false ? <Image style={{ height: 250, width: 250 }} source={{ uri: `data:image/gif;base64,${imgEdit}` }} />
            : <Image style={{ height: 250, width: 250 }} source={{ uri: `data:image/gif;base64,${imgNoEdit}` }} />}
        </View>
      </TouchableWithoutFeedback>
      <Card>
        <Text style={globalStyles.titleMiddle}>{titulo}</Text>
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
              <Text style={globalStyles.paragraph}>{cantidad}</Text>
              <Text style={globalStyles.paragraph}>No</Text>
              <Text style={globalStyles.paragraph}>{densidad}%</Text>
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
