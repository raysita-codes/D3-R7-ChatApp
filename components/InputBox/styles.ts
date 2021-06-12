import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        flex: 1,
        marginRight: 10,
        alignItems: 'flex-end',
    },

    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },

    icon: {
        marginHorizontal: 5,
    }

})

export default styles;