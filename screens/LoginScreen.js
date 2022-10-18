import { StyleSheet, Text, View ,Button,TextInput ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
  return (
   <>
    <View style ={styles.container}>
    <View style ={{padding:30}}></View>
    <Image
          source={require('C:/ReactNativeFinalProject/assets/react_logo.png')}
          style={styles.sideMenuProfileIcon}
        />
        <View style ={{padding:30}}></View>
         <TextInput
            placeholder='Username'
            style={{  width:250, padding: 10,margin:10, backgroundColor: '#DEDEDE' }}
           />

          <TextInput
            placeholder='Password'
            style={{  width:250, padding: 10,margin:10, backgroundColor: '#DEDEDE' }}
           />
     <View style ={{padding:30}}></View>
      <Button
      title='             Login             '
      color={'#B5E67C'}
      fontSize={20}
      style={styles.buttonstyle}
      onPress={() => {
          //Pass params back to HomeScreen funchion 5555555555555555
          navigation.navigate('Home')
      }}
      />
      </View>
    </> 
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      },
  heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
      },
  textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
      },
  buttonstyle: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
       
          
      },
      sideMenuProfileIcon: {
        resizeMode: "center",
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: "center",
      },
      
});