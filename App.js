import Accueil from './screens/Accueil'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { color } from './utils/colors'
import DrawerContent from './drawer/DrawerContent'
import Notifications from './screens/Notifications'
import Connection from './screens/Connection'
import Messages from './screens/Messages'
import ObjetsSuivis from './screens/ObjetsSuivis'
import Favoris from './screens/Favoris'
import Acheter from './screens/Acheter'
import ObjetsAchetes from './screens/ObjetsAchetes'
import Encheres from './screens/Encheres'
import MesVentes from './screens/MesVentes'
import Categories from './screens/Categories'
import BonsPlans from './screens/BonsPlans'
import Parametres from './screens/Parametres'
import Aide from './screens/Aide'

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Accueil"
                useLegacyImplementation={true}
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        // backgroundColor: color.primary,
                    },
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="Connection" component={Connection} />
                <Drawer.Screen name="Accueil" component={Accueil} />
                <Drawer.Screen name="Notifications" component={Notifications} />
                <Drawer.Screen name="Messages" component={Messages} />
                <Drawer.Screen name="ObjetsSuivis" component={ObjetsSuivis} />
                <Drawer.Screen name="Favoris" component={Favoris} />
                <Drawer.Screen name="Acheter" component={Acheter} />
                <Drawer.Screen name="ObjetsAchetes" component={ObjetsAchetes} />
                <Drawer.Screen name="Encheres" component={Encheres} />
                <Drawer.Screen name="MesVentes" component={MesVentes} />
                <Drawer.Screen name="Categories" component={Categories} />
                <Drawer.Screen name="BonsPlans" component={BonsPlans} />
                <Drawer.Screen name="Parametres" component={Parametres} />
                <Drawer.Screen name="Aide" component={Aide} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
