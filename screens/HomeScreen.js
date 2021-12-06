import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={styles.button}>
        <Text style={styles.text}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Options')}
        style={styles.button}>
        <Text style={styles.text}>Options</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
