// User Clicks a button and it navigates to the welcome screen

import React from "react";
import { Text } from "react-native";
import Style from "./Style";

// lets make it a function

export default function Welcome(props) {
  return <Text style={Style.welcome}> This is the welcome page </Text>;
}
