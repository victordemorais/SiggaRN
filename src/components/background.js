import React from "react";
import LinearGradient from "react-native-linear-gradient";
import colors from "../configs/colors";
import { View } from "react-native";
const Container = props => {
  return (
    <LinearGradient
      colors={colors.gradient}
      style={{ flex: 1 }}
      locations={[0, 0.5]}
    >
      <View>{props.children}</View>
    </LinearGradient>
  );
};

export default Container;
