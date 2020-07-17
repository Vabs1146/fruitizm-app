import React from "react";
import { ScrollView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "../styles";

import Header from "../compShared/Header";
import CarousalItem from "../compShared/CarousalItem";
import Cards from "../compShared/Cards";
import Footer from "../compShared/Footer";
import SubMenuList from "../compShared/SubMenuList";
import CardHeader from "../compShared/CardHeader";

import { carousalData, cardData, menuData } from '../rowData'

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container} >
      <Header navigation={navigation} />
      <View style={{ borderWidth: 0.5, borderColor: '#bfbfbf', width: '100%' }} />
      {/* code for carousal view */}
      <FlatList data={carousalData} keyExtractor={(item, index) => 'key' + index}
        horizontal={true} pagingEnabled scrollEnabled snapToAlignment="center" scrollEventThrottle={16}
        decelerationRate="fast" showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => { return <CarousalItem item={item} /> }} />
      <View style={{ borderWidth: 0.5, borderColor: '#bfbfbf', width: '100%' }} />
      {/* Title for cards */}
      <CardHeader item="Featured" />
      {/* code for cards */}
      <FlatList data={cardData} keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => { return <Cards item={item} /> }} />
      <View style={{ borderWidth: 0.5, borderColor: '#bfbfbf', width: '100%' }} />
      {/* Drop Down Lists for Menu */}
      <FlatList data={menuData} keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => { return <SubMenuList item={item} /> }} />
      {/* footer Code */}
      <Footer />
    </ScrollView>
  );
}