import { StyleSheet, StatusBar } from "react-native";
import Accueil from "../screens/Accueil";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../drawer/Drawer";
import { color } from "../utils/colors";
import Notifications from "../screens/Notifications";
import Connection from "../components/Connection";
import Messages from "../screens/Messages";
import ObjetsAchtes from "../screens/ObjetsAchtes";
import ObjetsSuivis from "../screens/ObjetsSuivis";
import Favories from "../screens/Favories";
import Acheter from "../screens/Acheter";
import Encheres from "../screens/Encheres";
import MesVentes from "../screens/MesVentes";
import Categories from "../screens/Categories";
import BonsPlans from "../screens/BonsPlans";
import Parametres from "../screens/Parametres";
import Aide from "../screens/Aide";
//import { StatusBar } from "expo-status-bar";
import CategorieScreen from "../screens/CategorieScreen";
import ArticleScreen from "../screens/ArticleScreen";

const Drawer = createDrawerNavigator();

export default function Page() {
  return (
    <>
      <NavigationContainer
        independent={true}
        style={{ flex: 1, backgroundColor: "blue" }}
      >
        <Drawer.Navigator
          initialRouteName="Accueil"
          //useLegacyImplementation={true}
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: color.primary,
            },
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Connection" component={Connection} />
          <Drawer.Screen name="Accueil" component={Accueil} />
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="Messages" component={Messages} />
          <Drawer.Screen name="ObjetsSuivis" component={ObjetsSuivis} />
          <Drawer.Screen name="Favories" component={Favories} />
          <Drawer.Screen name="Acheter" component={Acheter} />
          <Drawer.Screen name="ObjetsAchtes" component={ObjetsAchtes} />
          <Drawer.Screen name="Encheres" component={Encheres} />
          <Drawer.Screen name="MesVentes" component={MesVentes} />
          <Drawer.Screen name="Categories" component={Categories} />
          <Drawer.Screen name="BonsPlans" component={BonsPlans} />
          <Drawer.Screen name="Parametres" component={Parametres} />
          <Drawer.Screen name="CategorieScreen" component={CategorieScreen} />
          <Drawer.Screen name="ArticleScreen" component={ArticleScreen} />
          <Drawer.Screen name="Aide" component={Aide} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
