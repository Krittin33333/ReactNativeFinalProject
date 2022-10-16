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

const ProductScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const getData = async () => {
    try {
      setloading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      console.log(res.data.data);
      // alert(JSON.stringify(res.data.data))
      setProduct(res.data.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(error); //set error ไปที่ state ของ error
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  // useEffect (()=>{
  //     getData();
  // },[]);

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

  // const _onReflesh = ()=>{
  //   getData();
  // }

  const _rederitem = ({ item }) => {
    let picture =
      item.picture !== null ? item.picture : "https://via.placeholder.com/150";
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity 
        style = {styles.addButtonStyle}
        onPress = {()=>{
            navigation.navigate('Detail',{
                id:item.id,
                title:item.title
            })
        }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.container}>
              <Image
                resizeMode="cover"
                source={{ uri: item.picture }}
                style={styles.thumbnail}
              />
              <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.detail}>{item.detail}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={_rederitem}
        refreshing={loading}
        // onRefresh = {_onReflesh}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
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
    width: 70,
    height: 70,
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
  addButtonStyle: {

    width: '100%',         

    marginBottom: 15,

},
});
