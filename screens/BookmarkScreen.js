import { StyleSheet, Text, View ,Button,TextInput ,TouchableOpacity,Image,ImageBackground} from 'react-native'
import React,{ useState } from 'react'

const BookmarkScreen = ({navigation,route}) => {
  const check = route.params.mark
  const check1 = route.params.mark
  const check2 = route.params.mark
  const check3 = route.params.mark
  const check4 = route.params.mark
  const check5 = route.params.mark
  
  


  if(check === 'rollover'){
  return (
    <View>
      <Text>BookmarkScreennnn</Text>
        <Text>BookmarkScreen</Text>
      <Button
                title='             Rollover             '
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.navigate('rollover')   
                }}
                />
                  <Button
                title='             bookmark             '
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.goBack()
                }}
                />
    </View>
  )}else if(check1 === 'scissor'){
    return(
        <View>
           <Text>BookmarkScreennnn</Text>
        <Text>BookmarkScreen</Text>
          <Button
                title='             Rollover             '
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.navigate('rollover')   
                }}
                />
          <Button
                title='             Scissor             '
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.navigate('stepover')   
                }}
                />
                 <Button
                title='             bookmark             '
                color={'#B5E67C'}
                fontSize={20}
                style={styles.buttonstyle}
                onPress={() => {
                  navigation.goBack()
                }}
                />
        </View>
                
                
                )
  }
   
  
}

export default BookmarkScreen

const styles = StyleSheet.create({})