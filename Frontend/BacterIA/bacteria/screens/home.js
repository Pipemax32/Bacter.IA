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
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import CultivoForm from "./cultivoForm";
import Perfil from "./perfil";
import Opciones from "./opciones";
import Card from "../shared/card";

export default function Home({ route, navigation }) {
  //const pressHandler = () => {
  //navigation.navigate("Cultivo");
  //navigation.push("Cultivo");
  //};

  //const { nombre } = route.params;
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cultivoformOpen, setCultivoformOpen] = useState(false);

  //kreeping track del key de cada bacteriplaca
  const [keyCount, setKeyCount] = useState(0);
  const keyCountUp = () => setKeyCount((prevKeyCount) => prevKeyCount + 1);

  const [cultivos, setCultivos] = useState([
    //Acá se pasan los cultivos prehechos, probablemente se pueda hacer que no haya pero hay que averiguar :-PP
    {
      titulo: "Bacterias 1",
      fecha: "1-2-2003",
      colonias: "23",
      notas: "lorem ipsum",
      key: "0.1",
    },
    //La Key tiene que ser diferente entre todos los cultivos, averiguar forma de hacer que se agreguen siempre con Key nueva.
    {
      titulo: "Bacterias 2",
      fecha: "1-2-2003",
      colonias: "99",
      notas: "lorem ipsum",
      key: "0.2",
    },
    {
      titulo: "Bacterias 3",
      fecha: "1-2-2003",
      colonias: "23",
      notas: "lorem ipsum",
      key: "0.3",
    },
  ]);

  const addCultivo = (cultivo) => {
    keyCountUp();
    cultivo.key = keyCount.toString(); //Math.random().toString(); jaja antes era rancio
    setCultivos((cultivosActuales) => {
      return [cultivo, ...cultivosActuales];
    });
    setCultivoformOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      {/* El Modal de creación se abre y ahí cargás los datos del cultivo
      nuevo a agregar*/}
      {/**/}
      <Modal visible={cultivoformOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <CultivoForm addCultivo={addCultivo} />
            <MaterialIcons
              name="highlight-off"
              size={48}
              style={{
                ...globalStyles.modalToggle,
              }}
              onPress={() => {
                setCultivoformOpen(false);
                Keyboard.dismiss();
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={globalStyles.optionspart}>
        {/* El toggle modal */}
        <MaterialIcons
          name="add-circle-outline"
          size={48}
          style={globalStyles.modalToggle}
          onPress={() => setCultivoformOpen(true)}
        />
      </View>
      {/* Render de los cultivos actuales en la librería */}
      <FlatList
        data={cultivos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Cultivo", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.titulo}</Text>
              <Text style={globalStyles.paragraph}>{item.fecha}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//<Text style={globalStyles.titleText}>Mis Cultivos</Text>
//<Button title="Cultivo N°1" onPress={pressHandler} />
