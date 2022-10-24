import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  ImageBackground
} from "react-native";

import HomeScreen from "./HomeScreen";
import RulesScreen from "./RulesScreen";
import RoleScreen from "./RoleScreen";
import SkillScreen from "./SkillScreen";
import BookmarkScreen from "./BookmarkScreen";
import SettingSrceen from "./SettingSrceen";

import NewsScreen from "./NewsScreen";
import DetailScreen from "./DetailScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";



const Stack = createNativeStackNavigator();

function ProductStack(){
  return(
      <Stack.Navigator
      screenOptions = {{
        headerStyle:{
            backgroundColor:'#0096da'
        },
        headerTintColor:'#ffffff',
        headerTitleStyle:{
          fontWeigth:'bold'
        },
        headerShown: false
      
      }}
      >
      <Stack.Screen name='New' component={NewsScreen}/>
      <Stack.Screen name='Detaill' component={DetailScreen}/>

      
    </Stack.Navigator>

  )
}

function CustomDrawerContent(Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style ={{padding:15}}></View>
        <Image
          source={require('E:/reactPro/ReactNativeFinalProject/assets/FIFA_Flag_blue.png')}
          style={styles.sideMenuProfileIcon}
        />
      <View style ={{padding:15}}></View>

      <DrawerContentScrollView {...Props}>
        <DrawerItemList {...Props} />
        <DrawerItem
          label="Logout"
          onPress={() => navigation.navigate('Bookmark')}
        />
        {/* <DrawerItem label="toggleDrawer" onPress={() => Props.navigation.toggleDrawer()} /> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
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
          {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
          <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon:  ({color}) =>(
          <Image source={require('E:/reactPro/ReactNativeFinalProject/assets/Home.png')}
          style={{
          width: 30,
          height: 30,
          }}/>
          )
          }}/>
          <Drawer.Screen name="Rules" component={RulesScreen} options={{
          drawerIcon:  ({color}) =>(
          <Image source={require('E:/reactPro/ReactNativeFinalProject/assets/Rules.png')}
          style={{
          width: 30,
          height: 30,
          }}/>
          )
          }}/>
          <Drawer.Screen name="Role & Position" component={RoleScreen} 
          options={{
          drawerIcon:  ({color}) =>(
          <Image source={require('E:/reactPro/ReactNativeFinalProject/assets/Role.png')}
          style={{
          width: 30,
          height: 30,
          }}/>
          )
          }}/>
          <Drawer.Screen name="Skill Move" component={SkillScreen} 
          options={{
          drawerIcon:  ({color}) =>(
          <Image source={require('E:/reactPro/ReactNativeFinalProject/assets/Skill.png')}
          style={{
          width: 30,
          height: 30,
          }}/>
          )
          }}/>
         
         
          <Drawer.Screen name="News" component={ProductStack} options={{
          drawerIcon:  ({color}) =>(
          <Image source={require('E:/reactPro/ReactNativeFinalProject/assets/news2.png')}
          style={{
          width: 30,
          height: 30,
          }}/>
          )
          }}/>
          
      </Drawer.Navigator>
    
)
}

export default DrawerScreen

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
})