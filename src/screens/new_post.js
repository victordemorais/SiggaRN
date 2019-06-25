import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import Container from "../components/background";
import Button from "../components/button";
import Posts from "../services/posts";

export default class NewPost extends Component {
  state = {
    title: "",
    body: "",
    userId: "",
    id: ""
  };
  componentWillMount() {
    const id = this.props.navigation.getParam("id");
    if (id) {
      const post = new Posts();
      post.show(id).then(response => {
        this.setState({
          title: response.title,
          body: response.body,
          userId: response.userId,
          id: response.id
        });
      });
    }
  }
  createPost() {
    const data = {
      title: this.state.title,
      body: this.state.body,
      userId: 1
    };
    const post = new Posts();
    post.create(data).then(response => {
      Alert.alert("Success!", "Your post was successfully created.", [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("Home")
        }
      ]);
      this.setState({ title: "", body: "" });
    });
  }
  editPost() {
    const data = {
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId,
      id: this.state.id
    };
    const post = new Posts();
    post.edit(this.state.id, data).then(response => {
      Alert.alert("Success!", "Your post was successfully edited.", [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("Home")
        }
      ]);
      this.setState({ title: "", body: "" });
    });
  }

  render() {
    return (
      <Container>
        <View style={{ padding: 10 }}>
          <Text style={styles.label}>Title of the post</Text>
          <TextInput
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
            style={[styles.input, { height: 40 }]}
          />
          <Text style={styles.label}>Body</Text>
          <TextInput
            onChangeText={body => this.setState({ body })}
            value={this.state.body}
            style={styles.input}
            multiline={true}
            numberOfLines={15}
          />
          <View style={styles.button}>
            <Button
              onPress={() =>
                !this.props.navigation.getParam("id")
                  ? this.createPost()
                  : this.editPost()
              }
              title={
                !this.props.navigation.getParam("id") ? "Cadastrar" : "Editar"
              }
            />
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  label: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    textAlignVertical: "top"
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});
