import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  //const pressHandler = () => {
  //navigation.navigate("Cultivo");
  //navigation.push("Cultivo");
  //};

  const [modalOpen, setModalOpen] = useState(false);
  //El Modal está prendido?????? idk

  const [cultivos, setCultivos] = useState([
    //Acá se pasan los cultivos prehechos, probablemente se pueda hacer que no haya pero hay que averiguar :-PP
    {
      title: "Kleptococo",
      date: "1-2-2003",
      body: "lorem ipsum",
      key: "1",
    },
    //La Key tiene que ser diferente entre todos los cultivos, averiguar forma de hacer que se agreguen siempre con Key nueva.
    {
      title: "Mininigitisi",
      date: "2-2-2003",
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Salmonella",
      date: "3-2-2003",
      body: "Salmonella Macoretta",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      {/* El Modal se abre y ahí cargás los datos del cultivo nuevo a agregar */}
      <Modal visible={modalOpen} animationType="slide">
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.paragraph}>Hola me llamo Modal :-)</Text>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
        </View>
      </Modal>

      {/* Render de los cultivos actuales en la librería */}
      <FlatList
        data={cultivos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Cultivo", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* El toggle */}
      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
    </View>
  );
}

//<Text style={globalStyles.titleText}>Mis Cultivos</Text>
//<Button title="Cultivo N°1" onPress={pressHandler} />
