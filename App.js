import {
  StyleSheet,

} from "react-native";


import LoginScreen from "./screens/LoginScreen";
import DrawerScreen from "./screens/DrawerScreen";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import React from "react";




const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(26,45,85)",
    background: "#F2F2F2",
    
   
  },
};


const Stack = createNativeStackNavigator();

function MyLogin() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false}}>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='Drawermain' component={DrawerScreen}/>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyLogin/>
      {/* <MyDrawer/> */}
      {/* <DrawerScreen/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});