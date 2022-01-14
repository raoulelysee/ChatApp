import React from "react";
import { View, Text, StyleSheet } from "react-native";

//const blue = '#89CFF0';
const blue = '#3777F0';
const grey = '#dcdcdc';

const myID = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id === myID;

    return (
        <View style={[
            styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
            <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 15,
        maxWidth: '75%',
    },
    leftContainer: {
        backgroundColor: blue,
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 10,
    },
    text: {
        color: 'black',

    }
});

export default Message;