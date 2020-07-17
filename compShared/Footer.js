import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles'
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={{ backgroundColor: '#2C2C2C', padding: 20, alignItems: "center" }}>
      <Text style={{ color: '#fff' }} >Powered By OpenCart  Fruitizm © 2020. Theme By </Text>
      <Text style={{ color: '#fff' }} >Santosh Setty</Text>
      <View style={{ flexDirection: "row", margin: 10 }} >
        <FontAwesome name="facebook-f" size={20} color="white" style={{ marginRight: 15 }} />
        <Entypo name="twitter" size={20} color="white" style={{ marginRight: 15 }} />
        <AntDesign name="instagram" size={20} color="white" style={{ marginRight: 15 }} />
        <Entypo name="linkedin" size={20} color="white" />
      </View>
    </View>
  )
}