import { StyleSheet, ScrollView, View, StatusBar } from "react-native";
import React from "react";
import { color } from "../utils/colors";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";
import Connection from "../components/Connection";
import Product from "../components/Product";
import LikePage from "../components/LikePage";
import Categorie from "../components/Categorie";
const Accueil = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={color.primary} />

        <Navbar />
        <ScrollView>
          <SearchBar />
          <Menu />
          <Connection />
          <Product />
          <Categorie />
          <LikePage />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
});

export default Accueil;
