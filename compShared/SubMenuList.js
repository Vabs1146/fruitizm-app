import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { styles } from '../styles';

export default function SubMenuList({ item }) {
  const [showMe, setShowMe] = useState(false)

  const pressHandler = () => {
    setShowMe(!showMe);
  }

  return (
    <SafeAreaView style={styles.menuList}>
      <TouchableOpacity style={styles.mainMenu} onPress={pressHandler} >
        <Text style={{ color: "#3BAC44", marginRight: '50%', fontSize: 20 }} >{item.mainMenu}</Text>
        <AntDesign style={{ position: "absolute", right: 0 }} name="circledown" size={15} color="#3BAC44" />
      </TouchableOpacity>
      <View>
        {showMe ?
          item.subMenu.map((itemData, index) =>
            <View style={{ flexDirection: "row", alignItems: "center", margin: 5 }} key={index} >
              <Entypo name="controller-play" size={20} color="#3BAC44" />
              <Text style={{ fontSize: 15 }} >{itemData}</Text>
            </View>)
          : null}
      </View>
    </SafeAreaView>
  )
}
