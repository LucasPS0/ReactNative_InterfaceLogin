import React from 'react';
import {View, TextInput} from 'react-native';
import {darkpurple} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkpurple,
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: '#c9c2f0',
        borderWidth: 1,
        borderColor: darkpurple,
        marginBottom: 20,
        fontSize: 15,
        fontWeight: 'bold',
        borderWidth:0
      }}></TextInput>
  );
};

export default Field;
