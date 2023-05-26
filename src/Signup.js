import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import {darkpurple} from './Constants';
import Field from './Field';
import {StatusBar} from 'react-native';
import Btn from './Btn';

const SignUp = props => {
  return (
    <Background>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={{alignItems: 'center', width: 445}}>
        <Text style={{color: 'white', fontSize: 52, marginVertical: 20}}>
          Registro
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
         Crie uma nova conta.
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
        {/* <Text
          style={{
            fontSize: 30,
            color: darkpurple,
            fontWeight: 'bold',
          }}>
          Crie uma Conta
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
        </Text> */}
        <Field placeholder="Primeiro nome" />
        <Field placeholder="Sobrenome" />
        <Field placeholder="Email / Username" keyboardType="email-address" />
        <Field placeholder="Número de telefone" keyboardType="numeric" />
        <Field placeholder="Senha" secureTextEntry={true} />
        <Field placeholder="Confirme a Senha" secureTextEntry={true} />

        <View style={{marginTop: 0, width: '80%'}}>
          <Text>
            Ao fazer login, você concorda com nossos{' '}
            <Text style={{fontWeight: 'bold', color: darkpurple}}>Termos</Text>{' '}
            e{' '}
            <Text style={{fontWeight: 'bold', color: darkpurple}}>
              Política de Privacidade
            </Text>
          </Text>
        </View>
        {/* 
        /* <View
          style={{
            width: '80%',
            alignItems: 'flex-end',
            marginTop: 20,
            paddingRight: 5,
            marginBottom: 100,
          }}>
          <Text style={{fontWeight: 'bold'}}>Esqueceu sua senha?</Text>
        </View> */}
        <Btn
          textColor="white"
          bgColor={darkpurple}
          btnLabel="Sign Up"
          Press={() => {
            alert('Conta Criada!');
            props.navigation.navigate('Login');
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                color: darkpurple,
                fontWeight: 'bold',
                marginTop: 5,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Entre!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;
