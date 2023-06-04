import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../utils/colors'

const Menu = () => {
    return (
        <View>
            <Text style={styles.text}>Selling</Text>
            <Text style={styles.text}>Deals</Text>
            <Text style={styles.text}>Categories</Text>
            <Text style={styles.text}>Saved</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: color.text,
    },
})

export default Menu
