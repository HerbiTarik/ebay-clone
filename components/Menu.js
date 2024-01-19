import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { color } from "../utils/colors";
import ButtonMenu from "./ButtonMenu";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  const handleSelling = () => {};

  const handleDeals = () => {};

  const handleCategories = () => {
    navigation.navigate("Categories");
  };

  const handleSaved = () => {};
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <ButtonMenu
          name="tag-outline"
          iconComponent={MaterialCommunityIcons}
          onPress={handleSelling}
        >
          Selling
        </ButtonMenu>
        <ButtonMenu
          name="energy"
          iconComponent={SimpleLineIcons}
          onPress={handleDeals}
        >
          Deals
        </ButtonMenu>
        <ButtonMenu
          name="appstore-o"
          iconComponent={AntDesign}
          onPress={handleCategories}
        >
          Categories
        </ButtonMenu>
        <ButtonMenu
          name="hearto"
          iconComponent={AntDesign}
          onPress={handleSaved}
        >
          Saved
        </ButtonMenu>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
  text: {
    color: color.text,
  },
});

export default Menu;
