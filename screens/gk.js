import {View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'

const gk = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
    <ImageBackground source={require('../assets/Kde.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1,  alignItems: "center" }}>
        <View style={{padding:30}}>
        
          <View style = {styles.textbox}>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
                style={styles.sideMenuProfileIcon}
            />

            <Text style = {styles.text}>GK (Goalkeeper), ผู้รักษาประตู</Text>
            <Text > ผู้รักษาประตูทำหน้าที่ป้องกันการทำประตูของฝ่ายตรงข้ามโดยตรง เป็นผู้เล่นคนเดียวที่ สามารถใช้มือ แต่สิทธิ์นี้ก็มีขอบเขตในตำแหน่งจุดโทษเท่านั้น ดังนั้นผู้รักษาประตูจะ แต่งตัวแตกต่างจากสมาชิกคนอื่นๆ เพื่อความแตกต่าง ผู้รักษาประตูทำการป้องกันลุกยิง เพราะฉะนั้นคนในตำแหน่งนี้จึงต้องเป็นคนแข็งแรงสูง มีทักษะในการกระโดด การตัดสินใจ ความคล่องแคล่ว การบล็อกลูกบอลในอากาศ ป้องกัน และทักษะในการจัดวางตำแหน่ง คนที่มีชื่อเสียงในตำแหน่งนี้คือ</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/neuer.jpg')}
                style={styles.sideMenuProfileIcon}
            />
           
           
          
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
          </View>
        </View>      
      </View>
    </ImageBackground>
    </View>
  </ScrollView>
</SafeAreaView>
  )
}

export default gk

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
      text2: {
        color: "#111111",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "left",
        
        
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