import React from 'react'
import { View, Text, Image , StyleSheet} from "react-native";

const ImageDetail = (props) => {
    return (
        <View style={styles.ImageAlign}>
            <Image source={props.source} ></Image>
            <Text>Image Name - {props.title}</Text>
            <Text>Image Score - {props.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ImageAlign :{
        alignSelf:'center',
        marginTop:'5%'
    }
})
export default ImageDetail;