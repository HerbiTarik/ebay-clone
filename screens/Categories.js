import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Cat } from "../utils/categories";

const Categories = () => {
  const navigation = useNavigation();
  const [selectId, setSelectId] = useState();
  const handleCategorie = (id, uri, title, ca) => {
    setSelectId({ id, uri, title, ca });
    navigation.navigate("CategorieScreen", { id, uri, title, ca });
  };
  return (
    <View style={styles.viewGl}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Accueil")}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>
        <Text style={styles.textContainer}>Catégories</Text>
      </View>
      <ScrollView>
        <View style={styles.categorie}>
          {Cat.map((item) => (
            <Pressable
              onPress={() =>
                handleCategorie(item.id, item.uri, item.title, item.ca)
              }
              style={({ pressed }) => [
                styles.pressable,
                pressed && styles.pressed,
              ]}
              key={item.id}
            >
              <Image source={{ uri: item.uri }} style={styles.image} />
              <Pressable style={styles.textView}>
                <Text style={styles.text}>{item.title}</Text>
              </Pressable>
              <View style={styles.line} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewGl: {
    backgroundColor: color.primary,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  textContainer: {
    color: color.text,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 18,
  },
  categorie: {
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 8,
    columnGap: 8,
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: 175,
    height: 130,
    borderRadius: 10,
  },
  text: {
    color: color.text,
    fontSize: 16,
    textAlign: "center",
  },
  textView: {
    width: 175,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: 0.8,
    backgroundColor: color.grey,
  },
  pressed: {
    backgroundColor: color.grey2,
  },
});

export default Categories;
