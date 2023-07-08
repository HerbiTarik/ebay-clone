import { Text, View, StyleSheet } from 'react-native'
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
import { color } from '../utils/colors'

const DrawerContent = (props) => {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props} style={styles.drawerContent}>
            {/*<DrawerItemList {...props} />*/}
            <View style={styles.viewConnexion}>
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
                    inactiveTintColor={color.text}
                    style={styles.itemConnexion}
                    labelStyle={{ fontSize: 20, letterSpacing: 0.6 }}
                />
            </View>
            <View style={styles.partOne}>
                <View style={styles.itemView}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Octicons name="home" size={size} color={color} />
                        )}
                        label="Accueil"
                        onPress={() => {
                            navigation.navigate('Accueil')
                        }}
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.itemView}>
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
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.itemView}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesome
                                name="envelope-o"
                                size={size}
                                color={color}
                            />
                        )}
                        label="Messages"
                        onPress={() => {
                            navigation.navigate('Messages')
                        }}
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
            </View>
            <Text style={styles.text}>Mon eBay</Text>
            <View style={styles.partTwo}>
                <View style={styles.itemView}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather name="heart" size={size} color={color} />
                        )}
                        label="Objets suivis"
                        onPress={() => {
                            navigation.navigate('ObjetsSuivis')
                        }}
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.itemView}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather name="heart" size={size} color={color} />
                        )}
                        label="Favoris"
                        onPress={() => {
                            navigation.navigate('Favoris')
                        }}
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.itemView}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Ionicons name="reload" size={size} color={color} />
                        )}
                        label="Acheter de nouveau"
                        onPress={() => {
                            navigation.navigate('Acheter')
                        }}
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.itemView}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather name="package" size={size} color={color} />
                        )}
                        label="Objets achetés"
                        onPress={() => {
                            navigation.navigate('ObjetsAchetes')
                        }}
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.itemView}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Ionicons
                                name="hammer-outline"
                                size={size}
                                color={color}
                            />
                        )}
                        label="Enchères et offres"
                        onPress={() => {
                            navigation.navigate('Enchers')
                        }}
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.itemView}>
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
                        inactiveTintColor={color.drawerTextColor}
                        style={styles.item}
                        labelStyle={styles.label}
                    />
                </View>
            </View>
            <View style={styles.itemView}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign
                            name="appstore-o"
                            size={size}
                            color={color}
                        />
                    )}
                    label="Catégories"
                    onPress={() => {
                        navigation.navigate('Categories')
                    }}
                    inactiveTintColor={color.drawerTextColor}
                    style={styles.item}
                    labelStyle={styles.label}
                />
            </View>
            <View style={styles.itemView}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <SimpleLineIcons
                            name="energy"
                            size={size}
                            color={color}
                        />
                    )}
                    label="Bon plans"
                    onPress={() => {
                        navigation.navigate('BonsPlans')
                    }}
                    inactiveTintColor={color.drawerTextColor}
                    style={styles.item}
                    labelStyle={styles.label}
                />
            </View>
            <View style={styles.itemView}>
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
                    inactiveTintColor={color.drawerTextColor}
                    style={styles.item}
                    labelStyle={styles.label}
                />
            </View>
            <View style={styles.itemView}>
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
                    inactiveTintColor={color.drawerTextColor}
                    style={styles.item}
                    labelStyle={styles.label}
                />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    partOne: {
        borderBottomWidth: 0.5,
        borderColor: color.drawerTextColor,
    },
    text: {
        color: color.text,
        marginHorizontal: 15,
        fontSize: 16,
        marginVertical: 14,
    },
    partTwo: {
        borderBottomWidth: 0.5,
        borderColor: color.drawerTextColor,
    },
    viewConnexion: {
        width: '100%',
        marginTop: 0,
        paddingVertical: 10,
    },
    itemConnexion: {},
    label: {
        fontSize: 15,
    },
    item: {
        borderRadius: 50,
    },
})
export default DrawerContent
