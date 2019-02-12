import {
    RNCamera,
    FaceDector
} from 'react-native-camera';
import React from 'react';
import Style from "./Style";
import {
    Text
} from "react-native";


export default function Welcome(props) {
    return <Text style = {
        Style.welcome
    } > This is the camera page < /Text>;
}