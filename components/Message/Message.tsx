import React from "react";
import { View, Text, StyleSheet } from "react-native";

const blue = '#89CFF0';
const grey = '#dcdcdc';

const Message = () => {

    const isMe = true;

    return (
        <View style={[styles.container, {
            backgroundColor: isMe ? grey : blue,
            marginLeft: isMe ? 'auto' : 10,
        }]}>
            <Text style={styles.text}>Message</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#89CFF0',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        width: '75%',
    },
    text: {
        color: 'black',

    }
});

export default Message;