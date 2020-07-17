import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from '../styles'
import Header from '../compShared/Header'

export default function TestCategory({ navigation }) {
  return (
    <ScrollView style={styles.container} >
      <Header navigation={navigation} />
      <View style={{ borderWidth: 0.5, borderColor: '#bfbfbf', width: '100%' }} />
      <View style={styles.content} >
        <Text>test Category</Text>
      </View>
    </ScrollView>
  )
}
