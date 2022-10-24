import { View, Text, Button ,ImageBackground,StyleSheet,Image} from "react-native";
import React from "react";
import {Ionicons,FontAwesome} from "@expo/vector-icons";

import {
  HeaderButton,
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);



const HomeScreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="Regis" iconName="person-add" onPress={() => alert('Register')} />
          
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1}}>
      <ImageBackground source={require('../assets/Haaland4.JPEG')} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 1,  alignItems: "center" }}>
          <View style={{padding:30}}>
          <Image
                  source={require('E:/reactPro/ReactNativeFinalProject/assets/FIFA_Flag_White.png')}
                  style={styles.sideMenuProfileIcon}
                />
            <View style = {styles.textbox}>
              <Text style = {styles.text}>Football Guide</Text>
              <Text >  ฟุตบอลหรือซอกเกอร์ เป็นกีฬาประเภททีมที่เล่นระหว่างสองทีมโดยแต่ละทีมมีผู้เล่น11คน โดยใช้ลูกบอล เป็นที่ยอมรับ อย่างแพร่หลายว่าเป็นกีฬาที่เป็นที่นิยมมากที่สุดในโลก </Text>
              <Text>
                 โดยจะเล่นในสนามหญ้าสี่เหลี่ยมผืนผ้า หรือ สนามหญ้าเทียม โดยมีประตูอยู่กึ่งกลางที่ปลายสนามทั้งสองฝั่ง เป้าหมายคือ ทำคะแนนโดยพาลูกฟุตบอลให้เข้าไปยังประตูของฝ่ายตรงข้าม ในการเล่นทั่วไปผู้รักษาประตูจะเป็นผู้เล่นเพียงคนเดียวที่สามารถ ใช้มือหรือแขนกับลูกฟุตบอลได้ ส่วนผู้เล่นอื่นๆจะใช้เท้าในการเตะลูกฟุตบอลไปยังตำแหน่งที่ต้องการ บางครั้งอาจใช้ลำตัว หรือ ศีรษะ เพื่อสกัดลูกฟุตบอลที่ลอยอยู่กลางอากาศ โดยทีมที่พาลูกฟุตบอลเข้าประตูฝ่ายตรงข้ามได้มากกว่าจะเป็นผู้ชนะ ถ้าคะแนนเท่ากัน ให้ถือว่าเสมอ แต่ในบางเกมที่เสมอกันในช่วงเวลาปกติแล้วต้องการหาผู้ชนะจึงต้องมีการต่อเวลาพิเศษ และ/หรือยิงลูกโทษขึ้นอยู่กับ กฎระเบียบของรายการแข่งขันนั้นๆ
              </Text>
            </View>
          </View>      
        </View>
    </ImageBackground>
    </View>
  );
};

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
});

export default HomeScreen;