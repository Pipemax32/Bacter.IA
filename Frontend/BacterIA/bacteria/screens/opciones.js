import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

//import ImagePicker from "react-native-image-picker";

export default function Opciones() {
  //image

  {
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
  }

  //<Image source={this.state.pickedImage} />
  //<TouchableOpacity onPress={this.pickImageHandler}></TouchableOpacity>
  //resetHandler = () => {
  //  this.reset();
  //};

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Mis Opciones</Text>
      </Card>
    </View>
  );
}
