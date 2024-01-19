import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../utils/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Cat } from "../utils/categories";

const CategorieScreen = () => {
  const route = useRoute();
  const [selectedId, setSelectedId] = useState();
  const { id, uri, title, ca } = route.params;
  const navigation = useNavigation();
  const handleArticle = (name, uri, id, title, ca) => {
    setSelectedId({ name, uri, id, title, ca });
    navigation.navigate("ArticleScreen", { name, uri, id, title, ca });
  };
  return (
    <View style={styles.viewGl}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Categories")}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>
        <Text style={styles.textContainer}>Catégories</Text>
      </View>
      <ScrollView>
        <View>
          <Image
            source={{ uri: uri }}
            style={{
              width: "100%",
              height: 120,
              resizeMode: "cover",
            }}
          />
          <View style={styles.caracStyle}>
            <View style={styles.viewTitle}>
              <Pressable onPress={() => navigation.navigate("Categories")}>
                <AntDesign name="up" size={20} color={color.white} />
              </Pressable>
              <Text style={styles.textCategorie}>{title}</Text>
            </View>
            <View style={styles.line} />
            {ca
              ? ca.map((item, index) => (
                  <Pressable
                    key={index}
                    style={({ pressed }) => [
                      styles.viewElements,
                      pressed && styles.pressed,
                    ]}
                    onPress={() =>
                      handleArticle(
                        item.name,
                        item.uri,
                        item.id,
                        item.title,
                        item.ca
                      )
                    }
                  >
                    <View style={styles.elements}>
                      <View>
                        <Text style={styles.textElements}>{item.name}</Text>
                      </View>
                    </View>
                  </Pressable>
                ))
              : console.log("erreur")}
          </View>
        </View>
      </ScrollView>
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
  viewTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    columnGap: 14,
  },
  pressed: {
    backgroundColor: color.grey2,
  },
  textCategorie: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  caracStyle: {
    marginHorizontal: 20,
  },
  line: {
    height: 0.8,
    backgroundColor: color.grey,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  elements: {
    paddingHorizontal: 35,
  },
  viewElements: {
    paddingVertical: 15,
  },
  textElements: {
    color: color.text,
    fontSize: 16,
    alignItems: "center",
  },
});

export default CategorieScreen;
