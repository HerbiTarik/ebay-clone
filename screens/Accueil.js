import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import Menu from '../components/Menu'
import Connection from '../components/Connection'
import Product from '../components/Product'
import Categorie from '../components/Categorie'
import LikePage from '../components/LikePage'
import Navbar from '../components/Navbar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from '../utils/colors'
import { StatusBar } from 'expo-status-bar'

const Accueil = ({ navigation }) => {
    const drawerFunction = () => {
        try {
            navigation.openDrawer()
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" />
                <Navbar />
                <ScrollView>
                    <SearchBar />
                    <Menu />
                    <Connection />
                    <Product />
                    <Categorie />
                    <LikePage />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,
    },
})

export default Accueil
