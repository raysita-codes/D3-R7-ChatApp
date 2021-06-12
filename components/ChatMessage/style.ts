import { StyleSheet } from "react-native";
import  Colors  from "../../constants/Colors";

const style = StyleSheet.create({

    container: {
        padding: 10,
    },

    messageBox: {
        borderRadius: 7,
        padding: 10,
    },

    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 4,
    },

    time: {
        alignSelf: 'flex-end',
        color: 'grey',
        fontSize: 12,
    },
})

export default style;