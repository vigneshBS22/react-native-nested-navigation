import React from 'react';
import {Button, Text, View} from 'react-native';

const PasswordResetScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{paddingBottom: 10}}>This is the password reset screen</Text>
      <Button
        title="Back to Login"
        onPress={() => navigation.goBack()}></Button>
    </View>
  );
};

export default PasswordResetScreen;
