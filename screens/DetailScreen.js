import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

const DetailScreen = ({ navigation, route }) => {
  const { id, title } = route.params;
  const [detail, setdetail] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  const getData = async (id) => {
    try {
      setloading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      console.log(res.data.data);
      // alert(JSON.stringify(res.data.data))
      setdetail(res.data.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(error); //set error ไปที่ state ของ error
    }
  };

  //   useFocusEffect(
  //     useCallback(() => {
  //       getData();
  //     }, [])
  //   );

  useEffect(() => {
    getData(id);
  }, [id]);

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

  const _onReflesh = () => {
    getData(id);
  };

  const _rederitem = ({ item ,index }) => {
    let picture =
      item.picture !== null ? item.picture : "https://via.placeholder.com/150";
    return (

          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 ,flexDirection:'row',margin:5}}>
            <Text style={styles.thumbnail}>{index+1}</Text>
              <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.ch_title}</Text>
                  <Text note numberOfLines={1}>{item.ch_dateadd}</Text>
                </View>
              </View>
            </View>
          </View>
   
    );
  };


  return (
    <View>
      <View>
        <FlatList
          data={detail}
          keyExtractor={(item, index) => item.ch_id.toString()}
          renderItem={_rederitem}
          refreshing={loading}
          onRefresh={_onReflesh}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

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
    width: "100%",

    marginBottom: 15,
  },
});
