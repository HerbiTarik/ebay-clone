import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import Navbar from './components/Navbar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from './utils/colors'
import SearchBar from './components/SearchBar'
import Menu from './components/Menu'
import Connection from './components/Connection'
import Product from './components/Product'
import Categorie from './components/Categorie'
export default function App() {
    const [appIsReady, setAppIsReady] = useState(false)

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <StatusBar style="light" />
                    <Navbar />
                    <SearchBar />
                    <Menu />
                    <Connection />
                    <Product />
                    <Categorie />
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
