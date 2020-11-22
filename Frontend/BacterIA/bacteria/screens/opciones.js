import React, { useState } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

//import ImagePicker from "react-native-image-picker";

export default function Opciones() {
  //image
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  //{
  /*state = {
    pickedImage: null,
  };

  reset = () => {
    this.setState({
      pickedImage: null,
    });
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      { title: "Pick an Image", maxWidth: 800, maxHeight: 600 },
      (res) => {
        if (res.didCancel) {
          console.log("User cancelled!");
        } else if (res.error) {
          console.log("Error", res.error);
        } else {
          this.setState({
            pickedImage: { uri: res.uri },
          });
        }
      }
    );
  };*/
  // }

  //<Image source={this.state.pickedImage} />
  //<TouchableOpacity onPress={this.pickImageHandler}></TouchableOpacity>
  //resetHandler = () => {
  //  this.reset();
  //};

  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Text style={globalStyles.titleMiddle}>Configuración</Text>
          <View style={{ height: 20 }}></View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <View style={{ flex: 9 }}>
              <Text style={globalStyles.paragraphTitle}>Opción 1</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Switch
                trackColor={{ false: "#767577", true: "#3AB795" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style={{ flex: 1 }}></View>
          </View>
        </View>
      </Card>
    </View>
  );
}
