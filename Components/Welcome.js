// User Clicks a button and it navigates to the welcome screen

import React from "react";
import { Text, View,Button } from "react-native";
import Style from "./Style";

// lets make it a function

export default class Welcome extends React.Component {
  render() {
    return (
       <View>
        <Text style={Style.welcome}> This is the welcome page </Text>
        <Button title = "Click Here For Camera"
          onPress = {()=> this.props.navigation.navigate('Camera')}
        />
      </View>);
  }
}


function Welcome(props) {
  return <Text style={Style.welcome}> This is the welcome page </Text>;
}
