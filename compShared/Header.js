import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput } from "react-native";
import { styles } from "../styles";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons, AntDesign, Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { headerData } from '../rowData'
import HeaderMenuList from "../compShared/HeaderMenuList";

var deviceWidth = Dimensions.get('window').width;

export default function Header({ navigation }) {

  const [showMe, setShowMe] = useState(false)
  const [display, setDisplay] = useState(false)
  const [value, onChangeText] = useState('Search');

  const searchValue = () => {
    alert(value);
    setDisplay(!display)
  }

  return (
    <View style={styles.content} >
      {/* Header Upper Part */}
      <View style={styles.headerTop} >
        <Text>Welcome to Mint Leaf Theme</Text>
        <View style={{ flexDirection: "row", padding: 10, justifyContent: 'space-between' }}>
          <Text style={{ marginRight: 25 }}>My Account<AntDesign name="caretdown" size={10} color="black" /></Text>
          <Text style={{ marginRight: 25 }} >Wish List ( 0 )</Text>
          <Text >shopping Cart</Text>
        </View>
        <Text>Checkout</Text>
      </View>
      <View style={{ borderWidth: 0.5, borderStyle: "dashed", borderColor: '#bfbfbf', width: deviceWidth - 20, margin: 20 }} />
      {/* Website Logo */}
      <Image style={{ width: 280, height: 60 }} source={require('../assets/logo.png')} />
      {/* Header Options and Icons */}
      <View style={styles.headerContent}>
        <Fontisto name="shopping-bag" size={24} color="black" onPress={() => { navigation.navigate("About") }} />
        <AntDesign name="search1" size={24} color="black" onPress={() => { setDisplay(!display) }} style={{ marginRight: '70%', marginLeft: '5%' }} />
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => { setShowMe(!showMe) }} >
          <MaterialCommunityIcons name="xbox-controller-menu" size={34} color="#3BAC44" />
        </TouchableOpacity>
      </View>
      {/* search bar */}
      {
        display ? <View style={styles.searchBox}>
          <TextInput style={styles.searchInput} onChangeText={text => onChangeText(text)} value={value} />
          <AntDesign name="search1" size={24} color="black" onPress={searchValue} />
        </View> : null
      }
      {/* List Of Dropdown List */}
      {
        showMe ? <FlatList data={headerData} keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => { return <HeaderMenuList item={item} /> }} /> : null
      }
    </View>
  );
}
