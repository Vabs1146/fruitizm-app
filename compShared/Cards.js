import React from 'react'
import { View, Text } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import { Entypo } from "@expo/vector-icons";
import { styles } from '../styles';

export default function Cards({ item }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{ margin: 20 }} />
        <Card.Content style={{ alignItems: "center" }} >
          <Title style={{ fontSize: 16 }} >{item.title}</Title>
          <Paragraph style={{ fontSize: 18, color: '#3BAC44' }} >{item.price}</Paragraph>
          <Entypo name="shopping-cart" size={14} color="white" style={styles.button}>
            <Text>. ADD TO CART</Text>
          </Entypo>
        </Card.Content>
      </Card>
    </View>
  )
}
