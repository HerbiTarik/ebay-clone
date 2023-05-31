import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import ebayLogoNav from '../assets/ebayLogoNav.jpg'

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menuImage}>
                <Feather
                    name="menu"
                    size={25}
                    color="black"
                    style={styles.menu}
                />
                <Image source={ebayLogoNav} style={styles.image} />
            </View>
            <Feather
                name="shopping-cart"
                size={25}
                color="black"
                style={styles.shopping}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    menuImage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menu: {
        padding: 8,
        backgroundColor: '#191919',
        borderRadius: 50,
        color: 'white',
    },
    image: {
        width: 90,
        height: 40,
        marginLeft: 20,
    },
    shopping: {
        padding: 8,
        backgroundColor: '#191919',
        borderRadius: 50,
        color: 'white',
    },
})

export default Navbar
