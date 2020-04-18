import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from "../components/searchbar";
import yelp from '../api/yelp'



const searchscreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        })
        setResults(response.data.businesses)
    }


    return (
        <View style={styles.view}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>We have found {results.length} Results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default searchscreen
