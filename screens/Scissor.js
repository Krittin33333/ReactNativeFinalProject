import {  View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'

const Scissor = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
    <ImageBackground source={require('../assets/Salah.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1,  alignItems: "center" }}>
        <View style={{padding:30}}>
        
          <View style = {styles.textbox}>
           

              <Text style = {styles.text}>Step Over</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/rollover.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.textheadData}>สับขาหลอก (step over, scissor)</Text>
            <Text style = {styles.textData}>    การสับขาหลอกเป็นเทคนิคการเลี้ยงบอลหลบที่ใช้กันอย่างแพร่หลายมาก นักเตะหลายคนก็นิยมท่านี้มาก วิธีการทำนั่นคือเมื่อเลี้ยงบอลเข้าจู่โจมฝ่ายตรงข้ามแล้ว ทำให้การสับขาหลอกด้วยการ ก้าวข้ามบอลเป็นวงกลมสลับไปสลับมา โดยใช้ขาทั้ง 2 ข้าง หรือจะใช้ข้างเดียวก็ได้ เพื่อหลอกให้ฝ่ายตรงข้ามเสียจังหวะ ก่อนที่จะกระชากบอลไปในทิศทางที่เหมาะสมเพื่อหลบคู่ต่อสู้</Text>
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
                      navigation.navigate('roulette')
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

export default Scissor

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