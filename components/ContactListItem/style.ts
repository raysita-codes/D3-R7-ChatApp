import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },

    leftContainer: {
        flexDirection: 'row',
    },

    midContainer: {
        justifyContent: 'space-around',
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },

    username: {
        fontWeight: 'bold',
        fontSize: 15,
    },
})

export default styles;