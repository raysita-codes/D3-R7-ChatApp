import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }

    const onSendPress = () => {
        console.warn(`Send: ${message}`)

        // send the message to the backend
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput 
                     placeholder={"Type a message"}
                     style={styles.textInput}
                     multiline
                     value={message}
                     onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}
            </View>

            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message ? 
                    <MaterialCommunityIcons name = "microphone" size = {28} color = "white" /> : 
                    <MaterialIcons name = "send" size = {25} color = "white" />
                }
            </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox;