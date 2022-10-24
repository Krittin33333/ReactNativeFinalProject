import {View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'

const NutMeg = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
    <ImageBackground source={require('../assets/Salah.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1,  alignItems: "center" }}>
        <View style={{padding:30}}>
        
          <View style = {styles.textbox}>
           

              <Text style = {styles.text}>Nut meg</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/nutmeg.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.textheadData}>เตะบอลรอดหว่างขา (Nut meg, Panna)</Text>
            <Text style = {styles.textData}>การเตะลอดหว่างขอก็จัดได้ว่าเป็นหนึ่งในเทคนิคเลี้ยงบอลนะครับ โดยอาศัยจังหวะที่คู่ต่อสู้พยายามจะแย่งบอลแล้วมีช่องว่างใต้หว่างขามากพอก็ให้ทำการเตะบอลลอดหว่างขอทันที ส่วนตัวเราก็วิ่งอ้อมตัวคู่ต่อสู้ไปเพื่อเก็บบอล การเลี้ยงแบบนี้อาจจะใช้ยากซักหน่อยเพราะจังหวะมีไม่มากนัก แต่ถ้าได้จังหวะแล้วล่ะก็เป็นท่าที่มีประโยชน์มากเลยล่ะ</Text>
            <View style = {{flexDirection: "row",justifyContent: 'space-between',marginTop:20}}>
                  <Button
                    title='  Back  '
                    color={'#B5E67C'}
                    fontSize={20}
                    onPress={() => {
                        navigation.goBack()
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

export default NutMeg

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