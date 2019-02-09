// User Clicks a button and it navigates to the welcome screen

import React from 'react';
import {Text} from 'react-native';

// lets make it a function 

export default function Welcome(props){
    return <Text style ={styles.welcome}> This is the welcome page </Text>;
}

const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

// I want to style it 