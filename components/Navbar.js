import { View, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import ebayLogoNav from "../assets/ebayLogoNav.jpg";
import { color } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.menuImage}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={25} color="white" style={styles.menu} />
        </Pressable>
        <Image source={ebayLogoNav} style={styles.image} />
      </View>
      <Feather
        name="shopping-cart"
        size={25}
        color="white"
        style={styles.shopping}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  menuImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    padding: 8,
    backgroundColor: color.secondary,
    borderRadius: 50,
    color: "white",
  },
  image: {
    width: 80,
    height: 30,
    marginLeft: 20,
  },
  shopping: {
    padding: 8,
    backgroundColor: color.secondary,
    borderRadius: 50,
    color: "white",
  },
});

export default Navbar;
