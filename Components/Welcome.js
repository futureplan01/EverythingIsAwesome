// User Clicks a button and it navigates to the welcome screen

import React from 'react';
import {
  Text
} from 'react-native';

export default function Welcome(props) {
  return <Text style = {
    Styles.welcome
  } > This is the welcome page < /Text>;
}