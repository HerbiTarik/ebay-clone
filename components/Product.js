import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../utils/colors'

const product = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleShow}>
                <Text style={styles.title}>Daily Deals</Text>
                <Pressable>
                    <Text style={styles.show}>Tout afficher</Text>
                </Pressable>
            </View>
            <Pressable style={styles.contenent}>
                <Image style={styles.image} />
                <Text style={styles.description}></Text>
                <Text style={styles.price}></Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 20,
    },
    titleShow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'flex-end',
    },
    title: {
        color: color.text,
        fontSize: 23,
        fontWeight: 'bold',
    },
    show: {
        color: color.text,
        fontSize: 14.5,
        textDecorationLine: 'underline',
    },
})
export default product
