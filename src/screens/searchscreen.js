import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from "../components/searchbar";

const searchscreen = () => {
    const [term, setTerm] = useState('')
    return (
        <View style={styles.view}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default searchscreen
