import React from "react";
import { Message } from "../../types";
import { Text, View } from "react-native";
import moment from "moment";
import style from "./style";

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={style.container}>
            {/* conditionally style the messages */}
            <View style={[
                style.messageBox, {
                     backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                     marginLeft: isMyMessage() ? 50 : 0,
                     marginRight: isMyMessage() ? 0 : 50,
                }
                ]}>
                {/* conditionally render */}
                {!isMyMessage() && <Text style={style.name}>{message.user.name}</Text>}
                <Text>{message.content}</Text>
                <Text style={style.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
        
    )
}

export default ChatMessage;