import { View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'

const BookMarkL = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
    <ImageBackground source={require('../assets/Salah.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1,  alignItems: "center" }}>
        <View style={{padding:30}}>
        
          <View style = {styles.textbox}>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
                style={styles.sideMenuProfileIcon}
            />

            <Text style = {styles.text}>เทคนิคฟุตบอล</Text>
            <Text style = {styles.textData}>การเลี้ยงฟุตบอลถือได้ว่าเป็นหนึ่งในทักษะที่สำคัญมากในการเล่นกีฬาฟุตบอล และเป็นสิ่งที่นักฟุตบอลทุกคนจำเป็นจะต้องฝึกฝนเอาไว้ให้ชำนาญเพราะ ถึงคุณจะเก่งอะไรแค่ไหน แต่ไม่สามารถเลี้ยงฟุตบอลผ่านคู่ต่อสู้ไปได้เลยคุณก็จะกลายเป็นจุดอ่อนของทีมไปโดยทันที ดังนั้นเรามาดูกันครับว่าการเลี้ยงฟุตบอลหลบคู่ต่อสู้นั้นมีอะไรและทำอย่างไรบ้าง</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/rollover.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.textheadData}>การปาดฟุตบอล (Roll over)</Text>
            <Text style = {styles.textData}>การปาดบอลจัดได้ว่าเป็นเทคนิคที่ง่ายที่สุดในการเลี้ยงฟุตบอลหลบคู่ต่อสู้ แต่ถึงจะเป็นเพียงทักษะเบื้องต้น แต่ก็ใช้ได้ดีเลยทีเดียว โดยท่านี้จะใช้ฝ่าเท้าในการเลี้ยงลูก เริ่มต้นด้วยการเลี้ยงบอลเข้าหาคู่ต่อสู้ และเมื่อฝ่ายตรงข้ามกำลังจะก้าวขาออกมาเพื่อแย่งก็ให้ทำการปาดลูกบอลด้วยฝ่าเท้า โดยปาดไปที่ด้านบนของลูกบอล จะหลบไปทางซ้ายหรือทางขวาแล้วแต่จังหวะและความถนัด</Text>
            <Button
                title='             bookmark             '
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.navigate('Bookmark',{mark:'hello'})   
                }}
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

export default BookMarkL

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
        backgroundColor: "rgba(240,240,240,0.6)" ,
        borderRadius:30
      },
})