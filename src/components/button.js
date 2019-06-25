import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../configs/colors";
import Icon from "react-native-vector-icons/FontAwesome";
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
export const ButtonIcon = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        backgroundColor: props.color,
        width: "auto",
        padding: 10,
        width: 40,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon name={props.icon} size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default Button;
