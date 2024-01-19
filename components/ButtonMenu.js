import { Text, StyleSheet } from "react-native";
import React from "react";
import { color } from "../utils/colors";
import { Pressable } from "react-native";

const ButtonMenu = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={props.onPress}
    >
      <props.iconComponent
        name={props.name}
        size={14}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: color.secondary,
    marginHorizontal: 5,
    marginVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: color.border,
  },
  icon: {
    paddingRight: 5,
  },
  text: {
    color: color.text,
    fontSize: 14,
    letterSpacing: 0.4,
  },
  pressed: {
    opacity: 0.9,
    backgroundColor: color.grey,
    borderColor: color.white,
  },
});
export default ButtonMenu;
