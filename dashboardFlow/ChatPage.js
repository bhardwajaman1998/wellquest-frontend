import React from "react";
import { Text, navigation, StyleSheet,View} from "react-native";

const ChatPage =({navigation})=>{

    return(
        <View style={styles.container}>
            <Text>Chat Screen</Text>
        </View>
    );
}

export default ChatPage;

const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
});