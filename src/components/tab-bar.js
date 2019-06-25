import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../configs/colors";
import { DrawerActions, NavigationActions } from "react-navigation";

const TabBar = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menu}
        onPress={() =>
          !props.back
            ? props.navigation.dispatch(DrawerActions.toggleDrawer())
            : props.navigation.dispatch(NavigationActions.back())
        }
      >
        <Icon
          name={!props.back ? "bars" : "arrow-left"}
          size={30}
          color={colors.light}
        />
      </TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={{
          uri: "https://sigga.com.br/img/home/logo-sigga-branca.png"
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: colors.primary
  },
  image: { height: 30, width: "100%", marginTop: 5 },
  menu: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 50,
    width: 50,
    zIndex: 99
  }
});
export default TabBar;
