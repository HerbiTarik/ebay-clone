import { View, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer'
import {
    MaterialCommunityIcons,
    Octicons,
    Ionicons,
    FontAwesome,
    Feather,
    AntDesign,
    SimpleLineIcons,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const DrawerContent = (props) => {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
            {/*<DrawerItemList {...props} />*/}
            <DrawerItem
                icon={({ color, size }) => (
                    <MaterialCommunityIcons
                        name="account-circle-outline"
                        size={size}
                        color={color}
                    />
                )}
                label="Se connecter"
                onPress={() => {
                    navigation.navigate('Connection')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Octicons name="home" size={size} color={color} />
                )}
                label="Accueil"
                onPress={() => {
                    navigation.navigate('Accueil')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Ionicons
                        name="notifications-outline"
                        size={size}
                        color={color}
                    />
                )}
                label="Notifications"
                onPress={() => {
                    navigation.navigate('Notifications')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <FontAwesome name="envelope-o" size={size} color={color} />
                )}
                label="Messages"
                onPress={() => {
                    navigation.navigate('Messages')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Feather name="heart" size={size} color={color} />
                )}
                label="Objets suivis"
                onPress={() => {
                    navigation.navigate('ObjetsSuivis')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Feather name="heart" size={size} color={color} />
                )}
                label="Favoris"
                onPress={() => {
                    navigation.navigate('Favoris')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Ionicons name="reload" size={size} color={color} />
                )}
                label="Acheter de nouveau"
                onPress={() => {
                    navigation.navigate('Acheter')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Feather name="package" size={size} color={color} />
                )}
                label="Objets achetés"
                onPress={() => {
                    navigation.navigate('ObjetsAchetes')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Ionicons name="hammer-outline" size={size} color={color} />
                )}
                label="Enchères et offres"
                onPress={() => {
                    navigation.navigate('Enchers')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <MaterialCommunityIcons
                        name="tag-outline"
                        size={size}
                        color={color}
                    />
                )}
                label="Mes ventes"
                onPress={() => {
                    navigation.navigate('MesVentes')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <AntDesign name="appstore-o" size={size} color={color} />
                )}
                label="Catégories"
                onPress={() => {
                    navigation.navigate('Categories')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <SimpleLineIcons name="energy" size={size} color={color} />
                )}
                label="Bon plans"
                onPress={() => {
                    navigation.navigate('BonsPlans')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Ionicons
                        name="settings-outline"
                        size={size}
                        color={color}
                    />
                )}
                label="Paramètres"
                onPress={() => {
                    navigation.navigate('Parametres')
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <AntDesign
                        name="questioncircleo"
                        size={size}
                        color={color}
                    />
                )}
                label="Aide"
                onPress={() => {
                    navigation.navigate('Aide')
                }}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
})
export default DrawerContent
