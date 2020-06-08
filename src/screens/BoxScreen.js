import React from 'react';
import { Text, View, StyleSheet } from 'react-native'


const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Box Screen</Text>
            </View>
            <View style={styles.viewStyle1}>
                <Text style={styles.textStyle1}>alignItems</Text>
                <Text style={styles.textStyle1}>alignItems </Text>
                <Text style={styles.textStyle1}>alignItems</Text>
            </View>
            <View style={styles.viewStyle2}>
                <Text style={styles.textStyle2}>FlexDirection</Text>
                <Text style={styles.textStyle2}>FlexDirection</Text>
                <Text style={styles.textStyle2}>FlexDirection</Text>
            </View>
            <View style={styles.viewStyle3}>
                <Text style={styles.textStyle3}>Justify Content</Text>
                <Text style={styles.textStyle3}>Justify Content</Text>
                <Text style={styles.textStyle3}>Justify Content</Text>
            </View>
            <View style={styles.viewStyle4}>
                <Text style={styles.textOneStyle4}>Flex </Text>
                <Text style={styles.textTwoStyle4}>Flex </Text>
                <Text style={styles.textThreeStyle4}>Flex </Text>
            </View>
            <View style={styles.viewStyle5}>
                <Text style={styles.textOneStyle5}>Align Self </Text>
                <Text style={styles.textTwoStyle5}>Align Self </Text>
                <Text style={styles.textThreeStyle5}>Align Self </Text>
            </View>
            <View style={styles.viewStyle6}>
                <Text style={styles.textOneStyle6}>Positions </Text>
                <Text style={styles.textTwoStyle6}>Positions</Text>
                <Text style={styles.textThreeStyle6}>Positions</Text>
            </View>
            <View style={styles.viewParentStyle7}>
                <View style={styles.viewOneStyle7}></View>
                <View style={styles.viewTwoStyle7}></View>
                <View style={styles.viewThreeStyle7}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        marginHorizontal: 20,
        marginVertical: 20
    },
    //Align Items
    viewStyle1: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start' //flex-end //center   // Apply to the parent view
    },
    textStyle1: {
        borderWidth: 1,
        borderColor: 'red',
    },
    //FlexDirection
    viewStyle2: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',  //column
        height: 90,
        // alignItems:'flex-end'  //stretch //flex-start //center
    },
    textStyle2: {
        borderWidth: 1,
        borderColor: 'red',
    },
    //Justify Content
    viewStyle3: {
        borderWidth: 3,
        borderColor: 'black',
        height: 90,
        flexDirection: 'column', //row //column
        justifyContent: 'center' //flex-start //flex-end //streach //space-between //spacearound //space-evenly //center
    },
    textStyle3: {
        borderWidth: 1,
        borderColor: 'red',
    },
    //flex
    viewStyle4: {
        borderWidth: 3,
        borderColor: 'black',
        height: 90,
    },
    textOneStyle4: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },
    textTwoStyle4: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },
    textThreeStyle4: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },
    //Align Self
    viewStyle5: {
        borderWidth: 3,
        borderColor: 'black',
        height: 90,
        alignItems: 'center'
    },
    textOneStyle5: {
        borderWidth: 1,
        borderColor: 'red',
    },
    textTwoStyle5: {
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'flex-end' //flex-start //flex-end //center
    },
    textThreeStyle5: {
        borderWidth: 1,
        borderColor: 'red',
    },
    //Positions
    viewStyle6: {
        borderWidth: 3,
        borderColor: 'black',
        height: 90,
        //   alignItems:  'stretch' //strech
    },
    textOneStyle6: {
        borderWidth: 1,
        borderColor: 'red',
    },
    textTwoStyle6: {
        borderWidth: 1,
        borderColor: 'red',
        // position:'absolute', //relative
        fontSize: 18,
        //    top:10,
        //    bottom:10,
        //    left:10,
        //    right:10
        // ...StyleSheet.absoluteFillObject
    },
    textThreeStyle6: {
        borderWidth: 1,
        borderColor: 'red',
    },

    //Assignment
    viewParentStyle7: {
        borderWidth: 3,
        borderColor: 'black',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle7: {
        height: 25,
        width: 25,
        backgroundColor: 'red'
    },
    viewTwoStyle7: {
        height: 25,
        width: 25,
        backgroundColor: 'green',
        //        marginTop:50
        alignSelf: 'flex-end'
    },
    viewThreeStyle7: {
        height: 25,
        width: 25,
        backgroundColor: 'purple'
    },

})

export default BoxScreen;

//these two child property
        //flex: 
        //alignSelf

//these three parent property     
   //  flexDirection:'column', //row //column
   // justifyContent:'center'
   //  alignItems:'flex-start' //flex-end //center   // Apply to the parent view