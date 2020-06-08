//with reducer code
import React, { useReducer } from 'react'
import { Text, View, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
const {count} = state;
    return (
        <View>
            <Button
                title="Increment"
                onPress={() => dispatch({ type: 'increment', payload: 1 })}
            ></Button>
            <Button
                title="Decrement"
                onPress={() => dispatch({ type: 'decrement', payload: 1 })}
            ></Button>
            <Text style={{ alignSelf: 'center', marginTop: '5%' }} >Counter Value   {count} </Text>
        </View>
    )
}
export default CounterScreen;
