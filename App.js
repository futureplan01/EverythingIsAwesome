import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Welcome from "./Components/Welcome";
import Camera from "./Components/Camera";

const AppNavigator = createStackNavigator({
  Home: Welcome,
  Camera: Camera
}, {
  initialRouteName: "Home"
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer / > ;
  }
}