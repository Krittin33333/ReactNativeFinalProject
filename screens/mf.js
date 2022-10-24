import { View, Text, Button ,ImageBackground,StyleSheet,Image,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'

const mf = ({navigation}) => {
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

            <Text style = {styles.text}>MF (Midfielder), กลองกลาง</Text>
            <Text > ผู้เล่นกลุ่มนี้จะเป็นทั้งผู้รุกและผู้ป้องกันเราจะเป็นตัวเชื่อมระหว่างผู้รุกและผู้ป้องกันแต่คน ในตำแหน่งกองกลางนี้ส่วนใหญ่จะหน้าที่รุกมากกว่าป้องกันกองกลางนี้จะทำงานในพื้นที่กว้างของสนาม เพราะฉะนั้นจะใช้พลังมากที่สุดและต้องทำหน้าที่ป้องกันช่วยคนที่ทำหน้าที่ป้องกันในขณะเดียวกันก็ต้อง ช่วย FWs ในการโจมตี</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/kde1.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>CAM(Center Attacking Midfielder) :</Text>
            <Text > CAM จะอยู่ตรงกลางข้างหน้าของกองกลางแต่อยู่หลัง striker หน้าที่ของตำแหน่งนี้ทำหน้าที่เป็นศูนย์กลางของทีมรุกที่สามารถมองเห็นในมุมกว้าง และมีทักษะในการสร้างโอกาสในการยิงประตูตำแหน่งนี้ต้องการคนที่มีทักษะด้านบอลอย่างชำนาญ และมีการส่งบอลที่ดี คนเล่นในตำแหน่งนี้ที่มีชื่อเสียงคือ Zidane, Ronaldino, Ballack, Lampard, Kaka, Requelme, Maradona, และ Totti.</Text>
              <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/rues.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>LWM/RWM(Left/Right Wing Midfielder) :</Text>
            <Text > จะเหมือนกองกลางปีกซ้ายและปีกขวาแต่ตะโฟกัสตรงการรุกมากกว่า คนที่เป็นปีกจะคอยระวังปีกหลังของคู่ต่อสู้ โดยใช้ทักษะการเลี้ยงทักษะและการส่งบอลเพื่อทำประตู</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/gerrard.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>CM(Central Midfielder) :</Text>
            <Text > Central Midfielder เชื่อต่อการรุกและการป้องกัน เมื่อคู่แข่งได้บอลคนในตำแหน่งนี้จะต้องทำหน้าที่ป้องกันการอยู่ตรงกลางของสนาม ทำให้ผู้เล่นสามารถเห็นสนามทั้งหมดดังนั้นจะต้องนำทีมในการเล่นการแข่งขัน Central Midfielder ทำให้การเล่นไหลไปเรื่อยๆ มีผู้เล่นมากมายที่อยู่ในตำแหน่งนี้ที่มีชื่อเสียงคือ Scholes, Vieira, Lee Eul-yong, Deco, Fabregas</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/Saka.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>LM/RM(Left/Right midfielder) :</Text>
            <Text > เป็นตำแหน่งไม่ด้านซ้ายก็ด้านขวาของกองกลางและคอยช่วยในการรุกและ การป้องกันซ้ายและขวาMidfielderคนในตำแหน่งนี้ไม่ได้แค่มีทักษะในการส่งบอล แต่ต้องสามารถเลี้ยงลูกข้างสนามส่งผ่านบอลไปด้วยความรวดเร็วได้ดี Left/Right กองกลางคนนี้ในหลายๆกรณีจะเล่นในตำแหน่งปีกหลังปีกและปีกหน้าด้วยคนเล่นในตำแหน่งนี้ที่มีชื่อเสียงคือ Beckham, Figo, Ribery, Malouda, และ Stankovic</Text>
            <Image
                source={require('E:/reactPro/ReactNativeFinalProject/assets/viera.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Text style = {styles.text2}>CDM(Center Defensive Midfielder, holding midfielder) :</Text>
            <Text > enter Defensive Midfielder หรือ holding midfielder หมายถึง คนตรงกลางในกองกลางข้างหน้าผู้ป้องกันทำหน้าที่ป้องกัน หน้าที่ของผู้เล่นคือ การการแย่งบอลจากกองกลางของฝ่ายตรงข้ามและส่งไปให้ฝ่ายรุกของตนอย่างปลอดภัย ตำแหน่งนี้จะทำให้การป้องกันแข็งแรงขึ้นและทำให้สมาชิกในกองกลางมีความกดดันน้อยลง ในการป้องกันและสามารถโฟกัสในการโจมตีได้ดีขึ้น คนเล่นในตำแหน่งนี้คือ Makelele, Helguera, Roy Keane, Diarra, Pirlo, Xavi, and Xabier Alonso.</Text>
           
          
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
                        navigation.navigate('df')
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

export default mf

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