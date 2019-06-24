import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import CardPost from "../components/card-post";
import LinearGradient from "react-native-linear-gradient";
import colors from "../configs/colors";
import Icon from "react-native-vector-icons/FontAwesome";
export default class Home extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("https://fakeblog.bel4.com/api/posts/popular")
      .then(response => response.json())
      .then(async json => {
        console.log(json);
        await this.setState({ data: json.data });
      });
  }
  render() {
    return (
      <LinearGradient
        colors={colors.gradient}
        style={{ flex: 1 }}
        locations={[0, 0.4]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 10
          }}
        >
          <Text style={{ position: "absolute", top: 10, left: 10 }}>
            <Icon name="bars" size={30} color={colors.light} />
          </Text>
          <Image
            style={{ height: 50, width: "100%", marginTop: 10 }}
            resizeMode={"contain"}
            source={{
              uri: "https://sigga.com.br/img/home/logo-sigga-branca.png"
            }}
          />
        </View>
        <View style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: colors.light
            }}
          >
            Notícias
          </Text>
        </View>
        {this.state.data && (
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <CardPost
                  text={item.name}
                  image={item.thumb}
                  body={item.body}
                />
              );
            }}
          />
        )}
      </LinearGradient>
    );
  }
}
