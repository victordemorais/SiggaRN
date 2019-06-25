import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../configs/colors";

const Button = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        backgroundColor: colors.secondary,
        width: "auto",
        maxWidth: 120,
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ color: colors.light }}>{props.title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
