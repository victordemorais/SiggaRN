import React, { Component } from "react";
import { Text, View, NetInfo, FlatList, Alert } from "react-native";
import CardPost from "../components/card-post";
import colors from "../configs/colors";
import Container from "../components/background";
import Posts from "../services/posts";
import { storeData, retrieveData } from "../configs/storage";
import Users from "../services/users";

export default class Home extends Component {
  state = {
    data: []
  };
  getAllPosts = () => {
    retrieveData("posts").then(data => {
      this.setState({ data: JSON.parse(data) });
    });

    NetInfo.getConnectionInfo().then(async connectionInfo => {
      if (connectionInfo.type !== "none") {
        let post = new Posts();
        let user = new Users();
        post.list().then(response => {
          this.setState({ data: response });
          storeData("posts", JSON.stringify(response));
        });
        user.list().then(response => {
          storeData("users", JSON.stringify(response));
        });
      } else if (!this.state.data) {
        Alert.alert(
          "Ooops!",
          "Para o primeiro acesso no aplicativo precisamos de conexão com a sua internet, verifique se ela está ligada."
        );
      }
    });
  };
  componentDidMount = () => {
    this.getAllPosts();
  };
  render() {
    return (
      <Container>
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: colors.light
            }}
          >
            News
          </Text>
        </View>
        {this.state.data && (
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <CardPost data={item} navigation={this.props.navigation} />
              );
            }}
          />
        )}
      </Container>
    );
  }
}
