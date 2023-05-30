import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

//Garder l'écran d'accueil visible pendant que nous récupérons des ressources
SplashScreen.preventAutoHideAsync()

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(Entypo.font)
                await new Promise((resolve) => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }
        prepare()
    }, [])
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync()
        }
    }, [appIsReady])

    if (!appIsReady) {
        return null
    }
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onLayout={onLayoutRootView}
        >
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
