import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";


const NewsScreen = ({ navigation }) => {

  const [News, setNews] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const getData = async () => {
    try {
      setloading(true);
      const res = await axios.get("https://my-football-api.krittinkamkar.repl.co/products");
      console.log(res.data);
      setNews(res.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(error); 
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Text>ไม่สามารถติดต่อกลับเซิฟเวอร์ได้</Text>
      </View>
    );
  }

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" size="large" />
      </View>
    );
  }

  const _onReflesh = ()=>{
    getData();
  }


  const _rederitem = ({ item }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity 
      style = {styles.addButtonStyle}
      onPress = {()=>{
          navigation.navigate('Detaill',{
              id:item.id,
              title:item.title
          })
      }}
      >
        <View style={{ flex: 1 ,margin:5}}></View>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={{justifyContent:'center'}}>
              <Image
                resizeMode="cover"
                source={{ uri: item.picture }}
                style={styles.thumbnail}
              />
            </View>
            <View style={styles.dataContainer}>
              <View style={styles.dataContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.detail}>{item.detail}</Text>
                
              </View>
            </View>
              <View style = {styles.lineStyle}></View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={News}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={_rederitem}
        refreshing={loading}
        onRefresh = {_onReflesh}
      />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    height: 130,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },

  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },

  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },

  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:5,
},
addButtonStyle: {
  width: "100%",

  marginBottom: 15,
},

});
