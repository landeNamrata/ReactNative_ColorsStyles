import React, { createElement } from 'react'
import {Text , View } from 'react-native';

const ComponentScreen = () => {
    const name = "Namrata"
    return <View>
        <Text style={{fontSize:25 , color:'red'}}>From Component Screen</Text>
        <Text style={{fontSize:20 , color:'black'}}>My Name is {name}</Text>
    </View>
}



export default ComponentScreen;
