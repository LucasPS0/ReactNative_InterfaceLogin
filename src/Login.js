import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import {darkpurple} from './Constants';
import Field from './Field';
import {StatusBar} from 'react-native';
import Btn from './Btn';

const Login = (props) => {
  return (
    <Background>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={{alignItems: 'center', width: 445}}>
        <Text style={{color: 'white', fontSize: 52, marginVertical: 20}}>
          Login
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          height: 715,
          width: 445,
          borderTopLeftRadius: 100,
          paddingTop: 100,
          alignItems: 'center',
          elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: darkpurple,
            fontWeight: 'bold',
          }}>
          Bem vindo de Volta!
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: darkpurple,
            fontWeight: 'medium',
            marginTop: 20,
            marginBottom: 20,
          }}>
          Acesse sua conta para continuar
        </Text>
        <Field placeholder="Email / Username" keyboardType="email-address" />
        <Field placeholder="Password" secureTextEntry={true} />
        <View
          style={{
            width: '80%',
            alignItems: 'flex-end',
            marginTop: 20,
            paddingRight: 5,
            marginBottom: 100,
          }}>
          <Text style={{fontWeight: 'bold'}}>Esqueceu sua senha?</Text>
        </View>
        <Btn
          textColor="white"
          bgColor={darkpurple}
          btnLabel="Login"
          Press={() => alert('Logged in')}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={{color: darkpurple, fontWeight: 'bold', marginTop: 5, fontSize: 16, textAlign: 'center'}}>Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Login;
