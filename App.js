import {
  StyleSheet,

} from "react-native";


import LoginScreen from "./screens/LoginScreen";
import DrawerScreen from "./screens/DrawerScreen";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import React from "react";
import BookmarkScreen from "./screens/BookmarkScreen";
import RolloverScreen from "./screens/RolloverScreen";
import SkillScreen from "./screens/SkillScreen";
import Scissor from "./screens/Scissor";
import Forward from "./screens/Forward";
import mf from "./screens/mf";
import df from "./screens/df";
import gk from "./screens/gk";
import roulette from "./screens/roulette";
import InAndOut from "./screens/InAndOut";
import NutMeg from "./screens/NutMeg";




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
        <Stack.Screen name='Bookmark' component={BookmarkScreen}/>
        <Stack.Screen name='rollover' component={RolloverScreen}/>
        <Stack.Screen name='stepover' component={Scissor}/>
        <Stack.Screen name='roulette' component={roulette}/>
        <Stack.Screen name='inandout' component={InAndOut}/>
        <Stack.Screen name='nut' component={NutMeg}/>
        <Stack.Screen name='skill' component={SkillScreen}/>
        <Stack.Screen name='fw' component={Forward}/>
        <Stack.Screen name='mf' component={mf}/>
        <Stack.Screen name='df' component={df}/>
        <Stack.Screen name='gk' component={gk}/>
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