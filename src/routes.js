import React from "react";

import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import Home from "./screens/home";
import TabBar from "./components/tab-bar";
import NewPost from "./screens/new_post";
import DetailsPost from "./screens/details_post";

const MainRoutes = {
  Home: {
    screen: Home
  },
  NewPost: {
    screen: NewPost,
    navigationOptions: {
      title: "New Post"
    }
  }
};

const DrawerNavigator = createDrawerNavigator(MainRoutes);
const StackNavigator = createStackNavigator(
  { Home: DrawerNavigator, Details: DetailsPost },
  {
    defaultNavigationOptions: {
      header: navigation => <TabBar {...navigation} />
    }
  }
);

const Routes = createAppContainer(StackNavigator);

export default Routes;
