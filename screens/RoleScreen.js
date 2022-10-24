import { View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from "react-native";
import React from "react";

const RoleScreen = ({ navigation }) => {
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

            <Text style = {styles.text}>ตำแหน่งผู้เล่น</Text>
            <Text > ใน เกมฟุตบอล,ผู้เล่นทุกคนจะมีตำแหน่งที่เหมาะสมกับตัวเอง คนที่มีความรู้เรื่องฟุตบอลนั้นจะรู้ตำแหน่ง เช่น ST, CM, หรือCB แต่บางคนอาจจะไม่มีความรู้เรื่องฟุตบอลมาก่อน นั้นคือเหตุผลที่เราต้องรู้จักตำแหน่งต่างๆก่อน</Text>
            <Text > ในเกมสมัยใหม่ ตำแหน่งในฟุตบอลได้กำหนดไว้อย่างเคร่งครัดเหมือนรักบี้หรืออเมริกันฟุตบอล ถึงอย่างนั้นนักเตะส่วนใหญ่มักเล่นในตำแหน่งเดิมตลอดการค้าแข้งของพวกเขา เพราะในแต่ล่ะตำแหน่งนั้นใช้ทักษะและความสามารถทางร่างกายไม่เหมือนกัน แต่ก็มีนักฟุตบอลบางพวกที่เล่นได้หลายตำแหน่ง ซึ่งถึงเรียกว่า "นักเตะสารพัดประโยชน์"</Text>
           
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/plan.png')}
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
                  <Button
                    title='  Next  '
                    color={'#B5E67C'}
                    fontSize={20}
                    onPress={() => {
                      navigation.navigate('fw')
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

export default RoleScreen

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