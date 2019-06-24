import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const CardPost = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
          }}
          source={{
            uri: `${props.image}`
          }}
        />
        <View style={styles.texts}>
          <Text style={styles.title} numberOfLines={2}>
            {props.text}
          </Text>
          <Text style={styles.paragraph} numberOfLines={3}>
            {props.body}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
    paddingTop: 5
  },
  card: {
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10
    },
    height: 120,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5
  },
  texts: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%"
  },
  title: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "bold"
  },
  paragraph: {
    marginTop: 10,
    fontSize: 14
  }
});

export default CardPost;
