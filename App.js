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

import HomeScreen from "./screens/HomeScreen";
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
import { Alert } from "react-native";



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(26,45,85)",
    background: "#F2F2F2",
    
   
  },
};

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
const Stack = createNativeStackNavigator();

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
      {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
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

// function MyLogin() {
//   return (
//     <>
//     <View style={{ flex: 1}}>
//       <ImageBackground source={require('C:/ReactNativeFinalProject/assets/LoginBG.png')} resizeMode="cover" style={styles.image}>
//         <View style ={styles.container2}>
//           <Image
//                 source={require('C:/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
//                 style={styles.sideMenuProfileIcon}
//               />
            
//               <TextInput
//                   placeholder='Username'
//                   style={styles.textbox}
//                 />

//                 <TextInput
//                   placeholder='Password'
//                   style={styles.textbox}
//                 />
//           <View style ={{padding:30}}></View>
//             <Button
//                 title='             Login             '
//                 color={'#B5E67C'}
//                 fontSize={20}
//                 style={styles.buttonstyle}
//                 onPress={() => {
                  
                    
//                 }}
//                 />
//           </View>
//         </ImageBackground>
//       </View>
//     </> 
//   )
// }

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      {/* <MyLogin/> */}
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
//   container2: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 20,
//     },
// heading: {
//     fontSize: 25,
//     textAlign: 'center',
//     marginVertical: 10,
//     },
// textStyle: {
//     textAlign: 'center',
//     fontSize: 16,
//     marginVertical: 10,
//     },
// buttonstyle: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'red',         
//     },
//     sideMenuProfileIcon: {
//       resizeMode: "center",
//       width: 300,
//       height: 250,
//       borderRadius: 100 / 2,
//       alignSelf: "center",
//     },
// image: {
//       flex: 1,
//       justifyContent: "center"
//     },
// textbox : {
//   width:275, 
//   padding: 10,
//   margin:10, 
//   backgroundColor: '#DEDEDE' ,
//   borderRadius:5 
// },
  
});
