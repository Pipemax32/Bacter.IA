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

  //



  //kreeping track del key de cada bacteriplaca




  const updateCultivos = (cultivosActualizados) => {
    setCultivos({
      return: cultivosActualizados
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
            <CultivoForm updateCultivos={updateCultivos} setCultivoformOpen={setCultivoformOpen} />
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
        data={data.cultivos}
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
                                data.deleteHim(item.key);
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
