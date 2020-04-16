import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const searchscreen = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>This is Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
        height: 680,
    },
    text: {

    }
})

export default searchscreen
