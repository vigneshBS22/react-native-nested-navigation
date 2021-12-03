import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const LoginScreen = ({route, navigation}) => {
  const {setLogin} = route.params;
  setLogin(false);
  return (
    <View style={styles.container}>
      <Text>This is the Login Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('PasswordReset')}
        style={styles.button}>
        <Text style={styles.text}>Forgotten Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLogin(true);
          navigation.navigate('HomeScreen');
        }}
        style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
