import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { color } from '../utils/colors'
import ButtonMenu from './ButtonMenu'
import {
    MaterialCommunityIcons,
    SimpleLineIcons,
    AntDesign,
} from '@expo/vector-icons'

const Menu = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <ButtonMenu
                    name="tag-outline"
                    iconComponent={MaterialCommunityIcons}
                >
                    Selling
                </ButtonMenu>
                <ButtonMenu name="energy" iconComponent={SimpleLineIcons}>
                    Deals
                </ButtonMenu>
                <ButtonMenu name="appstore-o" iconComponent={AntDesign}>
                    Categories
                </ButtonMenu>
                <ButtonMenu name="hearto" iconComponent={AntDesign}>
                    Saved
                </ButtonMenu>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 8,
    },
    text: {
        color: color.text,
    },
})

export default Menu
