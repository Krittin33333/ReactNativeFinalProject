import { StyleSheet, Text, View ,Button,TextInput ,TouchableOpacity} from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
  return (
   <>
    <View style ={styles.container}>
      <Text style = {styles.heading}>Thai-Nichi institute of Technology</Text>
      <Text style = {styles.textStyle}>Please insert your name to pass it to second screen</Text>
         <TextInput
            placeholder='Your name'
            style={{  width:200, padding: 10,margin:10, backgroundColor: '#DEDEDE' }}
           />

          <TextInput
            placeholder='Your name'
            style={{  width:200, padding: 10,margin:10, backgroundColor: '#DEDEDE' }}
           />
     
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
       
          
      }
});