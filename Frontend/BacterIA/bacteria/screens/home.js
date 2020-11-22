import React, { useState, useContext } from "react";
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
import { dataContext } from "./provider/dataProvider";

export default function Home({ route, navigation }) {
  //const { nombre } = route.params;
  //const [settingsOpen, setSettingsOpen] = useState(false);
  //const [profileOpen, setProfileOpen] = useState(false);
  const [cultivoformOpen, setCultivoformOpen] = useState(false);

  const data = useContext(dataContext);

  const handlerOfPress = () => {
    //navigation.navigate("Cultivo");
    console.log("I'm gofd");
    //navigation.pop();
  };

  //borra a un campeonazo de la data
  const deleteHim = (key) => {
    console.log("arrivederci");
    setCultivos((prevCultivos) => {
      return prevCultivos.filter((cultivo) => cultivo.key != key);
    });
  };
  //



  //kreeping track del key de cada bacteriplaca
  const [keyCount, setKeyCount] = useState(0);
  const keyCountUp = () => setKeyCount((prevKeyCount) => prevKeyCount + 1);

  const [cultivos, setCultivos] = useState([
    /*
    {
      titulo: "Bacterias 1",
      fecha: "1-2-2003",
      colonias: "23",
      notas: "lorem ipsum",
      key: "0.1",
      uri de imagen or something: "djfksdjfhksdjfhk",
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
    },*/
  ]);

  const updateCultivos = (cultivosActualizados) => {
    setCultivos({
      return: cultivosActualizados
    });
    setCultivoformOpen(false);
  };

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
      <Text style={globalStyles.titleMiddle}>{data.userID}</Text>
      {/* El Modal de creación se abre y ahí cargás los datos del cultivo
      nuevo a agregar*/}
      {/**/}
      <Modal visible={cultivoformOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <CultivoForm addCultivo={addCultivo} updateCultivos={updateCultivos} />
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
        //onPress={handlerOfPress}
        />
      </View>
      {/* Render de los cultivos actuales en la librería */}
      <FlatList
        data={cultivos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Cultivo", item, handlerOfPress)}
          >
            <Card>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={globalStyles.titleText}>{item.titulo}</Text>
                  <Text style={globalStyles.paragraph}>{item.fecha}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View>
                    <MaterialIcons
                      name="create"
                      size={23}
                      style={globalStyles.cultivoButtons}
                    //onPress={(item.key) => {console.log("I'm gofd");}}
                    //onPress={deleteHim(item.key)}
                    //onPress={handlerOfPress}
                    />
                    <MaterialIcons
                      name="delete"
                      size={23}
                      style={globalStyles.cultivoButtons}
                      onPress={(key) =>
                        Alert.alert(
                          "¿Eliminar cultivo?",
                          "Una vez eliminado, no se puede recuperar",
                          [
                            {
                              text: "Cancelar",
                              style: "cancel",
                              onPress: () => console.log("OK Pressed"),
                            },
                            {
                              text: "Eliminar",
                              onPress: () => {
                                deleteHim(item.key);
                              },
                            },
                          ],
                          { cancelable: false }
                        )
                      }
                    //onPress={(item.key) => {console.log("I'm gofd");}}
                    //onPress={deleteHim(item.key)}
                    //onPress={handlerOfPress}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//<Text style={globalStyles.titleText}>Mis Cultivos</Text>
//<Button title="Cultivo N°1" onPress={pressHandler} />
