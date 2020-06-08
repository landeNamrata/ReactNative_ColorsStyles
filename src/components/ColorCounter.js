import React from 'react'
import {Text,Button,StyleSheet,View} from "react-native";

const ColorCounter = (props) => {
    return (
        <View>
            <Text>{props.color}</Text>
            <Button 
            title={`Increment ${props.color}`}
            onPress={() => props.onIncrease()}
            />
             <Button 
             title={`Decrement ${props.color}`}
             onPress={() => props.onDecrease()}
            />
        </View>
    )
}

export default ColorCounter;
