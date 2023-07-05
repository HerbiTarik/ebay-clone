import Accueil from './screens/Accueil'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { color } from './utils/colors'

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                useLegacyImplementation={true}
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: color.primary,
                    },
                }}
            >
                <Drawer.Screen name="Home" component={Accueil} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
