import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Button
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
  }, [navigation, title]
  );

  const getData = async (id) => {
    try {
      setloading(true);
      const res = await axios.get(
        "https://my-football-api.krittinkamkar.repl.co/N" + id
      );
      console.log(res.data);
      // alert(JSON.stringify(res.data.data))
      setdetail(res.data);
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

  const _rederitem = ({ item  }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1 ,margin:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.title}>{item.title}</Text>

            <Image
              resizeMode="cover"
              source={{ uri: item.picture }}
              style={styles.thumbnail}
            />
            </View>
            
            <View style={{ flex: 1 ,margin:10}}>
             
                <View style={styles.dataContent}>
                  <Text style={styles.detail}>{item.detail}</Text>
                </View>
                <View style={styles.dataContent}>
                  <Text style={styles.content}>{item.content}</Text>
                  <Text style={{marginTop:10}}>{item.date}</Text>
                </View>
                <Button
                title=' BACK'
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.goBack()
                }}
                />

            </View>
   </SafeAreaView>
    );
  };


  return (
    <View>
      <View>
        <FlatList
          data={detail}
          keyExtractor={(item, index) => item.id.toString()}
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
    marginHorizontal: 20,
  },

  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 350,
    height: 320,
  },
  dataContent: {
    margin: 15,
  },

  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  detail: {
    fontSize: 18,
    color: "#888",
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
    marginTop: 10,
  },
  
  addButtonStyle: {
    width: "100%",

    marginBottom: 15,
  },
});