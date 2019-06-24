import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./screens/home";

const MainRoutes = {
  Home: {
    screen: Home
  }
};

const StackNavigator = createStackNavigator(MainRoutes, {
  headerMode: "none"
});
const Routes = createAppContainer(StackNavigator);

export default Routes;
