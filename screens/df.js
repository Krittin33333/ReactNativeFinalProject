import {View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'

const df = ({navigation}) => {
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

            <Text style = {styles.text}>DF (Defender), กองหลัง</Text>
            <Text > หมายถึงผู้เล่นที่ทำหน้าที่ป้องกันตำแหน่งของผู้เล่นจะอยู่หลังกองกลางและ คอยช่วยผู้รักษาประตูในการยิงประตูของฝ่ายตรงข้ามผู้ป้องกันปกติจะอยู่ในช่วงครึ่งหลัง เพื่อทำการตั้งรับการโจมตีจากคู่ต่อสู้อย่างไรก็ตามผู้ป้องกันที่ตัวสูงบางทีจะเคลื่อนไปข้างหน้า เพื่อทำหน้าที่เตะลูกมุมและการยิง free kioks ในการรุก</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/ramos.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>CB(Center Back) :</Text>
            <Text > CenterBackทำหน้าที่ป้องกันตรงกลางและป้องกันตนเองขัดขวางการทำประตูของคู่แข่ง ส่วนใหญ่2CBsจะถูกมอบหมายในการรักษาพื้นที่ที่ระบุไว้และบางคนก็จะได้อยู่ในตำแหน่งที่ทำคะแนน คนในตำแหน่งนี้จะมีทักษะในการอ่านเกมได้ดีเป็นคนแข็งแรง สูง นำทีมได้ดีและมีทักษะที่ดีในการแย่งบอล คนที่มีชื่อเสียงในตำแหน่งนี้คือ Hong Myung-bo,Ferdinand, Nesta, Cannavaro, John Terry, และ Senderos.</Text>
              <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/van.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>LB/RB(Left/Right Back) :</Text>
            <Text > Left/RightBackจะเล่นด้านข้างของสนามทำหน้าที่บล็อกคู่แข่งในการส่งบอลหรือการแทรกเข้ามา ผู้เล่นตรงนี้จะทำหน้าที่ส่งบอลให้ผู้เล่นฝั่งปีกและเคลียร์ทางให้ฝ่ายปีกทำการรุก ในขณะเดียวกันหากมีโอกาสก็จะทำการโจมตี คนที่มีชื่อเสียงในตำแหน่งนี้คือ Carlos, Ashley Cole, Zambrotta, Zanetti, Lee Yong-pyo, Garry Neville, และ Maxwell.</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/taa.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>LWB/RWB(Left/Right Wing Back) :</Text>
            <Text > Left / Right Wing Back หมายถึง ผู้ป้องกันด้านข้าง ซึ่งโฟกัสอยู่กับการรุก ตำแหน่งนี้จะทำหน้าที่ทั้งเป็นปีกและผู้ป้องกันด้านข้างในตำแหน่งนี้ผู้เล่นจะต้องวิ่งขึ้นลง ด้านข้างได้อย่างรวดเร็ว เพราะฉะนั้นจะต้องมีความแข็งแกร่งมาก คนเล่นป้องกันด้านข้างส่วนใหญ่เป็นปีกหลังคนที่มีชื่อเสียงในตำแหน่งนี้คือHeinze,Cafu, และ Oddo</Text>
           
          
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
                        navigation.navigate('gk')
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

export default df

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
        backgroundColor: "rgba(240,240,240,0.9)" ,
        borderRadius:30
      },
})