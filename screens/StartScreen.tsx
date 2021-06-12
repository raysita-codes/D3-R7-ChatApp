import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

const image = { uri: "https://wallpaper.dog/large/20434542.jpg"}

export default function StartScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'StartScreen'>) {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.title}>Welcome to D3-R7 Barely Functioning ChatApp</Text>
            <TouchableOpacity onPress={() => navigation.replace('Root')}>
            <AntDesign name="rightcircleo" size={50} color={'white'} style={styles.button}/>
            </TouchableOpacity>
        </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
  },
  button: {
      alignSelf: 'center',
      marginTop: 30,
  }
});
