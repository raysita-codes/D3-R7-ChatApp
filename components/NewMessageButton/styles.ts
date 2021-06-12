import { StyleSheet } from "react-native";  
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.light.tint,
        width: 55,
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})

export default styles;