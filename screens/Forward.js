import {View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'

const Forward = ({ navigation }) => {
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

            <Text style = {styles.text}>FW (Forward),กองหน้า</Text>
            <Text > ผู้เล่นท่านนี้จะทำหน้าที่รุกในการแข่งขัน และยังเป็นผู้เล่นที่มีตำแหน่งใกล้ประตูของคู่แข่งมากที่สุด รายละเอียดของตำแหน่งตามด้านล่าง</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/peedo.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>ST(Striker) :</Text>
            <Text > แนวรุกตรงกลางและเป็นตำแหน่งที่ใกล้ประตูของคู่แข่งมากที่สุดเพื่อจะทำให้บอลเข้าประตู คนที่ประจำตำแหน่งนี้นั้นจะไม่ทำหน้าที่ป้องกัน นักกีฬาที่มีอยู่ในตำแหน่งนี้ คือ Shevchenko, Ronaldo, van Nistelrooy, Saha, Eto'o, Owen, Solskajaer, Lee Dong-kuk, และAhn Jung-hwan.</Text>
              <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/robben.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>LWF/RWF(Left/Right Wing Forward) :</Text>
            <Text > รุกปีกซ้ายและขวา หมายถึงผู้โจมตีด้านดังกล่าว นักกีฬาที่มีอยู่ในตำแหน่งนี้ คือ Giggs, Ronaldo, Robben, Joaquin, and Seol Ki-hyun.</Text>
           
          
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
                        navigation.navigate('mf')
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

export default Forward

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