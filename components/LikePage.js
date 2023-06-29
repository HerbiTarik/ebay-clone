import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { color } from '../utils/colors'

const LikePage = () => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed,
            ]}
        >
            <Text style={styles.text}>
                {"Que pensez-vous de la page d'acceuil eBay ?"}
            </Text>
            <View style={styles.likes}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Feather name="thumbs-down" size={24} color="white" />
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    text: {
        color: color.text,
        textAlign: 'center',
        fontSize: 16,
    },
    likes: {
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'center',
        columnGap: 40,
    },
    pressed: {
        backgroundColor: color.grey2,
    },
})
export default LikePage
