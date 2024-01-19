import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { color } from "../utils/colors";

const ButtonConnection = (props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        props.style,
        pressed && styles.pressed,
      ]}
    >
      {({ pressed }) => (
        <Text style={[styles.text, pressed && styles.pressedText]}>
          {props.children}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: color.blue,
    paddingVertical: 12,
    borderRadius: 50,
  },
  text: {
    color: color.blue,
    fontSize: 17,
    textAlign: "center",
  },
  pressed: {
    backgroundColor: color.carbone,
    borderColor: color.clickBlue,
    color: color.clickBlue,
  },
  pressedText: {
    color: color.clickBlue,
  },
});

export default ButtonConnection;
