import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Home from "./home";
import { Formik } from "formik";

export default function LoginForm({ navigation }) {
  const [nombre, setNombre] = useState("");

  const changeNombre = (nuevoNombre) => {
    setNombre(() => {
      return [nuevoNombre];
    });
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Formik
            initialValues={{
              dni: "",
              contra: "",
            }}
            onSubmit={({ dni, contra }, { resetForm }) => {
              console.log(dni);
              console.log(contra);

              changeNombre(dni);
              resetForm();
              navigation.navigate("Mis Cultivos", nombre);
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={globalStyles.input}
                  placeholder="DNI"
                  onChangeText={props.handleChange("dni")}
                  value={props.values.dni}
                  keyboardType="numeric"
                />
                <TextInput
                  style={globalStyles.input}
                  placeholder="Contraseña"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("contra")}
                  value={props.values.contra}
                />
                <Button
                  title="Iniciar Sesión"
                  color="#097154"
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
