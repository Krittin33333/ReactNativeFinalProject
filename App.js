import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import RulesScreen from "./screens/RulesScreen";
import RoleScreen from "./screens/RoleScreen";
import SkillScreen from "./screens/SkillScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import SettingSrceen from "./screens/SettingSrceen";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
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

function CustomDrawerContent(Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style ={{padding:15}}></View>
        <Image
          source={require('C:/ReactNativeFinalProject/assets/FIFA_Flag_blue.png')}
          style={styles.sideMenuProfileIcon}
        />
      <View style ={{padding:15}}></View>

      <DrawerContentScrollView {...Props}>
        <DrawerItemList {...Props} />
        <DrawerItem
          label="CloseDrawer"
          onPress={() => Props.navigation.closeDrawer()}
        />
        {/* <DrawerItem label="toggleDrawer" onPress={() => Props.navigation.toggleDrawer()} /> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(Props) => <CustomDrawerContent {...Props} />}
      screenOptions={{
        drawerStyle: {
          width: 300,
          alignItems : 'center',
          
        },
        headerStyle:{backgroundColor:'#FFD66D'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold'}
      }}
    >
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        drawerIcon:  ({color}) =>(
        <Image source={require('C:/ReactNativeFinalProject/assets/Home.png')}
        style={{
        width: 30,
        height: 30,
        }}/>
        )
      }}/>
      <Drawer.Screen name="Rules" component={RulesScreen} options={{
        drawerIcon:  ({color}) =>(
        <Image source={require('C:/ReactNativeFinalProject/assets/Rules.png')}
        style={{
        width: 30,
        height: 30,
        }}/>
        )
      }}/>
      <Drawer.Screen name="Role & Position" component={RoleScreen} 
      options={{
        drawerIcon:  ({color}) =>(
        <Image source={require('C:/ReactNativeFinalProject/assets/Role.png')}
        style={{
        width: 30,
        height: 30,
        }}/>
        )
      }}/>
      <Drawer.Screen name="Skill Move" component={SkillScreen} 
      options={{
        drawerIcon:  ({color}) =>(
        <Image source={require('C:/ReactNativeFinalProject/assets/Skill.png')}
        style={{
        width: 30,
        height: 30,
        }}/>
        )
      }}/>
      <Drawer.Screen name="Bookmark" component={BookmarkScreen} 
      options={{
        drawerIcon:  ({color}) =>(
        <Image source={require('C:/ReactNativeFinalProject/assets/Bookmark.png')}
        style={{
        width: 30,
        height: 30,
        }}/>
        )
      }}/>
      <Drawer.Screen name="Setting" component={SettingSrceen} 
      options={{
        drawerIcon:  ({color}) =>(
        <Image source={require('C:/ReactNativeFinalProject/assets/Setting.png')}
        style={{
        width: 30,
        height: 30,
        }}/>
        )
      }}/>
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 250,
    height: 200,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});
