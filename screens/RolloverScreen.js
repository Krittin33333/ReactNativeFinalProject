import { View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'

const RolloverScreen = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
    <ImageBackground source={require('../assets/Salah.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1,  alignItems: "center" }}>
        <View style={{padding:30}}>
        
          <View style = {styles.textbox}>
           

              <Text style = {styles.text}>Roll over</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/rollover.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.textheadData}>การปาดฟุตบอล (Roll over)</Text>
            <Text style = {styles.textData}>การปาดบอลจัดได้ว่าเป็นเทคนิคที่ง่ายที่สุดในการเลี้ยงฟุตบอลหลบคู่ต่อสู้ แต่ถึงจะเป็นเพียงทักษะเบื้องต้น แต่ก็ใช้ได้ดีเลยทีเดียว โดยท่านี้จะใช้ฝ่าเท้าในการเลี้ยงลูก เริ่มต้นด้วยการเลี้ยงบอลเข้าหาคู่ต่อสู้ และเมื่อฝ่ายตรงข้ามกำลังจะก้าวขาออกมาเพื่อแย่งก็ให้ทำการปาดลูกบอลด้วยฝ่าเท้า โดยปาดไปที่ด้านบนของลูกบอล จะหลบไปทางซ้ายหรือทางขวาแล้วแต่จังหวะและความถนัด</Text>
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

export default RolloverScreen

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