import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles'

export default function CardHeader({ item }) {
  return (
    <View style={styles.content}>
      <Text style={{ fontSize: 30 }} >{item}</Text>
      <View style={{ borderWidth: 2, borderColor: '#3BAC44', margin: 10, width: '20%' }} />
    </View>
  )
}
