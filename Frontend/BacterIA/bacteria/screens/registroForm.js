import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import Card from "../shared/card";
import { set } from "react-native-reanimated";

export default function registroForm({ addCuenta }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          correo: "",
          contrasenia: "",
          contrasenia2: "",
        }}
        onSubmit={(values) => {
          addCuenta({ values });
          console.log(values);
          Keyboard.dismiss;
        }}
      >
        {(props) => (
          <View>
            <Card>
              <Text style={globalStyles.titleMiddle}>Ingrese sus datos</Text>
              <TextInput
                //maxLength={20}
                style={globalStyles.input}
                placeholder="Correo electrónico"
                onChangeText={props.handleChange("correo")}
                value={props.values.titulo}
                secureTextEntry={false}
                keyboardType="email-address"
              />
              <TextInput
                //maxLength={30}
                style={globalStyles.input}
                placeholder="Contraseña"
                onChangeText={props.handleChange("contrasenia")}
                value={props.values.fecha}
                secureTextEntry={true}
              />
              <TextInput
                //maxLength={30}
                style={globalStyles.input}
                placeholder="Confirmar contraseña"
                onChangeText={props.handleChange("contrasenia2")}
                value={props.values.colonias}
                secureTextEntry={true}
              />
            </Card>
            <TouchableOpacity
              style={globalStyles.button}
              onPress={() => {
                if (
                  props.values.correo == "" ||
                  props.values.contrasenia == "" ||
                  props.values.contrasenia2 == ""
                ) {
                  Alert.alert(
                    "Parámetro vacío",
                    "Por favor complete todos los parámetros",
                    [
                      {
                        text: "Aceptar",
                        //style: "cancel",
                        //onPress: () => console.log("OK Pressed"),
                      },
                    ],
                    { cancelable: false }
                  );
                } else if (
                  props.values.contrasenia != props.values.contrasenia2
                ) {
                  Alert.alert(
                    "Contraseñas distintas",
                    "Vuelva a escribir su contraseña para que ambos campos sean iguales",
                    [
                      {
                        text: "Aceptar",
                        //style: "cancel",
                        //onPress: () => console.log("OK Pressed"),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  props.handleSubmit();
                  Alert.alert(
                    "Completo",
                    "Cuenta registrada exitosamente",
                    [
                      {
                        text: "Aceptar",
                        //style: "cancel",
                        //onPress: () => console.log("OK Pressed"),
                      },
                    ],
                    { cancelable: false }
                  );
                }
              }}
            >
              <Text style={globalStyles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
