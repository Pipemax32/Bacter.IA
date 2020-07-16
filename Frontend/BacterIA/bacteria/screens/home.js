import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import CultivoForm from "./cultivoForm";
import Perfil from "./perfil";
import Opciones from "./opciones";

export default function Home({ route, navigation }) {
  //const pressHandler = () => {
  //navigation.navigate("Cultivo");
  //navigation.push("Cultivo");
  //};

  const { nombre } = route.params;
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cultivoformOpen, setCultivoformOpen] = useState(false);
  //El Modal está prendido?????? idk

  const [cultivos, setCultivos] = useState([
    //Acá se pasan los cultivos prehechos, probablemente se pueda hacer que no haya pero hay que averiguar :-PP
    {
      titulo: "Bacterias 1",
      fecha: "1-2-2003",
      colonias: "23",
      notas: "lorem ipsum",
      key: "1",
    },
    //La Key tiene que ser diferente entre todos los cultivos, averiguar forma de hacer que se agreguen siempre con Key nueva.
    {
      titulo: "Bacterias 2",
      fecha: "1-2-2003",
      colonias: "99",
      notas: "lorem ipsum",
      key: "2",
    },
    {
      titulo: "Bacterias 3",
      fecha: "1-2-2003",
      colonias: "23",
      notas: "lorem ipsum",
      key: "3",
    },
  ]);

  const addCultivo = (cultivo) => {
    cultivo.key = Math.random().toString();
    setCultivos((cultivosActuales) => {
      return [cultivo, ...cultivosActuales];
    });
    setCultivoformOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      {/* El Modal de creación se abre y ahí cargás los datos del cultivo nuevo a agregar */}
      <Modal visible={cultivoformOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            {/* <Text style={globalStyles.paragraph}>Hola me llamo Modal :-)</Text> */}
            <CultivoForm addCultivo={addCultivo} />
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...globalStyles.modalToggle,
                ...globalStyles.modalClose,
              }}
              onPress={() => setCultivoformOpen(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* El Modal de perfil se abre y ahí podés cerrar sesión */}
      <Modal visible={profileOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            {/* <Text style={globalStyles.paragraph}>Hola me llamo Modal :-)</Text> */}
            <Perfil />
            <View style={globalStyles.optionspart}>
              <Button
                title="Cerrar Sesión"
                color="#097154"
                onPress={() => {
                  setProfileOpen(false);
                  navigation.goBack();
                }}
              />
            </View>
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...globalStyles.modalToggle,
                ...globalStyles.modalClose,
              }}
              onPress={() => setProfileOpen(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* El Modal de settings se abre y ahí modificás todas las cosas necesarias */}
      <Modal visible={settingsOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            {/* <Text style={globalStyles.paragraph}>Hola me llamo Modal :-)</Text> */}
            <Opciones />
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...globalStyles.modalToggle,
                ...globalStyles.modalClose,
              }}
              onPress={() => setSettingsOpen(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Render de los cultivos actuales en la librería */}
      <FlatList
        data={cultivos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Cultivo", item)}
          >
            <Text style={globalStyles.titleText}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={globalStyles.optionspart}>
        <MaterialIcons
          name="account-circle"
          size={24}
          style={globalStyles.modalToggle}
          onPress={() => {
            //navigation.navigate("Mi Perfil");
            setProfileOpen(true);
          }}
        />
        {/* El toggle modal */}
        <MaterialIcons
          name="add"
          size={24}
          style={globalStyles.modalToggle}
          onPress={() => setCultivoformOpen(true)}
        />
        <MaterialIcons
          name="settings"
          size={24}
          style={globalStyles.modalToggle}
          onPress={() => {
            //navigation.navigate("Mi Perfil");
            setSettingsOpen(true);
          }}
        />
      </View>
    </View>
  );
}

//<Text style={globalStyles.titleText}>Mis Cultivos</Text>
//<Button title="Cultivo N°1" onPress={pressHandler} />
