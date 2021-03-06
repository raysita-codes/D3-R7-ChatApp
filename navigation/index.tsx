import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import { View } from 'react-native';
import { Octicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import StartScreen from '../screens/StartScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.light.tint,
        elevation: 0, // shadowOpacity: 0, (for IOS)
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
     }}>
      <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Root" 
        component={MainTabNavigator} 
        options={{
          title: "D3-R7",
          headerRight: () => (
            <View style={{
              flexDirection: 'row', 
              width: 60, 
              justifyContent: 'space-between',
              marginRight: 10
              }}>
              <Octicons name="search" size={22} color={'white'}/>
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        }}
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({route}) => ({ 
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row', 
              width: 100, 
              justifyContent: 'space-between',
              marginRight: 10
            }}>
              {/* To add functionalities to these buttons, wrap touchable around it and declare its functionality */}
              <FontAwesome5 name="video" size={22} color={'white'}/>
              <MaterialIcons name="call" size={22} color={'white'}/>
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
            </View>
          )
        })}
      />
      <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Contacts' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
