import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import Card from "../shared/card";
import { set } from "react-native-reanimated";

export default function CultivoForm({ addCultivo }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          titulo: "",
          fecha: "",
          colonias: "",
          /*agrupaciones: "", densidad: "", etiqueta: "", */
          notas: "",
        }}
        onSubmit={(values) => {
          addCultivo(values);
          console.log(values);
          Keyboard.dismiss;
        }}
      >
        {(props) => (
          <View>
            <Card>
              <TextInput
                maxLength={16}
                style={globalStyles.input}
                placeholder="Título"
                onChangeText={props.handleChange("titulo")}
                value={props.values.titulo}
              />
              <TextInput
                maxLength={10}
                style={globalStyles.input}
                placeholder="DD-MM-AA"
                onChangeText={props.handleChange("fecha")}
                value={props.values.fecha}
                keyboardType="numbers-and-punctuation"
              />
              <TextInput
                maxLength={10}
                style={globalStyles.input}
                placeholder="N° de colonias"
                onChangeText={props.handleChange("colonias")}
                value={props.values.colonias}
                keyboardType="numeric"
              />
              <TextInput
                multiline
                textAlignVertical="top"
                maxLength={120}
                maxHeight={120}
                style={globalStyles.input}
                placeholder="Notas"
                onChangeText={props.handleChange("notas")}
                value={props.values.notas}
              />
            </Card>
            <TouchableOpacity
              style={globalStyles.button}
              onPress={() => {
                //setProfileOpen(false);
                if (props.values.titulo == "") {
                  props.values.titulo = "Sin nombre";
                }
                if (props.values.fecha == "") {
                  props.values.fecha = "No declarado";
                }
                if (props.values.colonias == "") {
                  props.values.colonias = "No declarado";
                }
                if (props.values.notas == "") {
                  props.values.notas = " ";
                }
                props.handleSubmit();
              }}
            >
              <Text style={globalStyles.buttonText}>Nuevo Cultivo</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
