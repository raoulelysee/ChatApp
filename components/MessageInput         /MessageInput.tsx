import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { SimpleLineIcons, Feather, AntDesign, Ionicons } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.warn("sending: ", message);
        setMessage('')
    }

    const onPlusClicked = () => {
        console.warn("On plus clicked");
    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
        >

            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.icon} />

                <TextInput
                    style={styles.textInput}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type your message"
                />

                <Feather name="camera" size={24} color="grey" style={styles.icon} />
                <Feather name="mic" size={24} color="grey" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name="send" size={18} color="white" /> : <AntDesign name="plus" size={18} color="white" />}
            </Pressable>

        </KeyboardAvoidingView>
    )
}

export default MessageInput;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3777F0',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 5
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    root: {
        flexDirection: 'row',
        padding: 10,
    },
    textInput: {
        flex: 1,
        marginHorizontal: 5
    }
})