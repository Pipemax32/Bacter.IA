import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Modal,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import Home from "./home";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import RegistroForm from "./registroForm";
import { dataContext } from "./provider/dataProvider";

export default function LoginForm({ navigation }) {

  const data = useContext(dataContext);

  const [registroformOpen, setRegistroformOpen] = useState(false);

  const [cuentas, setCuentas] = useState([
    /*
    {
      
    }*/
  ]);
  const [keyCount, setKeyCount] = useState(0);
  const keyCountUp = () => setKeyCount((prevKeyCount) => prevKeyCount + 1);

  const addCuenta = (cuenta) => {
    keyCountUp();
    cuenta.key = keyCount.toString(); //Math.random().toString(); jaja antes era rancio
    setCuentas((cuentasActuales) => {
      return [cuenta, ...cuentasActuales];
    });
    setRegistroformOpen(false);
  };

  /*const changeNombre = (nuevoNombre) => {
    setNombre(() => {
      console.log("ok");
      return [nuevoNombre];
    });
  };*/

  return (
    <View style={globalStyles.container}>
      <Modal visible={registroformOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <RegistroForm addCuenta={addCuenta} />
            <MaterialIcons
              mail="highlight-off"
              size={48}
              style={{
                ...globalStyles.modalToggle,
              }}
              onPress={() => {
                setRegistroformOpen(false);
                Keyboard.dismiss();
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Formik
            initialValues={{
              mail: "",
              contra: "",
            }}
            onSubmit={({ mail, contra }, { resetForm }) => {
              console.log(mail);
              console.log(contra);


              data.setNombre(mail);
              //changeNombre(id);
              resetForm();
              navigation.navigate("AppTabs", {
              });
              /*Alert.alert(
                "Buen día",
                "Importe una nueva foto para empezar a utilizar Bacter.IA",
                [
                  {
                    text: "Continuar",
                    //style: "cancel",
                    //onPress: () => console.log("OK Pressed"),
                  },
                ],
                { cancelable: false }
              );*/
            }}
          >
            {(props) => (
              <View>
                <Card>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Correo electrónico"
                    onChangeText={props.handleChange("mail")}
                    value={props.values.mail}
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
                  onPress={() => setRegistroformOpen(true)}
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
