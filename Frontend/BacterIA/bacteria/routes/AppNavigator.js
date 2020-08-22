import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/home";
import Cultivo from "../screens/cultivo";
import Perfil from "../screens/perfil";
import LoginForm from "../screens/loginForm";
import Opciones from "../screens/opciones";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//headerMode="none"

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginForm"
      //Settings default para las pantallas
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3AB795",
          height: 60,
        },

        navigationOptions: {
          headerBackTitle: "Atrás",
        },

        headerTintColor: "#fEFefE",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* Esto abajo ya son las screens en sí ;-o */}
      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{
          headerLeft: null,
          title: "Bacter.IA",
        }}
      />
      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
        options={{
          headerLeft: null,
          title: " ",
          showLabel: false,
        }}
      />

      <Stack.Screen
        name="Cultivo"
        component={Cultivo}
        options={({ route }) => ({
          title: "Detalles de " + route.params.titulo,
        })}
        //options={{
        //  title: "Detalles de Cultivo",
        //}}
      />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Mis Cultivos"
      tabBarOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "#3AB795",
        inactiveTintColor: "#066D51",
        inactiveBackgroundColor: "#3AB795",
        showLabel: false,
      }}
      //Settings default para las pantallas
      /*screenOptions={{
      headerStyle: {
        backgroundColor: "#3AB795",
        height: 60,
      },

      headerTintColor: "#fEFefE",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}*/
    >
      {/* Esto abajo ya son las screens en sí ;-o */}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerLeft: null,

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mis Cultivos"
        component={Home}
        options={{
          headerLeft: null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="group-work" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={Opciones}
        options={{
          headerLeft: null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);
