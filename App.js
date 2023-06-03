import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import Navbar from './components/Navbar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from './utils/colors'
import SearchBar from './components/SearchBar'

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false)

    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" />
                <Navbar />
                <SearchBar />
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
