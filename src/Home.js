import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import { StatusBar } from 'react-native';

const Home = (props) => {
  return (
    <Background>
    <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={{ marginHorizontal: 33, marginVertical: 80 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 40, marginBottom: 40 }}>Coding</Text>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("SignUp")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;