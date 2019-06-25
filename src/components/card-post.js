import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const CardPost = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { id: data.id })}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: `https://picsum.photos/id/${data.id}/120/120`
          }}
        />
        <View style={styles.texts}>
          <Text style={styles.title} numberOfLines={2}>
            {data.title}
          </Text>
          <Text style={styles.paragraph} numberOfLines={3}>
            {data.body}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  }
});

export default CardPost;
