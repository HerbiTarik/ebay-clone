import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Image, Modal } from "react-native";
import { AntDesign, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { color } from "../utils/colors";
import { content } from "../utils/categories";
import { ScrollView } from "react-native-gesture-handler";

const ArticleScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const { name, uri, id, title, ca } = route.params;
  const handleGoBack = () => {
    navigation.navigate("CategorieScreen", { uri, id, title, ca });
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: color.grey2,
            marginTop: "auto",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}
        ></View>
      </Modal>
      <View style={styles.viewGl}>
        <View style={styles.navbar}>
          <Pressable onPress={() => handleGoBack()}>
            <AntDesign name="arrowleft" size={24} color={color.text} />
          </Pressable>
          <Text style={styles.textCat}>{name}</Text>
        </View>
        <View style={styles.searchShopping}>
          <Pressable style={styles.search}>
            <AntDesign
              name="search1"
              size={20}
              color={color.text}
              style={styles.searchIcon}
            />
          </Pressable>
          <Pressable style={styles.cat}>
            <Feather
              name="shopping-cart"
              size={20}
              color={color.text}
              style={styles.shopping}
            />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.viewFilter}>
          <Pressable>
            <Text style={styles.textFilter}>Filter</Text>
          </Pressable>
        </View>
        <View style={styles.line} />
        <View style={styles.viewResults}>
          <Text style={styles.resultText}>Results</Text>
          <Text style={styles.nbreResults}>{content.length} Results</Text>
        </View>
        <View style={styles.viewArticle}>
          {content.map((item, index) => (
            <Pressable key={index} style={styles.pressableArticle}>
              <Image src={item.uri} style={styles.image} />
              <View style={styles.detail}>
                <Text
                  ellipsizeMode="clip"
                  numberOfLines={3}
                  style={styles.textArticle}
                >
                  {item.article}
                </Text>
                <Text style={styles.textState}>{item.state}</Text>
                <Text style={styles.textPrice}>{item.price} EUR</Text>
                <Text numberOfLines={2} style={styles.textRmq}>
                  {item.rmq}
                </Text>
              </View>
              <View style={styles.icons}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Ionicons
                    name="md-ellipsis-vertical-sharp"
                    size={20}
                    color={color.text}
                  />
                </Pressable>
                <Pressable>
                  <FontAwesome name="heart-o" size={18} color={color.blue} />
                </Pressable>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  viewGl: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingVertical: 10,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchShopping: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCat: {
    color: color.text,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 18,
  },
  search: {
    padding: 10,
    backgroundColor: color.grey2,
    borderRadius: 50,
  },
  cat: {
    padding: 10,
    marginLeft: 5,
    backgroundColor: color.grey2,
    borderRadius: 50,
  },
  viewFilter: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  textFilter: {
    color: color.blue,
    fontSize: 17,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  line: {
    height: 0.8,
    backgroundColor: color.grey,
  },
  viewResults: {
    padding: 15,
  },
  resultText: {
    color: color.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  nbreResults: {
    color: color.grey,
    fontSize: 17,
    paddingVertical: 3,
  },
  viewArticle: {},
  image: {
    width: "38%",
    height: 130,
    justifyContent: "center",
    borderRadius: 15,
  },
  viewArticle: {
    padding: 5,
  },
  textArticle: {
    color: color.text,
    fontSize: 16,
  },
  textState: {
    color: color.grey,
    fontSize: 16,
  },
  textPrice: {
    color: color.text,
    fontSize: 17,
    fontWeight: "bold",
  },
  textRmq: {
    color: color.grey,
    fontSize: 15,
  },
  pressableArticle: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detail: {
    width: "42%",
  },
  icons: {
    width: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default ArticleScreen;
