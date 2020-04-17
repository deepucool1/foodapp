import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" style={styles.icon} />
            <TextInput style={styles.input}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        height: 50,
        backgroundColor: '#E6E3E4',
        borderRadius: 5,
        flexDirection: 'row',
        margin: 15
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 50,
        alignSelf: "center"
    }
})

export default SearchBar
