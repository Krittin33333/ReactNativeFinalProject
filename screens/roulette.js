import {View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'

const roulette = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
    <ImageBackground source={require('../assets/Salah.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1,  alignItems: "center" }}>
        <View style={{padding:30}}>
        
          <View style = {styles.textbox}>
           

              <Text style = {styles.text}>Roulette</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/rollover.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.textheadData}>ท่าหมุนตัว (roulette)</Text>
            <Text style = {styles.textData}>    หลังจากที่ฝ่ายตรงข้ามกำลังจะจิ้มขาเข้ามาเพื่อแย่งบอลของคุณ เราสามารถที่จะหมุนตัวเพื่อกันและหลบคู่ต่อสู้ได้ ด้วยการดึงบอลกลับถอยหลังด้วยขาข้างใดข้างหนึ่ง ก่อนที่จะใช้อีกข้างเกี่ยวฟุตบอลเอาไว้พร้อมกับหมุนตัวหลบคู่ต่อสู้</Text>
            <Text style = {styles.textData}>    ท่านี้เป็นหนึ่งท่าไม้ตายที่หลายๆคนใช่ฝึก เพื่อเอาตัวรอดนอกจากจะเท่แล้วยังสามารถ พลิกสถานะการณ์ต่างๆได้หากฝึกอย่างชำนาญแล้ว</Text>
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
                      navigation.navigate('stepover')
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

export default roulette

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