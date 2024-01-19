import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { color } from "../utils/colors";
import { Categories } from "../utils/categories";

const Categorie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Popular Categories</Text>
      <View style={styles.categorie}>
        {Categories.map((item) => (
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressed,
            ]}
            key={item.id}
          >
            <Image
              source={{
                uri: item.uri,
              }}
              style={styles.image}
            />
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  categorie: {
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 25,
    columnGap: 8,
    justifyContent: "center",
    marginTop: 20,
  },
  pressable: {},
  title: {
    color: color.text,
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: color.white,
  },
  text: {
    color: color.text,
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
  },
  pressed: {
    backgroundColor: color.grey2,
  },
});
export default Categorie;
