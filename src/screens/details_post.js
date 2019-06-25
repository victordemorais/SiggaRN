import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Container from "../components/background";
import TabBar from "../components/tab-bar";
import colors from "../configs/colors";
import Posts from "../services/posts";
import Users from "../services/users";

class DetailsPost extends Component {
  state = {
    data: {},
    user: {}
  };
  static navigationOptions = {
    header: navigation => <TabBar {...navigation} back />
  };

  componentWillMount() {
    const id = this.props.navigation.getParam("id");
    let post = new Posts();
    let user = new Users();
    post.show(id).then(response => {
      user.show(response.userId).then(user => {
        this.setState({ data: response, user });
      });
    });
  }
  render() {
    const { data, user } = this.state;
    return (
      <Container>
        <View style={styles.container}>
          <Image
            source={{ uri: `https://picsum.photos/id/${data.id}/500/500` }}
            style={styles.image}
            resizeMode={"cover"}
          />
          <ScrollView style={styles.containerText}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.paragraph}>{data.body}</Text>
          </ScrollView>
          <View style={styles.author}>
            <Image
              source={{
                uri: `https://randomuser.me/api/portraits/men/${user.id}.jpg`
              }}
              style={styles.avatar}
            />
            <View style={{ marginLeft: 20 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Author: </Text>
                <Text>{user.name}</Text>
              </Text>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff"
  },
  author: {
    alignItems: "center",
    height: 80,
    flexDirection: "row",
    marginBottom: 0,
    backgroundColor: colors.light
  },
  avatar: {
    height: 60,
    width: 60,
    marginLeft: 10,
    borderRadius: 100
  },
  image: {
    height: 200,
    resizeMode: "contain"
  },
  containerText: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: 16,
    paddingBottom: 20
  }
});
export default DetailsPost;
