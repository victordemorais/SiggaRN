import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import CardPost from "../components/card-post";
import colors from "../configs/colors";
import Container from "../components/background";
import Posts from "../services/posts";
export default class Home extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    let post = new Posts();
    post.list().then(response => {
      this.setState({ data: response });
    });
  }
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
