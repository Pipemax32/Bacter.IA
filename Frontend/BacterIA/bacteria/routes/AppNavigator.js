import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { globalStyles } from "../styles/global";
import Home from "../screens/home";
import Cultivo from "../screens/cultivo";

const { Navigator, Screen } = createStackNavigator();

//headerMode="none"

const HomeNavigator = () => (
  <Navigator
    initialRouteName="Home"
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
    <Screen name="Mis Cultivos" component={Home} />
    <Screen
      name="Cultivo"
      component={Cultivo}
      options={({ route }) => ({
        title: route.params.title,
      })}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
