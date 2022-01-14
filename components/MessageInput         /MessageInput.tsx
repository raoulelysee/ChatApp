import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SimpleLineIcons, Feather, AntDesign } from '@expo/vector-icons';

const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.icon} />
                <TextInput style={styles.textInput} />
                <Feather name="camera" size={24} color="grey" style={styles.icon} />
                <Feather name="mic" size={24} color="grey" style={styles.icon} />
            </View>
            <View style={styles.buttonContainer}>
                <AntDesign name="plus" size={24} color="white" />
            </View>
        </View>
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