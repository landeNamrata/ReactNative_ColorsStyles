import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native';

const FlatListComponent = () => {
    const friends = [
        { key: 1, name: 'Jay', age: '29' },
        { key: 2, name: 'Amol', age: 27 },
        { key: 3, name: 'Namrata', age: 25 },
        { key: 4, name: 'Sachin', age: 30 },
        { key: 5, name: 'Pramod', age: 28 },
        { key: 6, name: 'Suhas', age: 21 },
        { key: 7, name: 'Ganesh', age: 22 }
    ]
    return <View>
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            // key={item.key}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.TextStyle}>{item.name} - {item.age}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 20,
        backgroundColor: 'lightblue'
    }
})

export default FlatListComponent;