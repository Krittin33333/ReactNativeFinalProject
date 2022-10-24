import { View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'

const InAndOut = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
    <ImageBackground source={require('../assets/Salah.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1,  alignItems: "center" }}>
        <View style={{padding:30}}>
        
          <View style = {styles.textbox}>
           

              <Text style = {styles.text}>In and Out</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/in and out.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.textheadData}>การเลี้ยงบอลอ้อมตัว (in and out)</Text>
            <Text style = {styles.textData}>    เป็นท่าที่นิยมใช้กันบ่อยมากในนักเตะที่มีความเร็วและความคล่องตัวสูง เพราะต้องใช้ความเร็วอย่างมากในการเลี้ยงบอลอ้อมตัวผู้เล่น วิธีในการใช้ท่านี้คือเลี้ยงบอลไปยังฝั่งตรงข้ามกันกับที่เราจะวิ่งไปเพื่อลวงให้ฝ่ายตรงข้ามสับสน และในช่วงที่ฝ่ายตรงข้ามกำลังจะก้าวขาแย่งบอล ให้ทำการเตะฟุตบอลไปในทิศทางคนละฝั่งกับขาที่ยื่นออกมา หลังจากเตะแล้วก็ให้วิ่งอ้อมตัวคู่ต่อสู้ไปในทิศตรงข้ามกับลูกบอลก่อนเก็บบอลแล้ววิ่งเลี้ยงบอลต่อไป</Text>
            <View style = {{flexDirection: "row",justifyContent: 'space-between',marginTop:20}}>
                  <Button
                    title='  Back  '
                    color={'#B5E67C'}
                    fontSize={20}
                    onPress={() => {
                        navigation.goBack()
                    }}
                    />
                  <Button
                    title='  Next  '
                    color={'#B5E67C'}
                    fontSize={20}
                    onPress={() => {
                      navigation.navigate('nut')
                    }}
                    />
                </View>
         
                 <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
                style={styles.sideMenuProfileIcon}
            />
          </View>
          
        </View>      
      </View>
    </ImageBackground>
    </View>
  </ScrollView>
</SafeAreaView>
  )
}

export default InAndOut

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
      textData:{
        color: "#111111",
        fontWeight: "bold",
        
      },
      textheadData:{
        color: "#111111",
        fontWeight: "bold",
        fontSize: 22,
        
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
        backgroundColor: "rgba(240,240,240,0.9)" ,
        borderRadius:30
      },
})