import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { TextInput } from "react-native-paper";
import { dataContext } from "./provider/dataProvider";

export default function Perfil({ navigation }) {

  const data = useContext(dataContext);

  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={{ height: 230, alignItems: "center" }}>
          <Image
            style={{ height: 100, width: 100 }}
            source={require("../assets/blank-profile.png")}
          />
          <Text style={globalStyles.titleMiddle}>{data.nombre}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
              <Text style={globalStyles.paragraphTitle}>DNI:</Text>
              <Text style={globalStyles.paragraphTitle}>Ocupación:</Text>
              <Text style={globalStyles.paragraphTitle}>Permisos: </Text>
            </View>
            <View style={{ flex: 3, alignItems: "flex-end" }}>
              <Text style={globalStyles.paragraph}>55550123</Text>
              <Text style={globalStyles.paragraph}>Trabajadorx</Text>
              <Text style={globalStyles.paragraph}>Sí</Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </View>
      </Card>
      {/*<Text>Número de DNI: {nombre2}</Text>*/}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => {
          //setProfileOpen(false);
          navigation.pop();
          Alert.alert(
            "Sesión cerrada",
            "¡Hasta pronto!",
            [
              {
                text: "Aceptar",
                //style: "cancel",
                //onPress: () => console.log("OK Pressed"),
              },
            ],
            { cancelable: false }
          );
          //_hred = "#cc00cc";
        }}
      >
        <Text style={globalStyles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
      <Text style={globalStyles.titleMiddle}>{data.userID}</Text>
      <TextInput
        maxLength={16}
        style={globalStyles.input}
        placeholder="2"
        onChangeText={text => data.setUserID(text)}
        value={data.userID}
      />
    </View>
  );
}
