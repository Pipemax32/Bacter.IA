import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Perfil({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={{ height: 215 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 3, flexDirection: "column" }}>
              <Image
                style={{ height: 100, width: 100 }}
                source={require("../assets/blank-profile.png")}
              />
            </View>
            <View style={{ flex: 2, flexDirection: "column" }}>
              <Text style={globalStyles.paragraphTitle}>Nombre:</Text>
              <Text style={globalStyles.paragraphTitle}>Apellido:</Text>
              <Text style={globalStyles.paragraphTitle}>DNI:</Text>

              <Text style={globalStyles.blankLine}> </Text>
            </View>

            <View style={{ flex: 2, flexDirection: "column" }}>
              <Text style={globalStyles.paragraph}>Fulan</Text>
              <Text style={globalStyles.paragraph}>Alfulani</Text>
              <Text style={globalStyles.paragraph}>55550123</Text>

              <Text style={globalStyles.blankLine}> </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 3, flexDirection: "column" }}>
              <Text style={globalStyles.paragraphTitle}>Ocupación:</Text>
              <Text style={globalStyles.paragraphTitle}>Permisos:</Text>

              <Text style={globalStyles.blankLine}> </Text>
            </View>

            <View style={{ flex: 5, flexDirection: "column" }}>
              <Text style={globalStyles.paragraph}>Trabajadorx</Text>
              <Text style={globalStyles.paragraph}>Sí</Text>

              <Text style={globalStyles.blankLine}> </Text>
            </View>
          </View>
        </View>
      </Card>
      {/*<Text>Número de DNI: {nombre2}</Text>*/}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => {
          //setProfileOpen(false);
          navigation.pop();
        }}
      >
        <Text style={globalStyles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
