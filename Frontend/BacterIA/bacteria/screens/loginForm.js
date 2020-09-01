import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Home from "./home";
import { Formik } from "formik";
import Card from "../shared/card";

export default function LoginForm({ navigation }) {
  const [nombre, setNombre] = useState("");

  /*const changeNombre = (nuevoNombre) => {
    setNombre(() => {
      console.log("ok");
      return [nuevoNombre];
    });
  };*/

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Formik
            initialValues={{
              id: "",
              contra: "",
            }}
            onSubmit={({ id, contra }, { resetForm }) => {
              console.log(id);
              console.log(contra);

              //changeNombre(id);
              resetForm();
              navigation.navigate("AppTabs");
            }}
          >
            {(props) => (
              <View>
                <Card>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Correo electrónico"
                    onChangeText={props.handleChange("id")}
                    value={props.values.id}
                    keyboardType="email-address"
                  />
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={props.handleChange("contra")}
                    value={props.values.contra}
                  />
                </Card>
                <TouchableOpacity
                  style={globalStyles.button}
                  onPress={props.handleSubmit}
                >
                  <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={globalStyles.buttonAlt}
                  onPress={props.handleSubmit}
                >
                  <Text style={globalStyles.buttonTextAlt}>
                    Registrar Cuenta
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
