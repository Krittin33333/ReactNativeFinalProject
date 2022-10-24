import { StyleSheet, Text, View ,Button,TextInput ,TouchableOpacity,Image,ImageBackground} from 'react-native'

import React,{ useState } from 'react'







const LoginScreen = ({ navigation }) => {

const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
var check = username;
var check2 = password;
(check === '' || check2 === '')
?check = 'login'
:check = 'Drawermain'
  return (
   <>
    <View style={{ flex: 1}}>
      <ImageBackground source={require('../assets/LoginBG.png')} resizeMode="cover" style={styles.image}>
        <View style ={styles.container2}>
          <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
                style={styles.sideMenuProfileIcon}
              />
           
              <TextInput
                  placeholder='Username'
                  style={styles.textbox}
                  onChangeText={(val) => setUsername(val)}
                />

                <TextInput
                  
                  placeholder='Password'
                  secureTextEntry
                  autoCorrect={false}
                  style={styles.textbox}
                  onChangeText={(val) => setPassword(val)}
                />
          <View style ={{padding:30}}></View>
            <Button
                title='             Login             '
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.navigate(check)
                    
                }}
                />
                
          </View>
        </ImageBackground>
      </View>
    </> 
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container2: {
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
        width: 300,
        height: 250,
        borderRadius: 100 / 2,
        alignSelf: "center",
      },
  image: {
        flex: 1,
        justifyContent: "center"
      },
  textbox : {
    width:275, 
    padding: 10,
    margin:10, 
    backgroundColor: '#DEDEDE' ,
    borderRadius:5 
  },
});