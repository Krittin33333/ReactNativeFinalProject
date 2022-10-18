import { View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from "react-native";
import React from "react";

import {NavigationContainer} from '@react-navigation/native'


const RulesScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ flex: 1}}>
      <ImageBackground source={require('../assets/ronaldo.jpg')} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 1,  alignItems: "center" }}>
          <View style={{padding:30}}>
          
            <View style = {styles.textbox}>
              <Image
                  source={require('C:/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
                  style={styles.sideMenuProfileIcon}
              />

              <Text style = {styles.text}>introduction</Text>
              <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
              <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
          </View>      
        </View>
      </ImageBackground>
      </View>
    </ScrollView>
  </SafeAreaView>
    
  )
}

export default RulesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "#111111",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 300,
    height: 250,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  textbox : {
    padding: 20,
    margin:10, 
    backgroundColor: "rgba(240,240,240,0.6)" ,
    borderRadius:30
  },
})