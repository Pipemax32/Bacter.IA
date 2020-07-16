import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { globalStyles } from "../styles/global";
import Home from "../screens/home";
import Cultivo from "../screens/cultivo";
import Perfil from "../screens/perfil";
import LoginForm from "../screens/loginForm";

const { Navigator, Screen } = createStackNavigator();

//headerMode="none"

const Stack = () => (
  <Navigator
    initialRouteName="LoginForm"
    //Settings default para las pantallas
    screenOptions={{
      headerStyle: {
        backgroundColor: "#3AB795",
        height: 60,
      },

      headerTintColor: "#EEFFEE",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    {/* Esto abajo ya son las screens en sí ;-o */}
    <Screen name="Bacter.IA" component={LoginForm} />
    <Screen
      name="Mis Cultivos"
      component={Home}
      options={{
        headerLeft: null,
      }}
    />
    <Screen
      name="Cultivo"
      component={Cultivo}
      options={({ route }) => ({ title: route.params.titulo })}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack />
  </NavigationContainer>
);
