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
                  source={require('E:/reactPro/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
                  style={styles.sideMenuProfileIcon}
              />

              <Text style = {styles.text}>กติกาการเล่นฟุตบอล</Text>
              <Text >  ในกีฬาฟุตบอลมีกติกาสากลทั้งหมด 17 ข้อหลักที่มีการใช้ในฟุตบอลทั่วโลก โดยกติกาอาจมีการดัดแปลงบ้างสำหรับฟุตบอล เด็กและฟุตบอลหญิง</Text>
              <Text style = {styles.text2}>ผู้เล่น และกรรมการ</Text>
              <Text >   ในแต่ละทีมประกอบด้วยผู้เล่นสูงสุด 11 คนที่สามารถลงเล่นในสนาม โดยสามารถ มีผู้เล่นสำรองสามารถนั่งเพื่อรอเปลี่ยนตัว โดยในสิบเอ็ดคนนั้นจะต้องมี ผู้รักษาประตูหนึ่งคน ในการแข่งขันอย่างเป็นทางการจะมีกติกา เพิ่มว่าจะต้องมีผู้เล่นอย่างน้อย 7 คน(ในกรณีที่ผู้เล่นโดนใบแดง) เพื่อทำการแข่งขันได้ โดยผู้เล่นทุกคนยกเว้นผู้รักษาประตู ไม่สามารถ ใช้มือหรือแขนสัมผัสลูกฟุตบอลได้(แต่จะสามารถใช้ส่วนอื่นยกเว้นมือแขนเพราะจะFouls ทันทีเมื่อกรรมการเห็น แต่ถ้ากรรมการ ไม่เห็นก็อาจจะไม่Foulsก็ได้)</Text>
              <Text style = {styles.text2}>สนามฟุตบอล</Text>
              <Text >    สนามฟุตบอลและขนาดมาตรฐาน สนามฟุตบอลมีลักษณะเป็นรูปสี่เหลี่ยมจัตตุรัสมีความยาวระหว่าง 90-120 เมตร และความ กว้างระหว่าง 45-90 เมตร โดยเส้นขอบสนามของด้านยาวจะเรียกว่า "เส้นข้าง" ขณะที่ขอบสนามของด้านกว้างจะเรียกว่า "เส้นประตู" โดยคานประตูจะตั้งอยู่กึ่งกลางบนเส้นประตู โดยมีความสูง 2.44 เมตร (8 ฟุต) เหนือจากพื้นดิน และเสาประตูจะห่างกัน 7.3 เมตร (8 หลา) เสาและคานประตูจะต้องมีสีขาว ตาข่ายจะมีการขึงด้านหลังประตู แต่อย่างไรก็ตามตาข่ายประตูไม่ได้มีกำหนดไว้ในกติกาสากลด้านหน้าประตูจะเป็นบริเวณเขตโทษ ซึ่งแสดงถึงบริเวณที่ผู้รักษาประตูสามารถถือบอลได้ และยังคงใช้ในการเตะลูกโทษ</Text>
              <Image
                  source={require('E:/reactPro/ReactNativeFinalProject/assets/801.png')}
                  style={styles.sideMenuProfileIcon}
                />
              <Text style = {styles.text2}>ระยะเวลาการแข่งขัน</Text>
              <Text >    การแข่งขันจะแบ่งออกเป็นสองครึ่ง โดยครึ่งละ 45 นาที โดยเวลาการแข่งขันจะมีการนับตลอดเวลา แม้ว่าฟุตบอลจะถูกเตะออก นอกสนามและกรรมการสั่งให้หยุดเล่นก็ตาม ระหว่างครึ่งจะมีเวลาพักให้ 15 นาที กรรมการจะเป็นคนควบคุมเวลา และจะทำการ ทดเวลาบาดเจ็บในช่วงท้ายของแต่ละครึ่งเพื่อทดแทนเวลาที่เสียไป ระหว่างการเล่น โดยเมื่อจบการแข่งขันกรรมการจะทำการเป่า นกหวีดเพื่อหยุดการแข่งขัน</Text>
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
  text2: {
    color: "#111111",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left"
    
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