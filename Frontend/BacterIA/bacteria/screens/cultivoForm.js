import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

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
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Título"
              onChangeText={props.handleChange("titulo")}
              value={props.values.titulo}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="DD-MM-AA"
              onChangeText={props.handleChange("fecha")}
              value={props.values.fecha}
              keyboardType="numbers-and-punctuation"
            />
            <TextInput
              style={globalStyles.input}
              placeholder="N° de colonias"
              onChangeText={props.handleChange("colonias")}
              value={props.values.colonias}
              keyboardType="numeric"
            />
            <TextInput
              multiline
              textAlignVertical="top"
              maxLength={180}
              maxHeight={200}
              style={globalStyles.input}
              placeholder="Notas"
              onChangeText={props.handleChange("notas")}
              value={props.values.notas}
            />
            <Button
              title="Nuevo Cultivo"
              color="#097154"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
