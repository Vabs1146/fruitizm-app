import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { styles } from '../styles';

export default function HeaderMenuList({ item }) {
  const [showMe, setShowMe] = useState(false)

  const pressHandler = () => {
    setShowMe(!showMe);
  }

  return (
    <SafeAreaView>
      <View style={{ borderWidth: 0.5, borderColor: '#bfbfbf', width: 330 }} />
      <TouchableOpacity onPress={pressHandler} >
        <Text style={styles.headerText}>{item.mainMenu}</Text>
      </TouchableOpacity>
      <View style={{ marginBottom: 10 }}>
        {showMe ?
          item.subMenu.map((itemData, index) =>
            <View style={{ borderRadius: 5, borderWidth: 1, borderColor: '#bfbfbf', margin: 2, padding: 4 }} key={index} >
              <Text style={{ fontSize: 15 }} >{itemData}</Text>
            </View>)
          : null}
      </View>
    </SafeAreaView>
  )
}
