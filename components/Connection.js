import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../utils/colors'
import ButtonConnection from './ButtonConnection'

const Connection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Connectez-vous pour obtenir une {'\n'}expérience personnalisée
                sur eBay
            </Text>
            <View style={styles.buttons}>
                <ButtonConnection style={styles.insButton}>
                    {"S'inscrire"}
                </ButtonConnection>
                <ButtonConnection style={styles.conButton}>
                    {'Se connecter'}
                </ButtonConnection>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        letterSpacing: 0.6,
        color: color.text,
        lineHeight: 25,
    },
    insText: {
        color: color.text,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 35,
    },
    insButton: {
        marginRight: 5,
    },
    conButton: {
        marginLeft: 5,
    },
})

export default Connection
