import React from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import Message from "../components/Message";
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput         ';


export default function ChatRoomScreen() {

    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})