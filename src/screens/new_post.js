import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import Container from "../components/background";
import Button from "../components/button";

export default class NewPost extends Component {
  state = {
    title: "",
    body: ""
  };
  createPost() {
    console.log("Criar");
  }
  render() {
    return (
      <Container>
        <View style={{ padding: 10 }}>
          <Text style={styles.label}>Title of the post</Text>
          <TextInput
            onChangeText={title => this.setState({ title })}
            style={[styles.input, { height: 40 }]}
          />
          <Text style={styles.label}>Body</Text>
          <TextInput
            onChangeText={body => this.setState({ body })}
            style={styles.input}
            multiline={true}
            numberOfLines={15}
            onChangeText={this.props.onChangeText}
          />
          <Button onPress={this.createPost()} title={"Cadastrar"} />
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
  }
});
