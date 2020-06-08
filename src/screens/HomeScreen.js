import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props)
  return <View>
    <Text style={styles.text}>Home Screen</Text>
    <Button
      // onPress= {()=>console.log('Component Screen press')}
      onPress={() => props.navigation.navigate('Component')}
      title="Go to Component Screen"
    />
    <Button    
      onPress={() => props.navigation.navigate('ListData')}
      title="Go to FlatList Component Screen"
    />
    <Button
      onPress={() => props.navigation.navigate('Image')}
      title="Go to Image Component Screen"
    />
    <Button
      onPress={() => props.navigation.navigate('Counter')}
      title="Go to Counter Screen"
    />
    <Button
      onPress={() => props.navigation.navigate('Color')}
      title="Go to Color Screen"
    />
    <Button
      onPress={() => props.navigation.navigate('Square')}
      title="Go to Square Screen"
    />
 
    <Button
      onPress={() => props.navigation.navigate('Text')}
      title="Go to Text Input Screen"
    />
      <Button
      onPress={() => props.navigation.navigate('Box')}
      title="Go to Box Screen"
    />
    {/* <TouchableOpacity   onPress= {()=>props.navigation.navigate('ListData')}>
      <Text>Got to FlatList Component</Text>
    </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding:10
  },
 
});

export default HomeScreen;
