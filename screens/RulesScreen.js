import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const RulesScreen = ({ navigation }) => {
  return (
    
    <View>
      <Text>Rules</Text>
    </View>

    
  )
}

export default RulesScreen

const styles = StyleSheet.create({})