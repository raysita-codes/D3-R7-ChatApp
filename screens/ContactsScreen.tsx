import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';

import users from '../data/Users';
import { FlatList } from 'react-native';
import NewMessageButton from '../components/NewMessageButton';
import ContactListItem from '../components/ContactListItem';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
       <FlatList 
        style={{width: '100%'}}
        data={users} 
        renderItem={({ item }) => <ContactListItem user = {item}/>}
        keyExtractor={(item) => item.id}
        />
        <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
