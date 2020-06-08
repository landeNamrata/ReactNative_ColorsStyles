import React from 'react'
import {View} from "react-native";
import ImageDetail from '../../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
           <ImageDetail title="Forest" source={require('../../../assets/forest.jpg')} score={4}/>
           <ImageDetail title="Beach"  source={require('../../../assets/beach.jpg')} score={9}/>
           <ImageDetail title="Mountain"  source={require('../../../assets/mountain.jpg')} score={10}/>
        </View>
    )
}

export default ImageScreen;