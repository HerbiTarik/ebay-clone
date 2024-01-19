import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { color } from "../utils/colors";
import { products } from "../utils/products";

const product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleShow}>
        <Text style={styles.title}>Daily Deals</Text>
        <Pressable>
          <Text style={styles.show}>Tout afficher</Text>
        </Pressable>
      </View>
      {/* {products.map((prod) => ( */}
      <FlatList
        style={styles.flatlist}
        data={products}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.content, pressed && styles.pressed]}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.uri,
              }}
            />
            <Text
              style={styles.description}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {item.description}
            </Text>
            <Text style={styles.price}>DZD{item.price}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      {/* ))} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 12,
  },
  titleShow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "flex-end",
  },
  title: {
    color: color.text,
    fontSize: 23,
    fontWeight: "bold",
  },
  show: {
    color: color.text,
    fontSize: 14.5,
    textDecorationLine: "underline",
  },
  flatlist: {
    marginVertical: 15,
    marginHorizontal: 11,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "center",
    backgroundColor: color.white,
    borderRadius: 15,
  },
  content: {
    width: 150,
    height: "auto",
    marginHorizontal: 4,
  },
  pressed: {
    backgroundColor: color.grey2,
  },
  description: {
    marginVertical: 6,
    color: color.text,
    fontSize: 16,
    lineHeight: 22,
  },
  price: {
    color: color.text,
    fontWeight: "bold",
    fontSize: 21,
  },
});
export default product;
