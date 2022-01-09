import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import ChatRooomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms';


export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRooomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
