import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            <Text>My Name is {name}</Text>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={newPass => setPassword(newPass)}
            />
            {password.length <= 4 ? <Text>Password is too short</Text> : null}

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20
    }
})
export default TextScreen;