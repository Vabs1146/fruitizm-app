import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get('window');

export default function CarousalItem({ item }) {
  return (
    <View style={style1.cardView} >
      <Image style={style1.image} source={require('../assets/slider_1.jpg')} />
      <View style={style1.textView} >
        <Text style={style1.textTitle} >{item.title}</Text>
        <Text style={style1.itemDescription} >{item.description}</Text>
      </View>
    </View>
  );
}

const style1 = StyleSheet.create({
  image: {
    height: height / 3,
    width: width - 20,
    borderRadius: 10,
  },
  cardView: {
    flex: 1,
    width: width - 25,
    height: height / 3,
    margin: 10,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 20,
    left: 5,
  },
  textTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: 'red',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5
  },
  itemDescription: {
    color: 'white',
    fontSize: 10,
  }
})
